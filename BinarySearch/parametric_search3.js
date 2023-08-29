//1654

//2805

/*
데이터의 범위가 20억으로 굉장히 크다
이렇게 이진탐색의 문제의 경우 데이터의 범위가 힌트가 된다.
그러므로 이진탐색으로 접근하여 logN의 시간복잡도를 가지게 해서 풀자!
*/

let k = 4;
let n = 11;
let arr = [802, 743, 457, 539];

const sol = (k, n, arr) => {
  let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(길이)
    let total = 0; // 가지고 있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇 개 만들 수 있는지
    for (let x of arr) total += parseInt(x / mid);
    if (total < n) end = mid - 1; // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
    else {
      // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘이기
      result = mid; // 최대 길이를 찾아야 하므로, result에 기록
      start = mid + 1;
    }
  }
  console.log(result);
};

sol(k, n, arr); //200
