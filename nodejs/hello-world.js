// CommonJS
const {foo} = require('./sample-common');
const sample = require('./sample-common');


console.log('Hello ' + foo());
console.log('Hello ' + sample.foo());
