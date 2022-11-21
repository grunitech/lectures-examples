
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
