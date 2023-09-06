//10814
let io = ['21 Junkyu', '21 Dohyun', '20 Sunyoung'];
//20 Sunyoung
// 21 Junkyu
// 21 Dohyun

const so = (arr) => {
  let ar = arr.map((el) => [Number(el.split(' ')[0]), el.split(' ')[1]]);
  console.log(ar);
  console.log(ar.sort((a, b) => a[0] - b[0]));
  console.log(ar);
  for (let el of ar) {
    console.log(el[0] + ' ' + el[1]);
  }
};
so(io);

// const sol = (io) => {
//   let arr = io.map((el) => {
//     let age = el.split(' ')[0];
//     let name = el.split(' ')[1];
//     return [Number(age), name];
//   });
//   arr.sort((a, b) => a[0] - b[0]);
//   let answer = '';
//   for (let i of arr) {
//     answer += i[0] + ' ' + i[1] + '\n';
//   }
//   console.log(answer);
// };
// sol(io);
