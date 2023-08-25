//9009
/*
[문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있다.
• 이유: 𝑋 − 𝐴는 𝐴보다 작은 서로 다른 피보나치 수들의 합으로 표현 가능하다.
• 이때 𝐴는 가능한 가장 큰 피보나치 수를 의미한다.

[문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있다.
• 명제: 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다.

1. 예시: 70=55+13+2
2. 예시: 100 = 89+8+3

//이미지존재

*/
let io = [100, 200, 12345, 1003];
const sol = (io) => {
  // 피보나치 수들 계산
  let pibo = [];
  pibo.push(0);
  pibo.push(1);
  while (pibo[pibo.length - 1] < 1e9) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
  }

  let tc = io.length;

  for (let t = 0; t < tc; t++) {
    let n = Number(io[t]);
    let result = [];
    let i = pibo.length - 1;
    while (n > 0) {
      // n이 0이 될 때까지
      if (n >= pibo[i]) {
        // 가능한 큰 피보나치 수부터 빼기
        n -= pibo[i];
        result.push(pibo[i]);
      }
      i--;
    }
    let answer = '';
    for (let i = result.length - 1; i >= 0; i--) answer += result[i] + ' '; // 오름차순 출력
    console.log(answer);
  }
};
sol(io);
