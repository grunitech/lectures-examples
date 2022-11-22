interface Runnable {
    run(): void;
}

interface Walkable {
    walk(): void;
}

abstract class Drivable {
    drive() {
        console.log("I'm driving, dont you see?");
    }

    abstract isDriving(): boolean;
}

class Osnat extends Drivable implements Runnable, Walkable {
    isDriving(): boolean {
        return false;
    }

    run() {

    }

    walk() {
    }
}

class Mushon extends Drivable {

}

interface Kolshehu1 {
    stam(): boolean;

    el: number;
}

class David implements Kolshehu1 {
    el: number;

    stam(): boolean {
        return true;
    }
}
