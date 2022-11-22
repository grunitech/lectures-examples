interface ShouldGoToGarage {
    shouldI(): boolean;
}

interface AnyCar {
    startDrive: () => void;
    isDriving: () => boolean;
}

// typescript
class Car implements AnyCar, ShouldGoToGarage {
    private model: string;
    private color: string;
    private year: Date;
    private driving: boolean;
    private fuel: number; /* 0 - 100 */

    constructor(model: string, color: string, driving: boolean) {
        this.model = model;
        this.color = color;
        this.driving = driving;
    }

    startDrive() {
        this.driving = true;
    }

    isDriving() {
        return this.driving && this.fuel > 0;
    }

    shouldI() {
        return this.year.getFullYear() < 2020;
    }
}

const n = new Car('Audi', 'red', false);

const t = new Car('Tesla', 'black', false);

t.startDrive();
if (t.isDriving()) {

}




type MySimpleType = { a: number; b: number };
const obj: MySimpleType = {a: 1, b: 2}; // POJO

function foo(a: MySimpleType) {
    return a.a;
}


// JS classes

class JSClass {
    // public property
    p;

    // private property
    #e;

    // method
    foo() {
        return this.#e;
    }
}



function fff(a: any) {
    return a.getFullYear();
}
