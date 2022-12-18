// ESM modules
// 1. use import with ".js"
// 2. change the type in package.json to module
import {foo} from './sample.js';

console.log("Hello" + foo());

// This will not work since "foo" is not part of the default export
// import sample from './sample';
// sample.foo();
