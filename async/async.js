//
// function slowCalc(a: number, b: number, cb: (res: number) => void) {
//  // takes a lot of time to calculate:
//  const res = a + b;
//  cb(res);
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        return {};
    });
}
// A & B ARE IDENTICAL!!!
// A
function getFutureValue() {
    return new Promise(resolve => {
        resolve(10);
    });
}
// B
function getAnotherFutureValue() {
    return __awaiter(this, void 0, void 0, function* () {
        return 10;
    });
}
// A & B (then vs await) A & B IDENTICAL!
// A
function getFutureSomething() {
    return new Promise(resolve => {
        fetch('https://blah-blah.com')
            .then(response => response.json())
            .then(data => {
            resolve(data);
        });
    });
}
// B
function getAnotherFutureSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://blah-blah.com');
        const data = yield response.json();
        return data;
    });
}
const abtn = document.querySelector('button');
const ARANDOM_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';
function aonButtonClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(RANDOM_URL);
            const data = yield response.json();
            document.getElementById('output').innerHTML = data.query.random[0].title;
        }
        catch (eeee) {
            console.log('So baasa, nothing happen', eeee);
        }
    });
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
