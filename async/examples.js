/**
 * Calculate sum of 2 numbers, wait for it and return the
 * value using callback
 *
 * @param a Number
 * @param b Number
 * @param cb Function (callback)
 */
function futureSum(a, b, cb) {
    // take the time to calculate whatever you need
    // when you're done, call the "cb" with the results
    setTimeout(() => {
        cb(a + b);
    }, 3000);
}

function example() {
    // reference to the button element
    const btn = document.querySelector('button');

    // attach click handler
    btn.addEventListener('click', () => {
        futureSum(1, 2, (sum) => {
            alert(sum);
        });
    });
}

document.addEventListener('DOMContentLoaded', example)
