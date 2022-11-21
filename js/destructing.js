const DATA = {
    name: 'Gruni',
    age: 18,
    country: 'IL',
    x: 'x',
    y: 'y',
    children: [{ age: 12 }, { age: 13 }, { age: 14 }],
    d: {
        a: {
            b: 1
        }
    }
};
const childAge = DATA.children[1].age;
const myName = DATA.name;
const myAge = DATA.age;
console.log(myAge);
const { country, age } = DATA;
console.log(age);
const ARR = [{}, 18, 'str'];
const [d, a, s] = ARR;
ARR[1];
const [, sss] = ARR;
sss;
