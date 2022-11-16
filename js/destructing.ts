// Object Destructing
const DATA = {
    name: 'Gruni',
    age: 18,
    country: 'IL',
    x: 'x',
    y: 'y',
    children: [{age: 12}, {age: 13}, {age: 14}],
    d: {
        a: {
            b: 1
        }
    }
}
//                   .(object access)
//                            [](array access)
//                               .(object access)
const childAge = DATA.children[1].age;


const myName = DATA.name;
const myAge = DATA.age;
console.log(myAge) // 18

// destruction
const {country, age} = DATA;

console.log(age) // 18
