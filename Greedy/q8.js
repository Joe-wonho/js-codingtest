let io = '2 3 1';
let io2 = '5 2 4 1';

let io3 = '3 3 4';
let io4 = '1 1 1 1';

const sol = (d, l) => {
  let dArr = d.split(' ').map(Number);
  let lArr = l.split(' ').map(Number);
  console.log(dArr, lArr);
  let min = 10001;
  let sum = 0;
  for (let i = 0; i < dArr.length; i++) {
    if (min > lArr[i]) min = lArr[i];
    sum += min * dArr[i];
  }
  console.log(sum);
};

sol(io, io2);
sol(io3, io4);
