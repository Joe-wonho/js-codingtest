//10814
let io = ['21 Junkyu', '21 Dohyun', '20 Sunyoung'];
//20 Sunyoung
// 21 Junkyu
// 21 Dohyun
const sol = (io) => {
  let arr = io.map((el) => {
    let age = el.split(' ')[0];
    let name = el.split(' ')[1];
    return [Number(age), name];
  });
  arr.sort((a, b) => a[0] - b[0]);
  let answer = '';
  for (let i of arr) {
    answer += i[0] + ' ' + i[1] + '\n';
  }
  console.log(answer);
};
sol(io);
