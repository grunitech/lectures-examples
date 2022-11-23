//
// function slowCalc(a: number, b: number, cb: (res: number) => void) {
//  // takes a lot of time to calculate:
//  const res = a + b;
//  cb(res);
// }


// this is example to promiose that half of the time reject and the other resolve
// const promise = new Promise(function (resolve, reject) {
//     if (Math.random() > .5) {
//         resolve(1);
//     } else {
//         reject(new Error('something went wrong'));
//     }
//     // (Math.random() > .5) ? resolve(1) : reject(new Error('something went wrong'));
// });
//
//
// console.log('start');
//
// function allGood(value) {
//     console.log('resolved value');
//     console.log(value);
// }
//
// function ohhSnap(error) {
//     console.log('caught error');
//     console.log(error);
// }
//
// promise.then(allGood).catch(ohhSnap);
//
//
// console.log('end');

function getResponse() {
    return fetch('https://blah-blah.com');
}

async function getSomething() {
    return {};
}

// A & B ARE IDENTICAL!!!

// A
function getFutureValue(): Promise<number> {
    return new Promise(resolve => {
        resolve(10);
    });
}

// B
async function getAnotherFutureValue(): Promise<number> {
    return 10;
}


// A & B (then vs await) A & B IDENTICAL!

// A
function getFutureSomething(): Promise<number> {
    return new Promise(resolve => {
        fetch('https://blah-blah.com')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
    });
}

// B
async function getAnotherFutureSomething(): Promise<number> {
    const response = await fetch('https://blah-blah.com');
    const data = await response.json();
    return data;
}


const abtn = document.querySelector('button');
const ARANDOM_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';


async function aonButtonClick(event: MouseEvent) {
    try {
        const response = await fetch(RANDOM_URL);
        const data = await response.json();
        document.getElementById('output').innerHTML = data.query.random[0].title;
    } catch (eeee) {
        console.log('So baasa, nothing happen', eeee);
    }
}

btn.addEventListener('click', aonButtonClick);


//
//
// //
// document.querySelector('button').addEventListener('click', () => {
//     // console.log('0 Before request');
//
//     fetch('/async/data.json').then(response => {
//             response.json().then(data => {
//                 console.log(data);
//             })
//         })
//
//         // .then(res => res.json())
//         // .then(res => console.log('>>>', res.json()));
//
//     //
//     // const res = fetch('/async/data.json');
//     // console.log('1 After request');
//     // res.then(function (data) {
//     //     return data.json();
//     // }).then(function (data) {
//     //     console.log(data);
//     // })
//     // console.log('2 After handling');
// });
