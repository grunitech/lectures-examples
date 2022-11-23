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


const btn = document.querySelector('button');
const RANDOM_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';

function onButtonClick(event: MouseEvent) {
    fetch(RANDOM_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data.query.random[0].title;
        })
        .catch(function (eeee) {
            console.log('So baasa, nothing happen', eeee);
        })
}

btn.addEventListener('click', onButtonClick);


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
