var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
