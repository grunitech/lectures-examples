const myFetch = (url /*string*/, cb /*function*/) => {
    setTimeout(() => {
        // i did a request to url
        cb('response results');
    }, 1000)
};

function foo() {

    myFetch('https://api.github.com/users/hadley/orgs', (currency) => {
        // now i know the currency but I also need to know the ratio

        // request for dollar/nis ratio in world bank
        myFetch('https://www.world-bank.com/dollar-nis?type=json', (ratio) => {
            myFetch('https://get-data/', (data) => {
                // i have currency, ration, data
            });
        });
    });

}
