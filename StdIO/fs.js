// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
//전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

console.log(input); // ["5", "17 88 53 100 73"]
