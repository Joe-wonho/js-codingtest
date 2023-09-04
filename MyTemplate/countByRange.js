/*
[값이 특정 범위에 속하는 원소의 개수 구하기]
• 코딩 테스트에서는 정렬된 배열에서 값이 특정 범위에 해당하는 원소의 개수를 계산하는 것을
요구하는 경우가 종종 있다.
• 이러한 문제를 해결하기 위해 𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수와 𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수를 사용할 수 있다
• 시간 복잡도 O(logN)을 요구하는 경우 사용가능

만약 
let arr = [3,4,5,5,5,7,9] 라는 배열이 있을 때 '5'라는 값이 몇개인지 알고자 한다면?
하한선과 상한선 함수
• 𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑(𝑎𝑟𝑟, 𝑥): 정렬된 순서를 유지하면서 배열 𝑎𝑟𝑟에 𝑥를 넣을 가장 왼쪽 인덱스를 반환
• 𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑 𝑎𝑟𝑟, 𝑥 : 정렬된 순서를 유지하면서 배열 𝑎𝑟𝑟에 𝑥를 넣을 가장 오른쪽 인덱스를 반환

𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑(𝑎𝑟𝑟, 5) => idx=2
𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑( 𝑎𝑟𝑟, 5 ) => idx=4  
고로 4-2 +1 하면 5가 몇개인지 알 수 있다.

문제의 배열을 먼저 오름차순으로 정렬 시켜놓는다
*/

// 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
};
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
const upperBound = (arr, target) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
};

//𝑐𝑜𝑢𝑛𝑡𝐵𝑦𝑅𝑎𝑛𝑔𝑒(): 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산한다.
const countByRange = (arr, leftValue, rightValue) => {
  let leftIndex = lowerBound(arr, leftValue);
  let rightIndex = upperBound(arr, rightValue);
  return rightIndex - leftIndex;
};

// 배열 선언
let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
// 값이 4인 데이터 개수 출력
console.log(countByRange(arr, 4, 4));
// 값이 [-1, 3] 범위에 있는 데이터 개수 출력
console.log(countByRange(arr, -1, 3));
