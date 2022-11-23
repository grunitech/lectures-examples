const PAGE_URL = 'https://en.wikipedia.org/w/api.php?action=parse&formatversion=2&prop=text&format=json&origin=*&page=';
const RAND_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';

async function f1() {

}

const f2 = async () => {
};

// this function will update header & article
function update(header: string, article: string) {
    document.querySelector('h1').innerHTML = header;
    document.querySelector('article').innerHTML = article;
}

const getJson = (url: string) => fetch(url).then(response => response.json());

async function getRandomArticle() {
    const titleData = await getJson(RAND_URL);
    const title = titleData.query.random[0].title;


    const bodyData = await getJson(PAGE_URL + title);
    const article = bodyData.parse.text;

    update(title, article);
}

let timer;

document.querySelector('button').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(getRandomArticle, 5000);
    } else {
        clearInterval(timer);
        timer = undefined;
        update('', '');
    }
});
