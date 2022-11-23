// tsc --target es2015 --watch async/async.ts
const PAGE_URL = 'https://en.wikipedia.org/w/api.php?action=parse&formatversion=2&prop=text&format=json&origin=*&page=';
const RAND_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*';

async function f1() {

}

const f2 = async () => {
};


// this function will update header & article
function update(header: string, article: string) {
    (document.querySelector('h1') as Element).innerHTML = header;
    document.querySelector('article').innerHTML = article;
}

const getJson = (url: string) => fetch(url).then(response => response.json());

function GetJsonExplained(url: string) {
    // make HTTP GET request to the URL and return promise of Response
    return fetch(url).then(function (response: Response) {
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


// Liel - great q about multi-return value
function acceptString(s: string) {
    console.log(s);
}

// A
function giveMeNumber(): number {
    return 1;
}

acceptString(giveMeNumber() as unknown as string);
acceptString(giveMeNumber() as any);


// B
function giveMeNumberOrString(): number | string {
    return 1;
}

acceptString(giveMeNumberOrString() as string);

// cast number to string
acceptString(String(giveMeNumber()));
acceptString(giveMeNumber().toString()); // <-- preferred


// Matan - return undefined on not exists operator (.?)

const matan: any = {
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

const ex01 = matan.foo;         // V
const ex02 = matan.foo.bar;     // V
// const ex03 = matan.foo.goo;
const ex04 = matan.foo?.goo;     // V
const ex05 = matan.foo?.goo.rat; // V
const ex06 = matan.foo.bar.gaz?.boo; // V
const ex07 = matan?.goo.bar.gaz?.boo; // V


if (matan?.foo?.bar?.gaz) {
    // Aurika!!!
}
const gaz = matan?.foo?.bar?.gaz || [];
// const gaz = matan?.foo?.bar?.gaz ?? [];
// const gaz = matan?.foo?.bar?.gaz ? matan.foo.bar.gaz : [];

// Matan - KUDOS!
