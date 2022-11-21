
// example for function with unknown number of arguments
const mySuperList = [];
mySuperList.push(1);
mySuperList.push(2, 3, 4);

// js have the "arguments" object contain all arguments passed to function
// DON'T USE!!!
function foobar() {
    console.log(arguments);
}

// example with at list one element
function multipleArgs(a: number, ...b: number[]) {

}
multipleArgs(1);
multipleArgs(1, 3, 4, 5);

function newFooBar(...a: unknown[]) {
    console.log(a);
}

newFooBar(); // a is empty array
newFooBar(1, ''); // a [1, '']
newFooBar(1, 2, 3, 43, 5, 65 , 7, 7, 4)


function sumAll(...input: number[]) {
    let sum = 0;
    for (const i of input) {
        sum = sum + i;
    }
    return sum;
}

sumAll(); // 0
sumAll(1, 6); // 7
sumAll(1, 10, 1); // 12

function anotherSumAll(input: number[]) {
    let sum = 0;
    for (const i of input) {
        sum = sum + i;
    }
    return sum;
}

anotherSumAll([]); // 0
anotherSumAll([1, 6]); // 7
