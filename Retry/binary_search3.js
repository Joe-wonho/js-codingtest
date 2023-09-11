//18353

/*
• 문제 요구사항: 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치한다.
1) 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다.
2) 그러면서도 남아 있는 병사의 수가 최대가 되도록 하는 것이 목표다.

예를 들어 𝑁 = 7일 때 나열된 병사들의 전투력이 다음과 같다고 가정하자.
병사 번호 1  2   3  4  5  6  7
전투력   15 11  4  8  5  2   4

• 이때 3번 병사와 6번 병사를 열외시키면, 다음과 같이 남아 있는 병사의 수가 내림차순의
형태가 되며 5명이 된다. 이는 남아 있는 병사의 수가 최대가 되도록 하는 방법이다.
병사 번호 1 2 4 5 7
전투력 15 11 8 5 4

이진 탐색을 활용하면 최악의 경우 시간 복잡도 𝑶(𝑵𝒍𝒐𝒈𝑵)의 코드로 해결할 수 있다.
• 아이디어: 현재 원소가 가장 크다면 뒤에 삽입하고, 그렇지 않다면 최대한 왼쪽의 원소와 교체

bs2 이미지 보면서 이해하기
*/

let arr = [15, 11, 4, 8, 5, 2, 4];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

const sol = (arrEx) => {
  let n = arrEx.length;
  let arr = arrEx;

  //정렬시켜서 loswerBound 이용하기위함.
  arr.reverse(); // 순서를 뒤집어 최장 증가 부분 수열(LIS) 문제로 변환
  let d = [0]; // LIS 배열
  // 이진 탐색을 활용한 LIS 알고리즘 수행
  for (let x of arr) {
    if (d[d.length - 1] < x) {
      // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
      d.push(x);
    } else {
      // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
      let index = lowerBound(d, x, 0, d.length);
      d[index] = x;
    }
  }
  // 열외해야 하는 병사의 최소 수를 출력
  console.log(n - (d.length - 1));
};

sol(arr);
