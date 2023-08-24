//11399

let io = [5, '3 1 4 3 2'];

const sol = (io) => {
  let n = io[0];
  let arr = io[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let cnt = 0;
  let acc = 0;
  for (let i of arr) {
    acc += i;
    cnt += acc;
  }
  console.log(cnt);
};

sol(io);
