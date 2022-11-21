// collections

const fruits: string[] = ['apple', 'orange', 'cherry'];
// const another: Array<number> = [1, 2, 3];
fruits.push('false');

// Johnny asked about any or unknown?

// If we can!!! and we can! we will never use any!!!!
const listOfAnyValue: any[] = [];
const listOfAny = listOfAnyValue[1];
listOfAny.getDate(); // no error, because we don't check the type

const anUnknownItemsList: unknown[] = [];
const anUnknownItem = anUnknownItemsList[1];
anUnknownItem.getDate(); // cause error, the type is not known


// more complex list
const stringOrNumbers: (string | number)[] = [1, 'a', 2, 'b'];

// tuple - fixed size array with types

const myPoint: [number, number] = [1.1, 5.3];
const spaceTime: [number, number, number, number, string] = [2.2, 5, 7, 12, 'pm'];

// TYPES!
// Matan asked, do I need to write this long type over and over?!

// function calculteSomthing(st: [number, number, number, number, string]) {
//
// }
type SpaceTime = [number, number, number, number, string];
type ListOfNumbers = number[];

function calcSpaceTime(sp: SpaceTime) {
    console.log(sp);
}

const mySpaceTime: SpaceTime = [1, 2, 3, 4, ''];
calcSpaceTime([1, 2, 3, 4, '']);

// type can be alias for any primitive

type Token = string;

function verify(token: Token): boolean {
    return false;
}

// cast between types (types are not real cast)
const myToken: string = 'any string';
