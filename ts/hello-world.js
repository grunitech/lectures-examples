console.log('hello world');
const numeric = 1;
const str = '';
const bool = false;
let foo2;
let foo1 = 1;
const foo3 = false;
const foo4 = 1.5;
const foo5 = 'any unicode string';
const foo6 = undefined;
const foo7 = null;
const el = document.querySelector('not-found');
if (el) {
    console.log(el.innerHTML);
}
function getRandomNumber() {
    return 1;
}
const getLongString = () => 'long string';
const randomNumber = getRandomNumber();
const randomNumberAsString = String(getRandomNumber());
function getMaxNumber(a, b) {
    return a + b;
}
const superFunction = (a, b, c) => true;
superFunction(0, '', true);
