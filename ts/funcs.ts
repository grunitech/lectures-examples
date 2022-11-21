function stam() {

}

// function that accept function as arguments
function doubleMe(x: number) {
    return x*2;
}

const newMap = [1, 2, 3].map(doubleMe);// [2, 4, 6]


type IgorFunc = () => true;
type SuperIgor = (a: number) => number;

function myFoo(f: SuperIgor) {
    f(1);
}

myFoo((a: number) => 4)
