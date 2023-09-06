//1493
/*
큐브의 길이(length), 너비(width), 높이(height)는 항상 2의 제곱 형태를 보인다.
[문제 해결 아이디어] 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
• 결과적으로, 큰 큐브부터 차근차근 채워 나가면 해결할 수 있다.
• 그리디 알고리즘 유형의 대표적인 예시인 [거스름 돈] 문제와 유사하다.

[문제 해결 아이디어] 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
• 해결 방법: 최대한 큰 큐브부터 박스에 넣고, 다음 크기의 큐브도 박스에 넣을 수 있는지 단계적으로 확인한다.
*/

// 4 4 8 --> 128
// 2^0=1 10개
// 2^1=2 10개
// 2^2=4 1개
let l = 4;
let w = 4;
let h = 8;

let io = [
  [0, 10],
  [1, 10],
  [2, 1],
];
let io1 = [
  [0, 10],
  [1, 10],
  [2, 10],
];
const sol = (l, w, h, io) => {
  // x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
  function nearestSquare(x) {
    let i = 1;
    while (2 ** i <= x) i += 1;
    return i - 1;
  }
  let length = Number(l);
  let width = Number(w);
  let height = Number(h);

  let cubes = Array(20).fill(0);

  let n = Number(io.length);

  //한 변의 길이가 2^i 인 큐브 개수
  for (let i = 0; i < n; i++) {
    let a = Number(io[i][0]);
    let b = Number(io[i][1]);
    cubes[a] = b;
  }
  //2^19가 범위의 마지막이므로
  let size = 19;
  size = nearestSquare(length);
  size = Math.min(size, nearestSquare(width));
  size = Math.min(size, nearestSquare(height));

  let res = 0;
  let used = 0;
  let cur = 0;
  for (let i = size; i >= 0; i--) {
    used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
    cur = 2 ** i; // 현재의 정육면체 큐브의 길이
    // 채워넣어야 할 큐브의 개수 계산
    let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;
    let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
    res += usage;
    used += usage;
  }
  if (used == length * width * height) console.log(res); // 박스를 가득 채운 경우
  else console.log(-1); // 박스를 가득 채우지 못한 경우
};

sol(l, w, h, io);
sol(l, w, h, io1);
