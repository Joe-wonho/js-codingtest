//16953
const io1 = '2 162';
const io2 = '4 42';
const io3 = '100 40021';

const sol = (io) => {
  let x = io.split(' ').map(Number)[0];
  let z = io.split(' ').map(Number)[1];
  let cnt = 0;
  while (x != z || x < z) {
    if (z % 2 === 0) {
      z /= 2;
      cnt++;
    } else {
      z = Number(String(z).slice(0, String(z).length - 1));
      if (z === 0 || z < x) {
        return console.log(-1);
      }
      cnt++;
    }
  }
  console.log(cnt + 1);
};
// sol(io1);
// sol(io2);
// sol(io3);

/**
 
[문제 해결 아이디어] 𝐵에서 𝐴로 이동한다고 생각해 보자.
• 현재의 𝐵값이 정해져 있을 때, 취할 수 있는 행동은 항상 정해져 있다.
1) 값이 2로 나누어 떨어지는 경우 → 2로 나누는 연산만 사용 가능하다.
2) 그렇지 않고, 일의 자릿수가 1인 경우 → 10으로 나누는 연산만 사용 가능하다.
3) 위 경우가 모두 해당되지 않는 경우 → 더 이상 이동이 불가능하므로, 종료한다.
이외의 다른 경우의 수가 아예 존재하지 않는 것을 알 수 있다.
매 상황에서 이동 경로는 단 하나만 존재하므로, 그리디 알고리즘에 해당한다.

 */

const sol2 = (io) => {
  let [a, b] = io.split(' ').map(Number); // A와 B 입력
  let flag = false;
  let result = 1;
  while (a <= b) {
    if (a == b) {
      flag = true;
      break;
    }
    if (b % 2 == 0) b = parseInt(b / 2); // 2로 나누어 떨어지는 경우
    //이부분을 잘 알아두자
    else if (b % 10 == 1) b = parseInt(b / 10); // 그렇지 않고, 일의 자릿수가 1인 경우
    else break; // 위 경우가 모두 해당되지 않는 경우
    result++;
  }
  if (flag) console.log(result);
  else console.log(-1);
};
sol2(io1);
sol2(io2);
sol2(io3);
