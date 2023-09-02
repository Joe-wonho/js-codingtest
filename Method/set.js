//Set : value만을 저장하며 중복을 허용하지 않는 Collection

//요소 추가 : Set.add(value) -> 호출시 set이 반환되므로 체이닝 가능
//요소 존재여부 : Set.has(value)
//요소 삭제 : Set.delete(value)
// 다양한 자료형을 value로 사용 가능하며,

let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!"); // 여기서도 L이 중복되므로 1개는 제외된다.

console.log(set);
console.log(num);
console.log(str);

//add
set.add(1).add(1).add(10).add(15); //중복된 값은 알아서 제거된다.
console.log(set);

//has
console.log(set.has(10)); //t
console.log(set.has(8)); //f
set.delete(1);
set.delete(-1);
console.log(set);

for (let item of str) console.log(item); //그래서 Set은 사용할 때 keys() values() 이런걸 안쓴다.
for (let item of str.keys()) console.log(item);
for (let item of str.values()) console.log(item);
for (let item of str.entries()) console.log(item); // 이것만 다르게 출력 ["H","H"] ...형식
console.log(str.keys());
console.log(str.entries()); //Map과의 호환성을 위해 존재함

//***************중복단어 제거 문제 풀이
function answer(arr) {
  let new_arr = [];
  let ar = new Set(arr);
  new Set(arr).forEach((i) => new_arr.push(i));

  return new_arr;
}
let input = [
  ["John", "alice", "alice"],
  ["Hello", "hello", "HeELLO"],
  ["kiwi", "bans", "mango"],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
  //   console.log(`#${i + 1} ${answer(input[i])}`);
}
