/**
 각 단계에서 현재 원소가 삽입될 위치를 찾고
 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.
 즉, 삽입할 대상이 한칸씩 왼쪽으로 이동하며 정렬한다.

 선택정렬과 버블정렬과 같이 O(N^2)의 시간이 걸리지만 더 효율적이다.
 비교연산 횟수가 위 두개보다 적기 때문이다.
 즉, 이미 정렬된 배열의 경우 위 두개보다 효과적으로 동작한다.

 삽입정렬 수행시 처음에 첫 원소는 정렬이 되있다고 고려한다.
 즉, 왼쪽에 있는 경우는 정렬되 있다고 생각하면된다.
 */

// 삽입 정렬 함수 (오름차순)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}

/* 1) 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();
// 시간차 출력
console.log('삽입 정렬 소요 시간:', endTime - startTime, 'ms.');

/* 2) 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */
// 값이 7인 정수 30000개를 담은 배열 생성
arr = Array.from({ length: 30000 }, () => 7);
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();
// 시간차 출력
console.log('정렬된 배열에 대한 삽입 정렬 소요 시간:', endTime - startTime, 'ms.');
