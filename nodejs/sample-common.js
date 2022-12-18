// CommonJS export

const stam = 'Stam';
console.log('Sample-Common module loaded', stam);

module.exports = {};


module.exports.foo = function () {
    return 'foo';
}

function bar() {
    return 'bar';
}
module.exports = {...module.exports, bar};
