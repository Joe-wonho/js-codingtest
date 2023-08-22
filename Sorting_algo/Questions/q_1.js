let input = [3, 1, 2];

const sol = (input) => {
  input.sort((a, b) => a - b);
  return input;
};

console.log(sol(input));

const sol2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  //콘솔로그는 한번에 처리하자.
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    answer += input[i] + ' ';
  }
  console.log(answer);
};
sol2(input);
