



document.querySelector('button').addEventListener('click', () => {
    // console.log('0 Before request');

    fetch('/async/data.json').then(response => {
            response.json().then(data => {
                console.log(data);
            })
        })

        // .then(res => res.json())
        // .then(res => console.log('>>>', res.json()));

    //
    // const res = fetch('/async/data.json');
    // console.log('1 After request');
    // res.then(function (data) {
    //     return data.json();
    // }).then(function (data) {
    //     console.log(data);
    // })
    // console.log('2 After handling');
});
