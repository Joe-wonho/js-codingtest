// fs 불러오기
let fs = require('fs');
//전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

console.log(input);

// https://www.acmicpc.net/problem/2525
let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + ' ' + minute);
