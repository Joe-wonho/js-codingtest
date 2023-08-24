//1541
//[문제 해결 아이디어] 뺄셈(-) 연산자를 기준으로 최대한 많은 수를 묶는다
// 90+30-20+50-30+60-70+30+20
//  → (90+30)-(20+50)-(30+60)-(70+30+20) = -160
let io = '55-50+40';

const sol = (io) => {
  let arr = io.split('-');
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b);
    if (i === 0) answer += cur;
    else answer -= cur;
  }
  console.log(answer);
};

sol(io);
