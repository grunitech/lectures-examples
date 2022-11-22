var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JSClass_e;
// typescript
class Car {
    constructor(model, color, driving) {
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
const obj = { a: 1, b: 2 }; // POJO
function foo(a) {
    return a.a;
}
// JS classes
class JSClass {
    constructor() {
        // private property
        _JSClass_e.set(this, void 0);
    }
    // method
    foo() {
        return __classPrivateFieldGet(this, _JSClass_e, "f");
    }
}
_JSClass_e = new WeakMap();
