// 담긴 값이 바뀔 수 있는 주머니
        // let 사용 > 재사용이 가능
        const SALUATION = 'Hello, ';
        let person = '철수';
        console.log(SALUATION, person);


        // undefined '아직 값이 정해지지 않았다' 라는 값
        // let x;
        // console.log(x);

        // 변수 선언과 값 넣기를 동시에
        // let x = 1;
        // console.log(x)

        // **같은 값이 다른 데이터 영역에 저장되지 않음
        // let y = x;
        // console.log(x, y);

        // let x = 1;
        // let y = x;
        // console.log('변경 전', x, y);
        // x = 'Hello';
        // console.log('변경 후', x, y);

        // 이미 만들어진 주머니는 다시 만들(재선언)수 없다.
        // let x = 1;
        // console.log('첫 선언', x);
        // let x = 2;
        // console.log('다시 선언', x);

        // 상수(constant)
        // 담긴 값이 바뀔 수 없는 주머니
        // const > 흔히 대문자로 명명

        // 상수를 선언과 동시에 초기화
        // const PI = 3.14; (O)
        // console.log('원주율:', PI);

        //선언하기만 하는 것 불가
        // const PI; (X)
        // PI = 3.14;

        // 상수는 값의 변경 불가
        const PI = 3.14;
        PI = 3.14159    

        // let a = 1;
        // let b = 2;
        // ...
        // 여러 변수 동시에 초기화
        let a = 1, b = 2, c = 3;
        const X = 4, Y = 5, Z = 6;

        console.log(a, b, c);
        console.log(X, Y, Z);









        