//1789
const io1 = '10';

const sol = (io) => {
  let n = 0;
  let sum = 0;
  let max = Number(io);
  while (sum <= max) {
    n++;
    sum += n;
    console.log(n);
    console.log('sum', sum);
  }
  console.log(n - 1);
};

sol(io1);
