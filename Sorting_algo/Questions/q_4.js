//11650

let io = [
  [3, 4],
  [1, 1],
  [1, -1],
  [2, 2],
  [3, 3],
];
const compare = (a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else return a[1] - b[1];
};

const sol = (input) => {
  let answer = '';
  input.sort(compare);
  for (let point of input) {
    answer += point[0] + ' ' + point[1] + '\n';
  }
  console.log(answer);
};
sol(io);
