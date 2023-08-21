/**
 * 선택정렬보다 시간복잡도가 나쁜 버블정렬이며 
 * 비효율적이다.
 
단순히 인접한 두 원소를 확인 후 , 정렬이 안 되어있다면 위치를 서로 변경한다.
시간복잡도도 O(N^2)이다.

동작방식
각 단계에서 인접한 두 개의 원소를 비교해 필요시 위치 변경
예) 첫째와 둘째를 비교, 둘쨰와 셋째를 비교, 셋째와 넷째를 비교하는 방식
 
선택정렬은 가장 작은 원소가 맨앞으로 온다면
버블정렬은 한번의 단계가 수행되면 가장 큰 원소가 맨뒤로 이동한다.
따라서 그 다음 단계에서는 맨뒤로 이동한 데이터는 정렬에서 제외한다.

각 단계를 거칠 때마다 가장 큰 값을 하나씩 확실하게 결정하는 것으로 이해하면된다.

이미 정렬된 배열에 대해서 모든 비교가 필요하므로, 
굉장히 비효율적인 정렬 알고리즘 중 하나다.
*/

// 버블 정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 내림차순 예시 (등호를바꾸면 오름차순)
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

/* 1) 버블 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();
// 시간차 출력
console.log('버블 정렬 소요 시간:', endTime - startTime, 'ms.');

/* 2) 이미 정렬된 배열에 대한 버블 정렬의 수행 시간 측정 */
// 값이 7인 정수 30000개를 담은 배열 생성
arr = Array.from({ length: 30000 }, () => 7);
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();
// 시간차 출력
console.log('정렬된 배열에 대한 버블 정렬 소요 시간:', endTime - startTime, 'ms.');
