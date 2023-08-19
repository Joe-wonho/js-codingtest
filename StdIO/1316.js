// https://www.acmicpc.net/problem/1316
let input1 = [3, ['happy', 'new', 'year']]; //3
let input2 = [4, ['aba', 'abab', 'abcabc', 'a']]; //1
let input3 = [9, ['aaa', 'aaazbz', 'babb', 'aazz', 'azbz', 'aabbaa', 'abacc', 'aba', 'zzaz']];
let input4 = [2, ['yzyzy', 'zuzuz']]; //0
/**
문제
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 
각 문자가 연속해서 나타나는 경우만을 말한다. 
예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

출력
첫째 줄에 그룹 단어의 개수를 출력한다.
 */

// ['happy', 'new', 'year']
//data = happy
const checker = (data) => {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) return false;
      else setData.add(data[i + 1]);
    }
  }
  return true;
};

const sol = (input) => {
  let n = Number(input[0]);
  let count = 0;

  for (let i = 0; i < n; i++) {
    let data = input[1][i];
    if (checker(data)) count += 1;
  }
  return count;
};

console.log(sol(input1)); //3
console.log(sol(input2)); //1
console.log(sol(input3)); //2
console.log(sol(input4)); //0
