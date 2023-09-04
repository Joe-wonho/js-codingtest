/*
이진 탐색: '정렬되어 있는 리스트'에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색한다.
탐색을 위한 시간 복잡도: O(logN)
*/

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  //여기가 작거나 같은거에 유의
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // 찾은 경우 중간점 인덱스 반환
    if (arr[mid] == target) return mid;
    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    else if (arr[mid] > target) end = mid - 1;
    // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else start = mid + 1;
  }
  return;
  -1;
};

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// n(원소의 개수)와 target(찾고자 하는값)
let n = 10;
let target = 13;
// 이진 탐색 수행 결과 출력
let result = binarySearch(arr, target);
if (result == -1) console.log('원소가 존재하지 않습니다.');
else console.log(`${result + 1}번째 원소입니다.`);
