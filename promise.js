'use strict';

const promise = new Promise((resolve, reject) => {
    resolve('mone!');
});

{
    promise
        .then((resp) => {
            console.log(resp);
            return resp;
        })
        .then((resp) => console.log(resp));
}

const promise2 = new Promise((resolve, reject) => {
    reject(new Error('err'));
});

{
    promise2
        .then((resp) => {
            console.log(resp);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('finish'));
}
//promise에 then을 호출하게 되면, then은 결국 똑같은 promise를 return 하기때문에
//  그 return된 promise에 catch를 다시 호출할 수 있는것이다.
// finish는 성공관계여부와 관계없이 실행된다.
