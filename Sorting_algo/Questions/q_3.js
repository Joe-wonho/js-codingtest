//11004  n이 오백만개일 수 있으므로 O(N^2) 정렬 이용시 실패한다.

let k = 2;
let io = [4, 1, 2, 3, 5];

const sol = (k, input) => {
  input.sort((a, b) => a - b);
  console.log(input[k - 1]);
};
sol(k, io);
