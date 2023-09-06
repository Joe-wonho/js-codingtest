//19939
// 공n 팀수k

/*
공 = n
팀 = k=5

최소 필여힌 공의 개수 N + 4 + 3 2 1 0 // 5-15ro / 6- 21 / 7- 28
2-3 / 3-6 / 4-10 / 5-15
모든 바구니 최소 1개 담기
공N이 최소 K-1개 있어야한다

2 = (1,1) -->오류
3 = (3,2,1)==> 2개
4= (4,3,2,1)  ==>3개  15개 들어왔어 그럼 10개빼야되 5개남지 이건 최대값에 줘야대
5= (5,4,3,2,1) ==>4개 + 남는거
*/

let f1 = '5 3'; //-1
let f2 = '6 3'; //2
let f3 = '15 4'; // 8

const sol = (io) => {
  let n = Number(io.split(' ')[0]);
  let k = Number(io.split(' ')[1]);
  let idx = 4;
  let minArr = [0, 0, 3, 6]; //k개의 팀에대한 공의 최소개수
  while (idx <= k) {
    minArr.push(idx + minArr[minArr.length - 1]);
    idx++;
  }
  if (n < minArr[k]) return console.log('실패');
  let reamin = n - minArr[k];
  let result = k - 1 + reamin;
  //n-1개가 최소 남아
  console.log(result);
};
// sol(f1);
// sol(f2);
// sol(f3);

const sol2 = (io) => {
  let n = Number(io.split(' ')[0]);
  let k = Number(io.split(' ')[1]);
  let summary = 0; // 1부터 K까지의 합
  for (let i = 1; i < k + 1; i++) {
    summary += i;
  }
  if (summary > n) {
    // 공의 개수가 부족한 경우
    console.log(-1);
  } else {
    // 공의 개수가 충분한 경우
    n -= summary;

    //     공의 개수가 부족하지 않고 공의 개수가 남지않는다면 첫번째와 마지막 k 번째의 차이가 답이된다.
    // 1, 2, 3, ............ k 개씩 집어넣었으므로 가장 적은개수와 가장 많은개수는 k-1 개만큼 차이가 난다.

    //  만약 공의 개수가 남았다면 반대로 k번째 바구니부터 공을 집어넣어야
    //공의 개수가 중복되지 않으면서 공을 집어넣을 수 있다.
    //k, k-1 .............3,2,1 순서로 공을 집어넣었기 때문에 공의 개수는 k+1,k.........가 된다.
    //그래서 가장 적은개수와 가장 많은개수의 차이는 k번쨰와 첫번째의 차이가 된다. (k+1) -1, 즉 k 가 된다.

    if (n % k == 0) console.log(k - 1); // K개에 각각 1씩 더하기
    else console.log(k);
  }
};

sol2(f1);
sol2(f2);
sol2(f3);
