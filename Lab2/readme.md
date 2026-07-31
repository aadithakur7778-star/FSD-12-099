#EventLoop

JS is a synchronous and single threaded by default

## there can be a sync behaviour
- with BrowserAPI -
setTimeout, setInterval,setImmediate, nextTick<br>
-with Promise<br>
-with Event handlers
### important topic
-promises
-synchr and asynchr
## call backfunction
that pass as argument or the parameter to another function

Modern javascript is divided into two categories 
(i) CommonJS (.cjs) -> support OOPs->require
-priority (nextTick, Promise, setImmediate/setTimeout)
(ii)ModuleJS (.mjs)-> follow modular approach only support functional code ->import
-priority (Promise,nextTick, setImmediate/setTimeout)