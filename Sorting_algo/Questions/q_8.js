//1427

let io1 = '999998999';
let io2 = '61423';
let io3 = '500613009';

const sol = (io) => {
  // 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(array) 선언
  let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화
  for (let x of io) {
    // 한 자리씩 숫자(digit)를 확인하며
    cnt[Number(x)]++;
  }
  let answer = '';
  // 9부터 0까지 하나씩 숫자(digit)를 확인하며
  for (let i = 9; i >= 0; i--) {
    // 출현 빈도만큼 출력하기
    for (let j = 0; j < cnt[i]; j++) answer += i + '';
  }
  console.log(answer);
};

sol(io1);
sol(io2);
sol(io3);
