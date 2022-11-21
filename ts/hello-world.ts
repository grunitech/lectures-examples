console.log('hello world');

// implicit type
const numeric = 1;

// explicit
const str: string = '';
const bool: boolean = false;

// can we change type in runtime?
let foo2: string;
let foo1 = 1; // ts assume foo1 is number

// errors: we are trying to assign the wrong type
// foo1 = 'test';
// foo2 = 1;

// internal types
// primitives
const foo3: boolean = false;
const foo4: number = 1.5;
const foo5: string = 'any unicode string';
const foo6: undefined = undefined;
const foo7: null = null;


// Ran asked, why do I need to use "undefined"?
// this example use null and not undefined

const el: Element | null = document.querySelector('not-found');
if (el) {
    console.log(el.innerHTML);
}


// functions return value

function getRandomNumber(): number {
    return 1;
}

const getLongString = (): string => 'long string';

const randomNumber = getRandomNumber();
const randomNumberAsString: string = String(getRandomNumber());

// function arguments

function getMaxNumber(a: number, b: number): number {
    return a + b;
}

const superFunction = (a: number, b: string, c: boolean): boolean => true;

superFunction(0, '', true);
