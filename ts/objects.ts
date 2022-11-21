// maps and dictionaries in ts
const sampleObject: { foo: number, bar: string } = {
    foo: 1,
    bar: 'string'
};

// in the following example MapLocation & AnotherMapLocation
// are IDENTICAL!!! only on objects/dict
type MapLocation = { x: number, y: number, label: string };

interface AnotherMapLocation {
    x: number;
    y: number;
    label: string;
}

const loc0: MapLocation = {x: 1, y: 2, label: 'IL'};
const loc1: AnotherMapLocation = {x: 1, y: 2, label: 'IL'};

// types (can be primitive)
type A = string;
type B = boolean;
type C = A | B;

// interface can only extend other interfaces (or types)
interface AA {
    a: string;
}

interface BB {
    b: string;
}

type CC = AA & BB; // { a: string, b: string; }
type QQ = AA | BB;

// interface can extends interface or type
interface DD extends AA {
    d: string;
}

const exa: A = '';
const exaa: AA = {a: ''};
const excc: CC = {a: '', b: ''};


// key/value store
// type MapLocation = { x: number, y: number, label: string };
type KeyVal = { [key: string]: string | number };
const myKeyValue: KeyVal = {
    a: 1,
    b: '',
    foo: 1,
    ggg: 'aaa'
};

// TS utilities
// Record
type SimpleKeyVal = Record<string, string | number>;

const a1: SimpleKeyVal = {};
const a2: SimpleKeyVal = {a: 1};
// const a3: SimpleKeyVal = {a: new Date()};

// lets create an object with some mandatory and some optional

type Moshe = MapLocation & { [key: string]: string };
type Moshe20 = MapLocation & Record<string, string>;
// type LooseMoshe = { x: number, y: number, label: string, [key: string]: string | number }

// type OldMoshe = { x: number, y: number, label: string, [key: string]: string };
// interface Hedva extends MapLocation {
//     [key: string]: string;
// }



