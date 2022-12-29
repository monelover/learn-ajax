'use strict';
// none에러 : 씨앗->꽃->사과
// 에러: 씨앗->꽃->바나나

const getSeed = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('🌱'));
        console.log('seed');
    });
};

const getFlower = (seed) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! :  ${seed} => 🍌 oh, my god!`), 1000));
    });
};

const getApple = (flower) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${flower} => 🍎`), 1000);
    });
};
getSeed()
    .then(getFlower) //getFlower에서 사과가 아닌 바나나가 나서 에러가 발생한다.
    .then(getApple) //실행안된다. 위에서 오류났기때문에
    .then(console.log) //then은 이 오류를 잡지는 못하고 계속 아래로 보낸다.
    .catch(console.log); // 그리고 catch에서 잡아서 getFlower의 오류를 여기서 출력한다.
