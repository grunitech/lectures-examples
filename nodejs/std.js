// NodeJS Standard Library

// this is the old version
// import fs from 'fs';

// this is the new one (import all)
// import fs from 'node:fs';

import {readFileSync} from 'node:fs';
import {readFile} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';
// display global this (timers functions)
// console.log(globalThis);
// display the run time environment
// console.log(process);


console.log(resolve('./'));

console.log(readFileSync('./std.js', 'utf-8'));
console.log(readFileSync('./std.js').toString());

readFile('./std.js', 'utf-8').then(text => console.log(text));

