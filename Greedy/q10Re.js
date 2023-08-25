//11509

/**
• 왼쪽부터 하나씩 풍선을 확인한다.
[핵심 아이디어] 해당 높이에 존재하는 화살이 없다면 화살을 새롭게 사용한다.
• 5개의 풍선의 높이가 각각 [4, 5, 2, 1, 4]일 때는 다음과 같다.
 */

let i = 5;
let h = '2 1 5 4 3';
let h2 = '1 2 3 4 5';

const sol = (io, h) => {
  let arr = h.split(' ').map(Number); // 모든 풍선의 위치 정보 입력받기
  let result = 0;
  let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지

  for (let x of arr) {
    if (arrow[x] > 0) {
      // 해당 높이에 화살이 있다면
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      // 해당 높이에 화살이 없다면
      arrow[x - 1] += 1;
      result += 1; // 화살 쏘기
    }
  }
  console.log(result);
};

sol(i, h);
sol(i, h2);
