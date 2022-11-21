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
