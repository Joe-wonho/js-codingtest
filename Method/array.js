// 배열 관련 고차 함수(메서드)

// join("sep")은 배열을 "문자열" 형태로 반환(추출)해준다. defalut 는 ","
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); //"Fire,Air,Water"
console.log(elements.join("")); //"FireAirWater"
console.log(elements);

//split("sep")은 sep을 기준으로 문자열을 "배열"로 생성한다.
const str = "abc defg";
console.log(str.split("")); //["a","b","c"," ","d"~~~~,"e"]
console.log(str.split(" ")); // ["abc", "defg"]

//concat 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환, 원본 손상 없음
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3); // Array ["a", "b", "c", "d", "e", "f"]

// fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다
const array5 = [1, 2, 3, 4];
// 2번 인덱스부터 4-1 인덱스까지 0으로 채운다
console.log(array5.fill(0, 2, 4)); // [1, 2, 0, 0]
// 1번 인덱스부터 5로 끝까지 채운다
console.log(array1.fill(5, 1)); //[1, 5, 5, 5]
console.log(array1.fill(6)); // [6, 6, 6, 6]

//includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다. 대소문자 구분
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // true

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// 원본배열 손상 없음, filter는 콜백함수를 사용
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result); // Array ["exuberant", "destruction", "present"]

//find(callback) 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
//없다면 undefined를 반환합니다.
const array6 = [5, 12, 8, 130, 44];
const found = array6.find((element) => element > 10);
console.log(found); // 12

//findIndex(callback) 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소의 인덱스를 반환.
// 없으면 -1을 반환합니다.
const isLargeNumber = (element) => element > 13;
console.log(array6.findIndex(isLargeNumber)); // 3

//indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고
//없다면 -1을 반환합니다.
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // expected output: 1
// start from index 2
console.log(beasts.indexOf("bison", 2)); // expected output: 4
console.log(beasts.indexOf("giraffe")); // expected output: -1

//some() 메서드는 배열 안의 어떤 하나의 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
const array7 = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array7.some(even)); // expected output: true

// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
// 원본 손상 없음, 콜백함수 사용, Boolean 값을 반환합니다.
const isBelowThreshold = (currentValue) => currentValue < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold)); // true

// reverse()는 배열을 뒤집고 원본 배열이 바뀐다.
const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.reverse()); //[5,4,3,2,1]
console.log(arr8); //[5,4,3,2,1]
arr8.reverse();

//Array에 끝에 요소 추가는 push() 제거는 pop() 으로 이루어 지며 원본배열이 바뀐다.
//Array에 첫번째에 요소 추가는 unshift() 제거는 shift() 으로 이루어 지며 원본배열이 바뀐다.

// slice(startIndex, endIndex) - "새로운 배열 만드는데" 사용, 원본 배열의 손상 없음
const arr10 = [1, 2, 3, 4, 5];
console.log(arr10.slice(2)); // [3,4,5] 2번 Index 부터 끝까지
console.log(arr10.slice(2, 4)); // [3,4] 2번 Index 부터 (4-1) 인덱스까지 잘라서 배열 반환

// splice 함수는 "원본 배열의 수정 및 삭제"에 사용. 선형시간 O(1)을 가진다.
// splice(startIndex, deleteCount, addValue)  // deleteCount가 0이면 아무것도 제거하지 않음
const arr11 = [1, 2, 3, 4, 5];
console.log(arr11.splice(2)); //[3,4,5]  2번인덱스부터~끝까지 삭제
console.log(arr11); //[1,2]  2번 인덱스부터 삭제된 원래 배열

//2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가
var myFish = ["angel", "clown", "drum", "sturgeon"];
console.log(myFish);
var removed = myFish.splice(2, 1, "trumpet");
console.log(myFish); // myFish is ["angel", "clown", "trumpet", "sturgeon"]

//배열을 정렬하는 방법 : sort()함수 원본 배열 손상 있음
// 구문 arr.sort([compareFunction])
//compareFunction Optional : 정렬 순서를 정의하는 함수.
//생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다

//배열의 값이 Number인 경우 정렬
let arr50 = [1, 10, 100, 30, 40, 2, 4];
console.log(arr50.sort((a, b) => a - b)); // // 올바른 오름차순으로 정렬하는 sort함수
console.log(arr50.sort((a, b) => b - a)); // 내림차순으로 정렬하는 sort함수

//배열의 값이 string인 경우 정렬**********************여기
//오름차순 정렬
const arrStr = ["kiwi", "apple", "melon", "grape", "banana"];
arrStr.sort(function (a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(arrStr);

//내림차순 정렬
const arrStr1 = ["kiwi", "apple", "melon", "grape", "banana"];
arrStr1.sort(function (a, b) {
  if (a < b) return 1;
  else if (a > b) return -1;
  else return 0;
});
console.log(arrStr1);

let ascending_order = (x, y) => {
  // 오름차순 정렬
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x > y ? 1 : -1;
};

let decending_order = (x, y) => {
  // 내림차순 정렬
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x < y ? 1 : -1;
};

//오름차순 정렬 문자와 숫자가 있을 때
// let sortedArray = array.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   if (a === b) return 0;
//   else return -1;
// });

// map(callback)
//배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다
const array100 = [1, 4, 9, 16];
const map1 = array100.map((x) => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]
// 인덱스를 포함시킬 수 있음
// const days = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   ); //[7,3,9]
//let queue =priorities.map((value,index)=>[value,index]);  // 다양하게 사용가능

// map을 활용해 배열 속 객체를 재구성하기
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}] kvArray는 변하지 않음

//flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.
// 구문 : const newArr = arr.flat([depth])
//depth Optional 중첩 배열 구조를 평탄화할 때 사용할 깊이 값. 기본값은 1입니다.
// 중첩 배열 평탄화
const arr71 = [1, 2, [3, 4]];
arr71.flat(); // [1, 2, 3, 4]
const arr72 = [1, 2, [3, 4, [5, 6]]];
arr72.flat(); // [1, 2, 3, 4, [5, 6]]

const arr73 = [1, 2, [3, 4, [5, 6]]];
arr73.flat(2); // [1, 2, 3, 4, 5, 6]

const arr74 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr74.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 배열 구멍 제거 , flat 메서드는 배열의 구멍도 제거합니다.
const arr75 = [1, 2, , 4, 5];
arr75.flat(); // [1, 2, 4, 5]

//flatMap() 메서드는 먼저 매핑함수를 사용해 각 엘리먼트에 대해 map 수행 후,
//결과를 새로운 배열로 평탄화합니다. 이는 깊이 1의 flat 이 뒤따르는 map 과 동일하지만,
//flatMap 은 아주 유용하며 둘을 하나의 메소드로 병합할 때 조금 더 효율적입니다.

//구문 : arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
let arr1 = [1, 2, 3, 4];
arr1.map((x) => [x * 2]); // [[2], [4], [6], [8]]
arr1.flatMap((x) => [x * 2]); // [2, 4, 6, 8]
// 한 레벨만 평탄화됨
arr1.flatMap((x) => [[x * 2]]); // [[2], [4], [6], [8]]

//reduce(callback, initialValue를) :  배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// callback = function(acc, cur , curIdx, array)
// acc :누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
// cur: 처리할 현재 요소.
// curIdx: 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
//[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );

// callback	  accumulator	  currentValue	currentIndex	array	          반환 값
// 1번째 호출	    0	            1	              1	      [0, 1, 2, 3, 4]	  1
// 2번째 호출	    1	            2	              2	      [0, 1, 2, 3, 4]	  3
// 3번째 호출	    3	            3	              3	      [0, 1, 2, 3, 4]	  6
// 4번째 호출	    6	            4	              4	      [0, 1, 2, 3, 4]	  10

// reduce()의 두 번째 인수로 초기값을 제공하는 경우, 결과는 다음과 같습니다:
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 10);
//            accumulator	currentValue	currentIndex	array	            반환값
// 1번째 호출	    10	        0	            0         	[0, 1, 2, 3, 4] 	10
// 2번째 호출	    10	        1	            1         	[0, 1, 2, 3, 4] 	11
// 3번째 호출	    11	        2	            2         	[0, 1, 2, 3, 4] 	13
// 4번째 호출	    13	        3	            3         	[0, 1, 2, 3, 4] 	16
// 5번째 호출	    16	        4	            4         	[0, 1, 2, 3, 4] 	20
// 이 때 reduce()가 결과로 반환하는 값은 20입니다.

//forEach(callback) : forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
const arr = ["a", "b", "c"];
arr.forEach((element) => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
