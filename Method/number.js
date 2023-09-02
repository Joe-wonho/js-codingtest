// 안전하게 표기되는 최대(양수) 최소(음수): Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
// 형변환 : Number.toString(), String(Number)

// Number.isInteger(value) = true or false 정수인지 확인

//Number.isNaN() 메서드는 주어진 값이 NaN인지 판별

//Number.parseInt() :문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 "정수"를 반환합니다.
// n진수를 10진수로 변환하기 위해 사용
// 1)  Number.parseInt(string)
// 2)  Number.parseInt(string, radix)
let intNumb = "11";
let parsing = parseInt(intNumb, 2);
console.log(parsing); //3
console.log(typeof parsing); //number

//toString() 메서드는 특정한 Number 객체를 나타내는 "문자열"을 반환 = 10진수를 n진수로 변환하기 위해 사용
let intNum = 3;
console.log(intNum.toString(2)); //11 (2진수)
intNum = 32;
console.log(intNum.toString(16)); //20 (16진수)
console.log(typeof intNum.toString(16)); //string 타입

// string타입의 16진수를 2진수로 변환하려면? 16진수를 10진수로 바꾸고 그다음 2진수로 바꿔야한다
let s = "f4"; //16진수
let intNumbe = parseInt(s, 16).toString(2);
console.log(intNumbe);

//toFixed() 메서드는 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
let f = 123.456;
console.log(f.toFixed(2)); //123.45

// 배열을 인수로 받아 최대 최소 산출 시에는 apply나 spread 문법 사용해야함
// apply
let nums = [1, -1, 5, 23, 17];
console.log(`use apply Max: ${Math.max.apply(null, nums)}`);
// spread
console.log(`use Spread Max: ${Math.max(...nums)}`);

// Random
for (let i = 0; i < 3; i++) console.log(Math.random());
for (let i = 0; i < 3; i++) console.log(Number.parseInt(Math.random() * 10)); // 정수로 변환
console.log("==============");
//제곱 Math.pow(x,y). 제곱근: Math.sqrt(x)
// 소수점 이하 반올림 정수 : Math.round(x)
// 소수점 이하 올림 : Math.ceil(x)
// 소수점 이하 내림 : Math.floor(x)
