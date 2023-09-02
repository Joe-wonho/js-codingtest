// Object 객체는 복사시에 주소만 복사하므로 얕은, 깊은 복사가 필요하다.
// let user = { name: 'John', age: 27 };
// let admin = user; // 이경우에 admin과 user 는 같은 주소를 바라 보게 되어 둘중 하나의 값만 바꿔도 둘 다 바뀐다.

// 얕은 복사(Shallow copy)는 참조 타입 데이터가 저장한 '메모리 주소 값'을 복사한 것을 의미한다.
// 반대로 깊은 복사(Deep copy)는 새로운 메모리 공간을 확보해 완전히 복사하는 것을 의미한다.

// 얕은 복사 1 - for 문 이용
// let admin = {};
// for (let key in user) {
//   admin.key = user.key;
// }

// 얕은복사 2 - Object.assign({},user); 이용
// let admin = Object.assign({}, user);

// 얕은복사 3 - spread
// let admin = { ...user };

// admin.name = 'Park';
// console.log(admin.name);
// console.log(user.name);

//얕은 복사의 문제점 - 객체 내에 또 다른 객체가 있다면 복사되지 않음
//ex)
let user = { name: "John", age: 27, size: { height: 180, weight: 72 } }; // 이런경우

// JSON 객체를 이용한 깊은복사, 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김
//stringfy : js Object-> string ,  parse: string-> js Object
console.log(user);
console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(user)));
let admin_json = JSON.parse(JSON.stringify(user));
admin_json.size.weight++;
--admin_json.size.height;

console.log(admin_json.size.weight);
console.log(admin_json.size.height);
console.log(user.size.weight);
console.log(user.size.height);

// 이밖에 Lodash와 같은 라이브러리로 깊은 복사를 수행할 수 도 있다.

/** 
// in Operator - obj안에 해당 키가 존재하는지 확인
console.log('email' in obj3); //true
console.log('company' in obj3); //false

// key와 value의 집합을 구하는 방법
console.log(Object.keys(obj3)); //리스트 형태로 키 집합이 나옴
console.log(Object.values(obj3)); //리스트 형태로 벨류 집합이 나옴

//객체 순환 for in (이전에 for of를 사용해 배열을 순회했던 것처럼)
console.log('-----------for in 이용-------------');
for (const key in obj3) {
  console.log(key, obj3[key]);
}
***************객체 순환 문제 예제
let s= "google"   // 실행결과값으로는 가장 많이 등장한 글자를 출력, 단 등장수가 같다면 맨앞을 출력
function solution(s) {
    var answer = '';
    let obj = {};
    let maxCount=0;
    for (let str of s){
        if(!obj[str]){
         obj[str]=1
        } else {
            obj[str]++}
    }
    for(let key in obj){
        if(maxCount < obj[key]){
            maxCount = obj[key];
            answer = key;
        }
    }
    return answer;
}
*/
