const mySuperList = [];
mySuperList.push(1);
mySuperList.push(2, 3, 4);
function foobar() {
    console.log(arguments);
}
function multipleArgs(a, ...b) {
}
multipleArgs(1);
multipleArgs(1, 3, 4, 5);
function newFooBar(...a) {
    console.log(a);
}
newFooBar();
newFooBar(1, '');
newFooBar(1, 2, 3, 43, 5, 65, 7, 7, 4);
function sumAll(...input) {
    let sum = 0;
    for (const i of input) {
        sum = sum + i;
    }
    return sum;
}
sumAll();
sumAll(1, 6);
sumAll(1, 10, 1);
function anotherSumAll(input) {
    let sum = 0;
    for (const i of input) {
        sum = sum + i;
    }
    return sum;
}
anotherSumAll([]);
anotherSumAll([1, 6]);
