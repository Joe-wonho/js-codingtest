//Map : 다양한 자료형의 key를 허용, key-vlaue 형태의 자료형 저장 가능한 collection
// Object 대비 비교하면 다양한 key의 사용을 허용하고 값의 추가 삭제 메서드가 필요

//요소추가 : Map.set(key,value) --> 호출시 map이 반환되므로 체이닝가능
//요소 접근 : Map.get(key)
// 요소 삭제 : Map.clear()

let map = new Map();
map.set("name", "john"); // string key
map.set(123, 456); // number key
console.log(map);
console.log(map.get(123));
console.log(map.get("name"));
console.log(map.size);

// //chaining
// map.clear();
// console.log(map);
// map.set("name", "alice").set(123, 890); //chaining
// console.log(map);

// console.log("=====================================================");
// // Map 반복문  - collection 객체인 Map이 가진 iterator 속성을 이용해 for of 구문사용
// let recipe = new Map([
//   // ao맵을 초기화
//   ["A", 50],
//   ["B", 100],
//   ["C", 200],
// ]);

// console.log(recipe);
// for (let key of recipe.keys()) console.log(key);
// for (let value of recipe.values()) console.log(value);
// for (let entity of recipe) console.log(entity); //recipe.entries() 를 써도된다.

// console.log(recipe);
// console.log(recipe.entries());
// console.log("++++++++++++++++++++++++++++++++++++++");
// //Map -> Object로 바꾸기
// let recipe_obj = Object.fromEntries(recipe); // Map ->Object
// let recipe_kv = Object.entries(recipe_obj); // Object -> Map
// let recipe_map = new Map(recipe_kv); // 다시 맵을 kv로 ((key,value)으로) 만들어주기
// console.log(recipe);
// console.log(recipe_obj);
// console.log(recipe_kv);
// console.log(recipe_map);
