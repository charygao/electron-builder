import { path7za } from "7zip-bin"
import { debug7z, debug7zArgs, isMacOsSierra, spawn } from "electron-builder-util"
import { computeEnv, getLinuxToolsPath } from "electron-builder-util/out/bundledTool"
import { exists } from "electron-builder-util/out/fs"
import { unlink } from "fs-extra-p"
import * as path from "path"
import { CompressionLevel } from "../core"

class CompressionDescriptor {
  constructor(public flag: string, public env: string, public minLevel: string, public maxLevel: string = "-9") {
  }
}

const extToCompressionDescriptor: { [key: string]: CompressionDescriptor; } = {
  "tar.xz": new CompressionDescriptor("--xz", "XZ_OPT", "-0", "-9e"),
  "tar.lz": new CompressionDescriptor("--lzip", "LZOP", "-0"),
  "tar.gz": new CompressionDescriptor("--gz", "GZIP", "-1"),
  "tar.bz2": new CompressionDescriptor("--bzip2", "BZIP2", "-1"),
}

/** @internal */
export async function tar(compression: CompressionLevel | null | undefined, format: string, outFile: string, dirToArchive: string, isMacApp: boolean = false) {
  // we don't use 7z here - develar: I spent a lot of time making pipe working - but it works on MacOS and often hangs on Linux (even if use pipe-io lib)
  // and in any case it is better to use system tools (in the light of docker - it is not problem for user because we provide complete docker image).
  const info = extToCompressionDescriptor[format]
  let tarEnv = process.env
  if (process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL != null) {
    tarEnv = {...tarEnv}
    tarEnv[info.env] = "-" + process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL
  }
  else if (compression != null && compression !== "normal") {
    tarEnv = {...tarEnv}
    tarEnv[info.env] = compression === "store" ? info.minLevel : info.maxLevel
  }

  const args = [info.flag, "-cf", outFile]
  if (!isMacApp) {
    args.push("--transform", `s,^\\.,${path.basename(outFile, "." + format)},`)
  }
  args.push(isMacApp ? path.basename(dirToArchive) : ".")

  if (await isMacOsSierra()) {
    const linuxToolsPath = await getLinuxToolsPath()
    tarEnv = {
      ...tarEnv,
      PATH: computeEnv(process.env.PATH, [path.join(linuxToolsPath, "bin")]),
      LANG: "en_US.UTF-8",
      LC_CTYPE: "UTF-8"
    }
  }

  await spawn(process.platform === "darwin" || process.platform === "freebsd" ? "gtar" : "tar", args, {
    cwd: isMacApp ? path.dirname(dirToArchive) : dirToArchive,
    env: tarEnv
  })
  return outFile
}

export interface ArchiveOptions {
  /**
   * @default false
   */
  withoutDir?: boolean

  /**
   * @default true
   */
  solid?: boolean

  listFile?: string

  dictSize?: number
  excluded?: Array<string>

  method?: "Copy" | "LZMA"
}

// 7z is very fast, so, use ultra compression
/** @internal */
export function addUltraArgs(args: Array<string>, options: ArchiveOptions) {
  // https://stackoverflow.com/questions/27136783/7zip-produces-different-output-from-identical-input
  // https://sevenzip.osdn.jp/chm/cmdline/switches/method.htm#7Z
  // -mtm=off disable "Stores last Modified timestamps for files."
  // tc and ta are off by default, but to be sure, we explicitly set it to off
  args.push("-mx=9", `-md=${options.dictSize || 64}m`, `-ms=${options.solid === false ? "off" : "on"}`, "-mtm=off", "-mtc=off", "-mta=off")
}

/** @internal */
export function addZipArgs(args: Array<string>) {
  // -mcu switch:  7-Zip uses UTF-8, if there are non-ASCII symbols.
  // because default mode: 7-Zip uses UTF-8, if the local code page doesn't contain required symbols.
  // but archive should be the same regardless where produced
  args.push("-mcu")
  // disable "Stores NTFS timestamps for files: Modification time, Creation time, Last access time." to produce the same archive for the same data
  args.push("-mtc=off")
  args.push("-tzip")
}

/** @internal */
export async function archive(compression: CompressionLevel | null | undefined, format: string, outFile: string, dirToArchive: string, options: ArchiveOptions = {}): Promise<string> {
  let storeOnly = compression === "store"
  const args = debug7zArgs("a")
  if (format === "7z" || format.endsWith(".7z")) {
    if (process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL != null) {
      storeOnly = false
      args.push(`-mx=${process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL}`)
    }
    else if (!storeOnly) {
      addUltraArgs(args, options)
    }
  }
  else if (format === "zip" && compression === "maximum") {
    // http://superuser.com/a/742034
    args.push("-mfb=258", "-mpass=15")
  }
  else if (process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL != null) {
    storeOnly = false
    args.push(`-mx=${process.env.ELECTRON_BUILDER_COMPRESSION_LEVEL}`)
  }
  else if (!storeOnly) {
    args.push("-mx=9")
  }

  // remove file before - 7z doesn't overwrite file, but update
  try {
    await unlink(outFile)
  }
  catch (e) {
    // ignore
  }

  if (options.method != null) {
    args.push(`-mm=${options.method}`)
  }
  else if (format === "zip" || storeOnly) {
    args.push("-mm=" + (storeOnly ? "Copy" : "Deflate"))
  }

  if (format === "zip") {
    addZipArgs(args)
  }

  args.push(outFile, options.listFile == null ? (options.withoutDir ? "." : path.basename(dirToArchive)) : `@${options.listFile}`)
  if (options.excluded != null) {
    args.push(...options.excluded)
  }

  try {
    await spawn(path7za, args, {
      cwd: options.withoutDir ? dirToArchive : path.dirname(dirToArchive),
    }, {isDebugEnabled: debug7z.enabled})
  }
  catch (e) {
    if (e.code === "ENOENT" && !(await exists(dirToArchive))) {
      throw new Error(`Cannot create archive: "${dirToArchive}" doesn't exist`)
    }
    else {
      throw e
    }
  }

  return outFile
}