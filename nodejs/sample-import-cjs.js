// the main diff between CommonJS (require) and ESM (import)

function foo() {
    // require is sync function
    const f = require('./sample-function-cjs');
    return f();
}

async function bar() {
    // import is async function
    const f = import('./sample-function-cjs.js');
    return f.then(f => f());
}

// this line cannot be run in CommonJS
// CommonJS run async only in functions
const a = await bar();
