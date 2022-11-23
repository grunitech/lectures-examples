var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h;
// tsc --target es2015 --watch async/async.ts
const PAGE_URL = 'https://en.wikipedia.org/w/api.php?action=parse&formatversion=2&prop=text&format=json&origin=*&page=';
const RAND_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';
function f1() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
const f2 = () => __awaiter(this, void 0, void 0, function* () {
});
// this function will update header & article
function update(header, article) {
    document.querySelector('h1').innerHTML = header;
    document.querySelector('article').innerHTML = article;
}
const getJson = (url) => fetch(url).then(response => response.json());
function GetJsonExplained(url) {
    // make HTTP GET request to the URL and return promise of Response
    return fetch(url).then(function (response) {
        // call the ".json()" method of "response"
        return response.json(); // return a Promise of "any"
    });
    // the ".json()" method is a shortcut to ".text()" method & "JSON.parse()"
    // fetch(url).then(function (response: Response) {
    //     return response.text().then(function (text: string) {
    //         return JSON.parse(text);
    //     });
    // })
}
function getRandomArticle() {
    return __awaiter(this, void 0, void 0, function* () {
        const titleData = yield getJson(RAND_URL);
        const title = titleData.query.random[0].title;
        const bodyData = yield getJson(PAGE_URL + title);
        const article = bodyData.parse.text;
        update(title, article);
    });
}
let timer;
document.querySelector('button').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(getRandomArticle, 5000);
    }
    else {
        clearInterval(timer);
        timer = undefined;
        update('', '');
    }
});
// Liel - great q about multi-return value
function acceptString(s) {
    console.log(s);
}
// A
function giveMeNumber() {
    return 1;
}
acceptString(giveMeNumber());
acceptString(giveMeNumber());
// B
function giveMeNumberOrString() {
    return 1;
}
acceptString(giveMeNumberOrString());
// cast number to string
acceptString(String(giveMeNumber()));
acceptString(giveMeNumber().toString()); // <-- preferred
// Matan - return undefined on not exists operator (.?)
const matan = {
    foo: {
        bar: {
            gaz: [
                {
                    a: 1,
                    b: 2,
                },
                {
                    a: 3,
                    b: 4
                }
            ]
        }
    }
};
// I want to check that gaz exists
if (matan.foo) {
    if (matan.foo.bar && matan.foo.bar.gaz) {
        // Aurika!!!
    }
    // error!!!!
    // matan.foo.bar.gas;
}
const ex01 = matan.foo; // V
const ex02 = matan.foo.bar; // V
// const ex03 = matan.foo.goo;
const ex04 = (_a = matan.foo) === null || _a === void 0 ? void 0 : _a.goo; // V
const ex05 = (_b = matan.foo) === null || _b === void 0 ? void 0 : _b.goo.rat; // V
const ex06 = (_c = matan.foo.bar.gaz) === null || _c === void 0 ? void 0 : _c.boo; // V
const ex07 = (_d = matan === null || matan === void 0 ? void 0 : matan.goo.bar.gaz) === null || _d === void 0 ? void 0 : _d.boo; // V
if ((_f = (_e = matan === null || matan === void 0 ? void 0 : matan.foo) === null || _e === void 0 ? void 0 : _e.bar) === null || _f === void 0 ? void 0 : _f.gaz) {
    // Aurika!!!
}
const gaz = ((_h = (_g = matan === null || matan === void 0 ? void 0 : matan.foo) === null || _g === void 0 ? void 0 : _g.bar) === null || _h === void 0 ? void 0 : _h.gaz) || [];
// const gaz = matan?.foo?.bar?.gaz ?? [];
// const gaz = matan?.foo?.bar?.gaz ? matan.foo.bar.gaz : [];
// Matan - KUDOS!
