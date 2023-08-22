//2750 문제
//2751  n이 백만개가되어  sort()나 병합정렬 사용해야 시간초과가 안난다.

let n = 5;
let input = [5, 2, 3, 4, 1];

const sol = (n, input) => {
  input.sort((a, b) => a - b);
  let answer = '';
  for (let el of input) {
    answer += el + '\n';
  }
  console.log(answer);
};
sol(n, input);

const sol2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  //콘솔로그는 한번에 처리하자.
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    answer += input[i] + '\n';
  }
  console.log(answer);
};
sol2(input);
