const a = 1;
const b = 2;
let c = 3;

{

    // new scope, new variable
    const a = 3;
    console.log(a, b); //3, 2
    // c is "let" we can change it in real time
    c = 4;
}
console.log(a, b, c); //124

function foo() {
    const a = 2;
}

