const io1 = 18;
const io2 = 4;
const io3 = 6;

const sol = (io) => {
  let five = 0;
  let three = 0;
  let total = 0;

  if (io / 5 !== 0) {
    total = parseInt(io / 5);
    io = io % 5;
    total += parseInt(io / 3);
    io = io % 3;
    if (io !== 0) return console.log('-1');
  } else if (io / 5 === 0 && io / 3 !== 0) {
    total = parseInt(io / 3);
    io = io % 3;
    if (io !== 0) console.log('-1');
  }
  console.log(total);
};
// 3. 5 봉지
// 최소봉지수로 가져감
sol(io1);
sol(io2);
sol(io3);
