// syntactic sugar
class Cls {
    public x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Fls {
    constructor(public x: number, protected y: number) {
    }

    getX() {
        return this.x;
    }
}

class MyFls extends Fls {
    constructor() {
        super(1, 2);
    }
}

const obs = new MyFls();

class Kolshehu {
    private a = 1;

    foo() {
        this.a = 2;
        return true;
    }

    bar() {
        return false;
    }
}

class AnotherKolshehu extends Kolshehu {
    // override just tell TS we are not using super
    override foo(): boolean {
        return false;
    }
}
