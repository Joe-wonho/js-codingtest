/*
10만개가 넘는 데이터가 있을 떄 효율적인 알고리즘이다.
병합 정렬은 전형적인 분할 정복(divide and conquer) 알고리즘이다

*분할 정복
1. 분할(divide): 큰 문제를 작은 부분 문제(쉬운 문제)로 분할한다.
2. 정복(conquer): 작은 부분 문제를 각각 해결한다.
3. 조합(combine): 해결한 부분 문제의 답을 이용하여 다시 큰 문제를 해결한다.

분할 정복은 "재귀 함수를 이용해 구현한다."
분할하는 방식이 동일한 경우가 많기 때문이며 분할은 더 쪼갤 수 없는 크기까지 계속한다.

단점
일반적으로 재귀 함수를 사용한다는 점에서 함수 호출 횟수가 많이 발생한다.
이는 오버헤드(overhead)로 이어진다.

시간 복잡도 𝑂(𝑁𝑙𝑜𝑔𝑁) 을 보장하는 빠른 정렬 알고리즘 중 하나이다

분할(Divide): 분할 작업은 단순히 배열의 크기를 절반으로 쪼개는 것이다.
정복(Conquer): 두 개의 부분 배열을 “정렬된 하나의 배열”로 만든다

정복 방식
분할된 각 부분 배열은 이미 정렬된 상태로 본다.
각 부분 배열에 대하여 첫째 원소부터 시작하여 하나씩 확인한다.
총 원소의 개수가 𝑁개일 때, 𝑂 𝑁 의 시간 복잡도가 요구된다.

장점: 최악의 경우에도 𝑂(𝑁𝑙𝑜𝑔𝑁) 을 보장할 수 있다는 점에서 효율적이다.
단점: 일반적인 경우, 정복(conquer) 과정에서 임시 배열이 필요하다.
*/

// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  }
  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  // 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

// 병합 정렬(merge sort) 함수
function mergeSort(arr, left, right) {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide)
    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer)
    mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행(conquer)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
  }
}

let arr5 = [5, 8, 10, -1];
let sorted = Array.from({ length: arr5.length }, () => 0);
mergeSort(arr5, 0, arr5.length - 1);
console.log(arr5);
// /* 1) 병합 정렬의 수행 시간 측정 */
// // 0부터 999까지의 정수 100000개를 담은 배열 생성
// let arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
// // getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
// let startTime = new Date().getTime();
// // 임시 정렬 배열(sorted) 정의
// let sorted = Array.from({ length: arr.length }, () => 0);
// mergeSort(arr, 0, arr.length - 1);
// let endTime = new Date().getTime();
// // 시간차 출력
// console.log('병합 정렬 소요 시간:', endTime - startTime, 'ms.');

// /* 2) 이미 정렬된 배열에 대한 병합 정렬의 수행 시간 측정 */
// // 값이 7인 정수 100000개를 담은 배열 생성
// arr = Array.from({ length: 100000 }, () => 7);
// // getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
// startTime = new Date().getTime();
// // 임시 정렬 배열(sorted) 정의
// sorted = Array.from({ length: arr.length }, () => 0);
// mergeSort(arr, 0, arr.length - 1);
// endTime = new Date().getTime();
// // 시간차 출력
// console.log('정렬된 배열에 대한 병합 정렬 소요 시간:', endTime - startTime, 'ms.');
