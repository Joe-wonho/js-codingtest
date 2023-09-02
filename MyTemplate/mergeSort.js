/*
분할(Divide): 분할 작업은 단순히 배열의 크기를 절반으로 쪼개는 것이다.
정복(Conquer): 두 개의 부분 배열을 “정렬된 하나의 배열”로 만든다

장점: 최악의 경우에도 𝑂(𝑁𝑙𝑜𝑔𝑁) 을 보장할 수 있다는 점에서 효율적이다.
단점: 일반적인 경우, 정복(conquer) 과정에서 임시 배열이 필요하다.
*/

// 정렬된 왼쪽과 오른쪽 배열을 받아서 하나로 합치는 순수한 함수
// left, right already sorted
const merge = (left, right) => {
  const sortedArr = [];
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return [...sortedArr, ...left, ...right];
  // 아래 세줄과 같은 역할을 하는 코드
  // if(left.length === 0) results.push(...right);
  // if(right.length === 0) results.push(...left);
  // return results;
};

const mergeSort = function (array) {
  // ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것.
  if (array.length === 1) return array;

  // 2로 나누고 내림을 해야
  // length 가 2일 때도 안전하게 배열을 slice 할 수 있다.
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  // 재귀로 계속해서 반으로 나누면서 length 가 1이 될때까지 쪼개고,
  // 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어서 최종값을 리턴한다.
  return merge(mergeSort(left), mergeSort(right));
};

// const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
const arr = [5, 8, 10, -1];

const result = mergeSort(arr);
console.log(result);
