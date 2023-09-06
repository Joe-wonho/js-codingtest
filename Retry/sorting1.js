//18870 -- 다시풀어보기!
let io1 = '2 4 -10 4 -9'; // 2 3 0 3 1
let io2 = '1000 999 1000 999 1000 999'; //1 0 1 0 1 0

/** 문제해결 아이디어
좌표 압축이란, 쉽게 말해 각 값을 크기 순위로 변경하는 것이다.
배열 [2, 4, -10, 4, -9]를 생각해 보자.
이를 순위로 표현하면(0부터 시작) [2, 3, 0, 3, 1]로 이해할 수 있다.

1. 입력 배열: 𝑎𝑟𝑟 = 2, 4, −10, 4, −9
2. 중복 제거를 위해 집합으로 만들기: 𝑢𝑛𝑖𝑞𝑢𝑒𝐴𝑟𝑟𝑎𝑦 = [2,4, −10, −9]
3. 정렬 수행: 𝑠𝑜𝑟𝑡𝑒𝑑 = [−10, −9,2,4]
4. Dictionary를 이용해 0부터 차례대로 매핑하기
myMap = {
 -10:0,
 -9:1,
 2:2,
 4:3
}
5. 하나씩 매핑 값 출력하기 → [2, 3, 0, 3, 1]
 */

const sol = (io) => {
  let arr = io.split(' ').map(Number);
  // 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
  let uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행
  // 0부터 차례대로 매핑(mapping) 수행
  let myMap = new Map();
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
  }
  let answer = '';
  for (let x of arr) answer += myMap.get(x) + ' ';
  console.log(answer);
};
sol(io1);
sol(io2);
