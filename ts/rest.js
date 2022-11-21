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
