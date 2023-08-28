/*
이진 탐색 조건: 변경할(최적화할) 값 𝑥에 대하여 𝑓 𝑥 가 단조 증가 혹은 단조 감소
• 단조 증가 함수: 𝑥 ≤ 𝑦이면 𝑓 𝑥 ≤ 𝑓(𝑦)인 경우
• 일반적으로 조건(constraint)은 𝑓 𝑥 에 대하여 정의된다

파라메트릭 서치(Parametric Search)란?
• 최적화 문제를 결정 문제(‘예’ 혹은 ‘아니오’)로 바꾸어 해결하는 기법이다.
• 예시: 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
• 일반적으로 코딩 테스트에서 파라메트릭 서치 문제는 이진 탐색을 이용하여 해결할 수 있다.
• 파라메트릭 서치 문제의 목적 함수 예시: 2512번 문제
https://www.acmicpc.net/problem/2512
*/

// 탐색하는 범위가 10억이다 이렇게 탐색범위가 큰 경우에는
// 이진탐색을 이용해 탐색범위를 줄여나가기 때문에 이진탐색을 떠올리자.

//• 문제 요구사항: 적절한 상한 금액을 찾는 것이 문제의 목표다.
//• 전체 국가 예산이 485이고, 4개의 지방 예산 요청이 120, 110, 140, 150이라고 하자.
/*
• 전체 국가 예산이 485이고, 4개의 지방 예산 요청이 120, 110, 140, 150이라고 하자.
• 상한 금액이 127인 경우, 배정 금액의 합이 120 + 110 + 127 + 127 = 484이다.
*/
let n = 4;
let arr = [120, 110, 140, 150];
let total = 485;

let n1 = 5;
let arr1 = [70, 80, 30, 40, 100];
let total1 = 450;

const sol = (region, arrM, totalM) => {
  let n = region; // 지방의 수(N)
  let arr = arrM; // 각 지방의 예산 요청
  let m = totalM; // 총 예산(M)
  let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let end = arr.reduce((a, b) => Math.max(a, b)); // 배열로 들어온 각 지방 예산 중 최대값

  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
    let total = 0; // 배정된 예산의 총액 계산
    for (let x of arr) {
      // 각 지방에서 요청한 예산을 하나씩 확인하며
      total += Math.min(mid, x); // 예산 배정
    }
    console.log(total);
    // 지방 모든 예산  < = 예산총액
    if (total <= m) {
      // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
      result = mid;
      start = mid + 1;
    } else {
      // 조건을 만족하지 못한다면, 상한액을 감소시키기
      end = mid - 1;
    }
    console.log(start, end, mid, result);
  }
  console.log(result);
};

sol(n, arr, total); //127
// sol(n1, arr1, total1); //100
