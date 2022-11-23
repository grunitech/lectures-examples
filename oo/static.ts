// example
class MyClassName {
    static bar: number;

    static myName() {
        return 'MyClassName';
    }

    constructor(private a: number) {
    }

    foo() {
        console.log(this.a);
    }
}

const o = new MyClassName(1);
o.foo();
MyClassName.myName();
MyClassName.bar = 1;

// lets take a look at...Math

class Mathx {
    static abs(n: number) {

    }

    static round(n: number) {

    }
}

Mathx.abs(1);
Math.abs(1);


// Liel ask for example with static field:

// this object will increase its counter on every creation of an object
class AutoIncrement {
    static counter = 0;

    constructor() {
        AutoIncrement.counter++;
    }
}

const ai0 = new AutoIncrement();
const ai1 = new AutoIncrement();
console.log("The AutoIncrement created ", AutoIncrement.counter);
