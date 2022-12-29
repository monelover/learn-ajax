'use strict';

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('모네!');
    }, 2000);
});

promise1.then((resp) => console.log(resp)); //모네! 출력

{
    // promise resolve test
    let promise2 = Promise.resolve('0021');
    promise2.then((resp) => console.log(resp)); // 0021
}
