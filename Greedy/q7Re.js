//1946
/*
두 개의 시험에 대한 등수를 간단히 𝑋와 𝑌라고 해보자.
• 특정 지원자보다 두 시험 성적이 모두 높은 지원자가 있는 지만 확인하면 된다.
[문제 해결 방법] 오름차순 정렬 이후에, 다음의 방식으로 해를 구할 수 있다.
(1,4)
(2,3)
(3,2)
(4,1)
(5,5)
• A 지원자는 일단 𝑋가 1등이므로, 무조건 선발 가능하다.
• B 지원자는 𝑋가 두 번째로 높다. 그래서 A보다 𝑌가 작으면 선발 가능하다.
• C 지원자는 𝑋가 세 번째로 높다. 그래서 A, B보다 𝑌가 작으면 선발 가능하다.
• D 지원자는 𝑋가 네 번째로 높다. 그래서 A, B, C보다 𝑌가 작으면 선발 가능하다.
• E 지원자는 𝑋가 다섯 번째로 높다. 그래서 A, B, C, D보다 𝑌가 작으면 선발 가능하다

*/
let io1 = [
  [3, 2],
  [1, 4],
  [4, 1],
  [2, 3],
  [5, 5],
];
let io2 = [
  [3, 6],
  [7, 3],
  [4, 2],
  [1, 4],
  [5, 7],
  [2, 5],
  [6, 1],
];
const sol = (io) => {
  let arr = io.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let min = 100001;
  for (let [a, b] of arr) {
    if (b < min) {
      min = b;
      count++;
    }
  }
  console.log(count);
};

sol(io1);
sol(io2);