//17609 회문
let f1 = 'abba';
let f2 = 'summuus';
let f3 = 'xabba';
let f4 = 'xabbay';
let f5 = 'comcom';
let f6 = 'comwwmoc';
let f7 = 'comwwtmoc';

function palindrome(x) {
  return x == x.split('').reverse().join('');
}

const sol = (f) => {
  if (palindrome(f)) console.log(0); // 회문인 경우
  else {
    // 회문이 아닌 경우, 유사 회문인지 검사
    let found = false;
    let n = f.length; // 문자열의 길이

    for (let i = 0; i < parseInt(n / 2); i++) {
      if (f[i] != f[n - i - 1]) {
        // 대칭이 아닌 인덱스를 찾은 경우
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(f.slice(0, i) + f.slice(i + 1, n))) found = true;
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(f.slice(0, n - i - 1) + f.slice(n - i, n))) found = true;
        break;
      }
    }
    if (found) console.log(1); // 유사 회문인 경우
    else console.log(2); // 회문도 유사 회문도 아닌 경우
  }
};
//0112201
sol(f1);
sol(f2);
sol(f3);
sol(f4);
sol(f5);
sol(f6);
sol(f7);
