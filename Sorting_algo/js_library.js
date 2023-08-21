/*
JavaScript에서는 배열에 포함된 데이터를 정렬하는 𝑠𝑜𝑟𝑡() 함수를 제공한다.
최악의 경우 시간 복잡도 𝑂(𝑁𝑙𝑜𝑔𝑁)을 보장한다.
알고리즘 및 코딩 테스트 문제를 해결할 때 정렬 기능이 필요하다면, 
단순히 𝑠𝑜𝑟𝑡() 함수를 사용하자.
만약, 𝑠𝑜𝑟𝑡() 함수의 사용이 제한된다면, 병합 정렬과 같은 알고리즘을 직접 구현하여 사용하자

arr.sort(compareFunction);

JavaScript의 정렬 함수에서는 정렬 기준 함수가 사용된다.
두 개의 원소 a, b를 입력으로 받는다.

1. 반환 값이 0보다 작은 경우 → a가 우선순위가 높아, 앞에 위치한다.
2. 반환 값이 0보다 큰 경우 → b가 우선순위가 높아, 앞에 위치한다.
3. 반환 값이 0인 경우 → a와 b의 순서를 변경하지 않는다.

정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급된다.
 유니코드 값 순서대로 정렬되므로
 항상 정렬 기준 함수를 명시하는 습관을 들일 필요가 있다
*/

//오름차순 정렬 예시
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
//이렇게 바꿔도된다.
// function compare(a, b) {
//   return a - b;
//   }
arr.sort(compare);
console.log(arr);

//위 함수를 더 줄일 수 있다.
/*
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr.sort(function(a, b) {
return a - b;
});
console.log(arr);

//내림 차순으로 변경시 b-a 하면된다.
*/

//문자열 내림차순 정렬 예시
//별도로 비교 함수(compare function)을 사용하지 않으면, 유니코드 순으로 정렬된다
let arrString = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];
function compareString1(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
arrString.sort(compareString1);
console.log(arrString); //[ 'fineapple', 'durian', 'carrot', 'banana', 'apple' ]

//문자열 대한 오름차순 정렬 예시 (대소문자 구분 X)
let arrString2 = ['fineapple', 'Banana', 'durian', 'Apple', 'carrot'];
function compareString2(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}
arrString2.sort(compareString2);
console.log(arrString2);

//객체에 대하여 원하는 기준으로 오름차순 정렬 예시
let arrObj = [
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 },
  { name: '박영희', score: 97 },
];
function compareObj(a, b) {
  return b.score - a.score;
}
arrObj.sort(compareObj);
console.log(arrObj);
