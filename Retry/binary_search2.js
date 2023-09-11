//2805

/*
데이터의 범위가 20억으로 굉장히 크다
이렇게 이진탐색의 문제의 경우 데이터의 범위가 힌트가 된다.
그러므로 이진탐색으로 접근하여 logN의 시간복잡도를 가지게 해서 풀자!
*/

let n = 4;
let m = 7;
let arr = [20, 15, 10, 17];

const sol = (n, m, arr) => {
  let start = 0; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let end = arr.reduce((a, b) => Math.max(a, b)); //20억을 하드코딩으로 넣어도 된다.
  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(높이)
    let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
    for (let x of arr) if (x > mid) total += x - mid;
    if (total < m) end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기(높이 줄이기)
    else {
      // 나무의 양이 충분한 경우 덜 자르기(높이 키우기)
      result = mid; // 최대한 덜 잘랐을 때가 정답이므로, result에 기록
      start = mid + 1;
    }
  }
  console.log(result);
};

sol(n, m, arr); //15

(n = 5), (m = 20), (arr = [4, 42, 40, 26, 46]);
sol(n, m, arr); //36
