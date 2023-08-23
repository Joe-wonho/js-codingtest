//1181

let io = ['but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours'];

const compare = (a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
};

const sol = (io) => {
  io.sort((a, b) => a.length - b.length).sort(compare);

  let data = new Set(io);
  let answer = '';
  for (let el of data) {
    answer += el + '\n';
  }
  console.log(answer);
};
sol(io);

const sol2 = (io) => {
  let arr = [...new Set(io)];
  arr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });
  let answer = '';
  for (let el of arr) {
    answer += el + '\n';
  }
  console.log(answer);
};

sol2(io);
