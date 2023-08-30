//10816
// 정렬된 배열에서 특정 원소의 개수 구하기 - 이진 탐색 알고리즘 사용
// Ex.js 파일의 개념과 같이 lower. upperbound 사용
/*
이진 탐색을 위해 먼저 데이터를 오름차순 정렬한다.
• 이 과정에서 𝑂 𝑁𝑙𝑜𝑔𝑁 의 시간 복잡도가 요구된다.
데이터의 수(𝑁) 및 쿼리의 수(𝑀)는 모두 최대 50만인 것을 알 수 있다

예를 들어
쿼리 : 10  9  -5  2  3   4  5  -10
개수 : 3개 0개 0개 1개 2개 0개 0개 3게
각 쿼리에 대하여 𝑂 𝑙𝑜𝑔𝑁 으로 해결한다면, 전체 시간 복잡도는 𝑂 𝑀𝑙𝑜𝑔𝑁 이다.
*/

// 라이브러리 만들기
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
}

//𝑐𝑜𝑢𝑛𝑡𝐵𝑦𝑅𝑎𝑛𝑔𝑒(): 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산한다.
// • 앞서 정의한 𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수와 𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수를 이용해 구현할 수 있다
function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let arr1 = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];
let arr2 = [10, 9, -5, 2, 3, 4, 5, -10];

const sol = (arr1, arr2) => {
  let n = arr1.length; // 데이터 수 n
  let arr = arr1;
  let m = arr2.length; // 쿼리 수 m
  let query = arr2;

  arr.sort((a, b) => a - b); //이진 탐색을 위한 오름차순 정렬

  let answer = '';

  for (let i = 0; i < m; i++) {
    // 값이 query[i]인 데이터의 개수 계산
    let cnt = countByRange(arr, query[i], query[i]);
    answer += cnt + ' ';
  }
  console.log(answer);
};
sol(arr1, arr2);
