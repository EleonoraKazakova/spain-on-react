Html Webpack Plugin:
<pre>
  Error: Child compilation failed:
  Module parse failed: Unexpected token (7:4)
  File was processed with these loaders:
   * ./node_modules/html-webpack-plugin/lib/loader.js
  You may need an additional loader to handle the result of these loaders.
  | function App() {
  |   return (
  >     <div className='content'>
  |       <div className='header'><h1>Spain</h1></div>
  |       <div className='title'><p>Cities in Spain</p></div>:
  SyntaxError: Unexpected token (7:4)
  ModuleParseError: Module parse failed: Unexpected token (7:4)
  File was processed with these loaders:
   * ./node_modules/html-webpack-plugin/lib/loader.js
  You may need an additional loader to handle the result of these loaders.
  | function App() {
  |   return (
  >     <div className='content'>
  |       <div className='header'><h1>Spain</h1></div>
  |       <div className='title'><p>Cities in Spain</p></div>
  
  - NormalModule.js:788 handleParseError
    [cityReact]/[webpack]/lib/NormalModule.js:788:19
  
  - NormalModule.js:851 
    [cityReact]/[webpack]/lib/NormalModule.js:851:5
  
  - NormalModule.js:625 processResult
    [cityReact]/[webpack]/lib/NormalModule.js:625:11
  
  - NormalModule.js:676 
    [cityReact]/[webpack]/lib/NormalModule.js:676:5
  
  - LoaderRunner.js:404 
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:404:3
  
  - LoaderRunner.js:233 iterateNormalLoaders
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:233:10
  
  - LoaderRunner.js:240 iterateNormalLoaders
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:240:10
  
  - LoaderRunner.js:255 
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:255:3
  
  - LoaderRunner.js:143 runSyncOrAsync
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:143:11
  
  - LoaderRunner.js:251 iterateNormalLoaders
    [cityReact]/[loader-runner]/lib/LoaderRunner.js:251:2
  
  - child-compiler.js:131 
    [cityReact]/[html-webpack-plugin]/lib/child-compiler.js:131:18
  
  - Compiler.js:511 
    [cityReact]/[webpack]/lib/Compiler.js:511:11
  
  - Compiler.js:1059 
    [cityReact]/[webpack]/lib/Compiler.js:1059:17
  
  
  - Hook.js:18 Hook.CALL_ASYNC_DELEGATE [as _callAsync]
    [cityReact]/[tapable]/lib/Hook.js:18:14
  
  - Compiler.js:1055 
    [cityReact]/[webpack]/lib/Compiler.js:1055:33
  
  - Compilation.js:2180 
    [cityReact]/[webpack]/lib/Compilation.js:2180:10
  
  
  - Hook.js:18 Hook.CALL_ASYNC_DELEGATE [as _callAsync]
    [cityReact]/[tapable]/lib/Hook.js:18:14
  
  - Compilation.js:2173 
    [cityReact]/[webpack]/lib/Compilation.js:2173:37
  
</pre><script src="main.js"></script>