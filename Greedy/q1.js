//11047
let io1 = [10, 4200];
let io2 = '1 5 10 50 100 500 1000 5000 10000 50000';

const sol = (io1, io) => {
  let n = io1[0];
  let total = io1[1];
  let arr = io.split(' ').sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < 10; i++) {
    count = count + parseInt(total / arr[i]);
    total %= arr[i];
  }
  console.log(count);
};
sol(io1, io2);
