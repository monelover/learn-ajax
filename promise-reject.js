'use strict';

// Promise.reject(reason) 메서드는 주어진 이유 (reason) 로 거부된 Promise 객체를 반환한다.
{
    Promise.reject('Test Reject').then(
        (reason) => {
            // 이곳에서는 호출이 안된다.
        },
        (reason) => console.log(reason)
    );
}
// 디버깅 및 오류를 잡기위해 reason을 Error 생성자의 인스턴스로 만들면 유용하다.
{
    Promise.reject(new Error('no!! fail')).then(
        (error) => {},
        (error) => console.log(error)
    );
}

{
    const promise = new Promise((resolve, reject) => {
        reject('실패했습니다..ㅜㅜ');
    });

    promise.then(
        (resp) => {},
        (resp) => console.log(resp)
    );
}
