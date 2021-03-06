## Modules

<dl>
<dt><a href="#module_electron-builder-http/out/bintray">electron-builder-http/out/bintray</a></dt>
<dd></dd>
<dt><a href="#module_electron-builder-http/out/rfc2253Parser">electron-builder-http/out/rfc2253Parser</a></dt>
<dd></dd>
<dt><a href="#module_electron-builder-http">electron-builder-http</a></dt>
<dd></dd>
</dl>

<a name="module_electron-builder-http/out/bintray"></a>
## electron-builder-http/out/bintray

* [electron-builder-http/out/bintray](#module_electron-builder-http/out/bintray)
    * [`.File`](#File)
    * [`.Version`](#Version)
    * [.BintrayClient](#BintrayClient)
        * [`.createVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+createVersion) ⇒ <code>Promise&lt;any&gt;</code>
        * [`.deleteVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+deleteVersion) ⇒ <code>Promise&lt;any&gt;</code>
        * [`.setRequestHeaders(value)`](#module_electron-builder-http/out/bintray.BintrayClient+setRequestHeaders)
        * [`.getVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+getVersion) ⇒ <code>Promise&lt;[Version](#Version)&gt;</code>
        * [`.getVersionFiles(version)`](#module_electron-builder-http/out/bintray.BintrayClient+getVersionFiles) ⇒ <code>Promise&lt;Array&lt;[File](#File)&gt;&gt;</code>

<a name="File"></a>
### `File`
**Kind**: interface of [<code>electron-builder-http/out/bintray</code>](#module_electron-builder-http/out/bintray)  
**Properties**

| Name | Type |
| --- | --- |
| **name**| <code>String</code> | 
| **path**| <code>String</code> | 
| **sha1**| <code>String</code> | 
| **sha256**| <code>String</code> | 

<a name="Version"></a>
### `Version`
**Kind**: interface of [<code>electron-builder-http/out/bintray</code>](#module_electron-builder-http/out/bintray)  
**Properties**

| Name | Type |
| --- | --- |
| **name**| <code>String</code> | 
| **package**| <code>String</code> | 

<a name="BintrayClient"></a>
### BintrayClient
**Kind**: class of [<code>electron-builder-http/out/bintray</code>](#module_electron-builder-http/out/bintray)  
**Properties**

| Name | Type |
| --- | --- |
| auth| <code>String</code> \| <code>null</code> | 
| repo| <code>String</code> | 
| owner| <code>String</code> | 
| user| <code>String</code> | 
| component| <code>String</code> \| <code>null</code> | 
| distribution| <code>String</code> \| <code>null</code> | 
| packageName| <code>String</code> | 


* [.BintrayClient](#BintrayClient)
    * [`.createVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+createVersion) ⇒ <code>Promise&lt;any&gt;</code>
    * [`.deleteVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+deleteVersion) ⇒ <code>Promise&lt;any&gt;</code>
    * [`.setRequestHeaders(value)`](#module_electron-builder-http/out/bintray.BintrayClient+setRequestHeaders)
    * [`.getVersion(version)`](#module_electron-builder-http/out/bintray.BintrayClient+getVersion) ⇒ <code>Promise&lt;[Version](#Version)&gt;</code>
    * [`.getVersionFiles(version)`](#module_electron-builder-http/out/bintray.BintrayClient+getVersionFiles) ⇒ <code>Promise&lt;Array&lt;[File](#File)&gt;&gt;</code>

<a name="module_electron-builder-http/out/bintray.BintrayClient+createVersion"></a>
#### `bintrayClient.createVersion(version)` ⇒ <code>Promise&lt;any&gt;</code>
**Kind**: instance method of [<code>BintrayClient</code>](#BintrayClient)  

| Param | Type |
| --- | --- |
| version | <code>String</code> | 

<a name="module_electron-builder-http/out/bintray.BintrayClient+deleteVersion"></a>
#### `bintrayClient.deleteVersion(version)` ⇒ <code>Promise&lt;any&gt;</code>
**Kind**: instance method of [<code>BintrayClient</code>](#BintrayClient)  

| Param | Type |
| --- | --- |
| version | <code>String</code> | 

<a name="module_electron-builder-http/out/bintray.BintrayClient+setRequestHeaders"></a>
#### `bintrayClient.setRequestHeaders(value)`
**Kind**: instance method of [<code>BintrayClient</code>](#BintrayClient)  

| Param | Type |
| --- | --- |
| value | <code>[RequestHeaders](#RequestHeaders)</code> \| <code>null</code> | 

<a name="module_electron-builder-http/out/bintray.BintrayClient+getVersion"></a>
#### `bintrayClient.getVersion(version)` ⇒ <code>Promise&lt;[Version](#Version)&gt;</code>
**Kind**: instance method of [<code>BintrayClient</code>](#BintrayClient)  

| Param | Type |
| --- | --- |
| version | <code>String</code> | 

<a name="module_electron-builder-http/out/bintray.BintrayClient+getVersionFiles"></a>
#### `bintrayClient.getVersionFiles(version)` ⇒ <code>Promise&lt;Array&lt;[File](#File)&gt;&gt;</code>
**Kind**: instance method of [<code>BintrayClient</code>](#BintrayClient)  

| Param | Type |
| --- | --- |
| version | <code>String</code> | 

<a name="module_electron-builder-http/out/rfc2253Parser"></a>
## electron-builder-http/out/rfc2253Parser
<a name="module_electron-builder-http/out/rfc2253Parser.parseDn"></a>
### `electron-builder-http/out/rfc2253Parser.parseDn(seq)` ⇒ <code>Map&lt;String \| String&gt;</code>
**Kind**: method of [<code>electron-builder-http/out/rfc2253Parser</code>](#module_electron-builder-http/out/rfc2253Parser)  

| Param | Type |
| --- | --- |
| seq | <code>String</code> | 

<a name="module_electron-builder-http"></a>
## electron-builder-http

* [electron-builder-http](#module_electron-builder-http)
    * [`.DownloadOptions`](#DownloadOptions)
        * [`.onProgress(progress)`](#module_electron-builder-http.DownloadOptions+onProgress)
    * [`.ProgressInfo`](#ProgressInfo)
    * [`.RequestHeaders`](#RequestHeaders)
    * [`.RequestOptionsEx`](#RequestOptionsEx) ⇐ <code>module:http.RequestOptions</code>
    * [`.Response`](#Response) ⇐ <code>internal:EventEmitter</code>
        * [`.setEncoding(encoding)`](#module_electron-builder-http.Response+setEncoding)
    * [.CancellationError](#CancellationError) ⇐ <code>Error</code>
    * [.CancellationToken](#CancellationToken) ⇐ <code>internal:EventEmitter</code>
        * [`.cancel()`](#module_electron-builder-http.CancellationToken+cancel)
        * [`.createPromise(callback)`](#module_electron-builder-http.CancellationToken+createPromise) ⇒ <code>Promise&lt;module:electron-builder-http/out/CancellationToken.R&gt;</code>
        * [`.dispose()`](#module_electron-builder-http.CancellationToken+dispose)
    * [.DigestTransform](#DigestTransform) ⇐ <code>internal:Transform</code>
        * [`._flush(callback)`](#module_electron-builder-http.DigestTransform+_flush)
        * [`._transform(chunk, encoding, callback)`](#module_electron-builder-http.DigestTransform+_transform)
    * [.HttpError](#HttpError) ⇐ <code>Error</code>
    * [.HttpExecutor](#HttpExecutor)
        * [`.request(options, cancellationToken, data)`](#module_electron-builder-http.HttpExecutor+request) ⇒ <code>Promise&lt; \| String&gt;</code>
    * [.ProgressCallbackTransform](#ProgressCallbackTransform) ⇐ <code>internal:Transform</code>
        * [`._flush(callback)`](#module_electron-builder-http.ProgressCallbackTransform+_flush)
        * [`._transform(chunk, encoding, callback)`](#module_electron-builder-http.ProgressCallbackTransform+_transform)
    * [`.configureRequestOptions(options, token, method)`](#module_electron-builder-http.configureRequestOptions) ⇒ <code>module:http.RequestOptions</code>
    * [`.dumpRequestOptions(options)`](#module_electron-builder-http.dumpRequestOptions) ⇒ <code>String</code>
    * [`.parseJson(result)`](#module_electron-builder-http.parseJson) ⇒ <code>Promise&lt;any&gt;</code>
    * [`.safeGetHeader(response, headerKey)`](#module_electron-builder-http.safeGetHeader) ⇒ <code>any</code>

<a name="DownloadOptions"></a>
### `DownloadOptions`
**Kind**: interface of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Properties**

| Name | Type |
| --- | --- |
| headers| <code>[RequestHeaders](#RequestHeaders)</code> \| <code>null</code> | 
| skipDirCreation| <code>Boolean</code> | 
| sha2| <code>String</code> \| <code>null</code> | 
| sha512| <code>String</code> \| <code>null</code> | 
| **cancellationToken**| <code>[CancellationToken](#CancellationToken)</code> | 

<a name="module_electron-builder-http.DownloadOptions+onProgress"></a>
#### `downloadOptions.onProgress(progress)`
**Kind**: instance method of [<code>DownloadOptions</code>](#DownloadOptions)  

| Param | Type |
| --- | --- |
| progress | <code>[ProgressInfo](#ProgressInfo)</code> | 

<a name="ProgressInfo"></a>
### `ProgressInfo`
**Kind**: interface of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Properties**

| Name | Type |
| --- | --- |
| **total**| <code>Number</code> | 
| **delta**| <code>Number</code> | 
| **transferred**| <code>Number</code> | 
| **percent**| <code>Number</code> | 
| **bytesPerSecond**| <code>Number</code> | 

<a name="RequestHeaders"></a>
### `RequestHeaders`
**Kind**: interface of [<code>electron-builder-http</code>](#module_electron-builder-http)  
<a name="RequestOptionsEx"></a>
### `RequestOptionsEx` ⇐ <code>module:http.RequestOptions</code>
**Kind**: interface of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>module:http.RequestOptions</code>  
<a name="Response"></a>
### `Response` ⇐ <code>internal:EventEmitter</code>
**Kind**: interface of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>internal:EventEmitter</code>  
**Properties**

| Name | Type |
| --- | --- |
| statusCode| <code>Number</code> | 
| statusMessage| <code>String</code> | 
| **headers**| <code>any</code> | 

<a name="module_electron-builder-http.Response+setEncoding"></a>
#### `response.setEncoding(encoding)`
**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type |
| --- | --- |
| encoding | <code>String</code> | 

<a name="CancellationError"></a>
### CancellationError ⇐ <code>Error</code>
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>Error</code>  
<a name="CancellationToken"></a>
### CancellationToken ⇐ <code>internal:EventEmitter</code>
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>internal:EventEmitter</code>  
**Properties**

| Name | Type |
| --- | --- |
| **cancelled**| <code>Boolean</code> | 


* [.CancellationToken](#CancellationToken) ⇐ <code>internal:EventEmitter</code>
    * [`.cancel()`](#module_electron-builder-http.CancellationToken+cancel)
    * [`.createPromise(callback)`](#module_electron-builder-http.CancellationToken+createPromise) ⇒ <code>Promise&lt;module:electron-builder-http/out/CancellationToken.R&gt;</code>
    * [`.dispose()`](#module_electron-builder-http.CancellationToken+dispose)

<a name="module_electron-builder-http.CancellationToken+cancel"></a>
#### `cancellationToken.cancel()`
**Kind**: instance method of [<code>CancellationToken</code>](#CancellationToken)  
<a name="module_electron-builder-http.CancellationToken+createPromise"></a>
#### `cancellationToken.createPromise(callback)` ⇒ <code>Promise&lt;module:electron-builder-http/out/CancellationToken.R&gt;</code>
**Kind**: instance method of [<code>CancellationToken</code>](#CancellationToken)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

<a name="module_electron-builder-http.CancellationToken+dispose"></a>
#### `cancellationToken.dispose()`
**Kind**: instance method of [<code>CancellationToken</code>](#CancellationToken)  
<a name="DigestTransform"></a>
### DigestTransform ⇐ <code>internal:Transform</code>
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>internal:Transform</code>  

* [.DigestTransform](#DigestTransform) ⇐ <code>internal:Transform</code>
    * [`._flush(callback)`](#module_electron-builder-http.DigestTransform+_flush)
    * [`._transform(chunk, encoding, callback)`](#module_electron-builder-http.DigestTransform+_transform)

<a name="module_electron-builder-http.DigestTransform+_flush"></a>
#### `digestTransform._flush(callback)`
**Kind**: instance method of [<code>DigestTransform</code>](#DigestTransform)  

| Param | Type |
| --- | --- |
| callback | <code>any</code> | 

<a name="module_electron-builder-http.DigestTransform+_transform"></a>
#### `digestTransform._transform(chunk, encoding, callback)`
**Kind**: instance method of [<code>DigestTransform</code>](#DigestTransform)  

| Param | Type |
| --- | --- |
| chunk | <code>any</code> | 
| encoding | <code>String</code> | 
| callback | <code>any</code> | 

<a name="HttpError"></a>
### HttpError ⇐ <code>Error</code>
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>Error</code>  
<a name="HttpExecutor"></a>
### HttpExecutor
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
<a name="module_electron-builder-http.HttpExecutor+request"></a>
#### `httpExecutor.request(options, cancellationToken, data)` ⇒ <code>Promise&lt; \| String&gt;</code>
**Kind**: instance method of [<code>HttpExecutor</code>](#HttpExecutor)  

| Param | Type |
| --- | --- |
| options | <code>module:http.RequestOptions</code> | 
| cancellationToken | <code>[CancellationToken](#CancellationToken)</code> | 
| data | <code>Object&lt;String, any&gt;</code> \| <code>null</code> | 

<a name="ProgressCallbackTransform"></a>
### ProgressCallbackTransform ⇐ <code>internal:Transform</code>
**Kind**: class of [<code>electron-builder-http</code>](#module_electron-builder-http)  
**Extends**: <code>internal:Transform</code>  

* [.ProgressCallbackTransform](#ProgressCallbackTransform) ⇐ <code>internal:Transform</code>
    * [`._flush(callback)`](#module_electron-builder-http.ProgressCallbackTransform+_flush)
    * [`._transform(chunk, encoding, callback)`](#module_electron-builder-http.ProgressCallbackTransform+_transform)

<a name="module_electron-builder-http.ProgressCallbackTransform+_flush"></a>
#### `progressCallbackTransform._flush(callback)`
**Kind**: instance method of [<code>ProgressCallbackTransform</code>](#ProgressCallbackTransform)  

| Param | Type |
| --- | --- |
| callback | <code>any</code> | 

<a name="module_electron-builder-http.ProgressCallbackTransform+_transform"></a>
#### `progressCallbackTransform._transform(chunk, encoding, callback)`
**Kind**: instance method of [<code>ProgressCallbackTransform</code>](#ProgressCallbackTransform)  

| Param | Type |
| --- | --- |
| chunk | <code>any</code> | 
| encoding | <code>String</code> | 
| callback | <code>any</code> | 

<a name="module_electron-builder-http.configureRequestOptions"></a>
### `electron-builder-http.configureRequestOptions(options, token, method)` ⇒ <code>module:http.RequestOptions</code>
**Kind**: method of [<code>electron-builder-http</code>](#module_electron-builder-http)  

| Param | Type |
| --- | --- |
| options | <code>module:http.RequestOptions</code> | 
| token | <code>String</code> \| <code>null</code> | 
| method | <code>"GET"</code> \| <code>"DELETE"</code> \| <code>"PUT"</code> | 

<a name="module_electron-builder-http.dumpRequestOptions"></a>
### `electron-builder-http.dumpRequestOptions(options)` ⇒ <code>String</code>
**Kind**: method of [<code>electron-builder-http</code>](#module_electron-builder-http)  

| Param | Type |
| --- | --- |
| options | <code>module:http.RequestOptions</code> | 

<a name="module_electron-builder-http.parseJson"></a>
### `electron-builder-http.parseJson(result)` ⇒ <code>Promise&lt;any&gt;</code>
**Kind**: method of [<code>electron-builder-http</code>](#module_electron-builder-http)  

| Param | Type |
| --- | --- |
| result | <code>Promise&lt; \| String&gt;</code> | 

<a name="module_electron-builder-http.safeGetHeader"></a>
### `electron-builder-http.safeGetHeader(response, headerKey)` ⇒ <code>any</code>
**Kind**: method of [<code>electron-builder-http</code>](#module_electron-builder-http)  

| Param | Type |
| --- | --- |
| response | <code>any</code> | 
| headerKey | <code>String</code> | 

