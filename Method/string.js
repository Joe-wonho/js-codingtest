// charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환
// charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 "정수"를 반환합니다.
// String.fromCharCode(숫자) : 숫자에 해당하는 아스키코드를 문자로 변환
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
console.log(String.fromCharCode(100)); // 100에 해당하는 아스키코드를 문자로 변환

// str.concat(string2, string3[, ..., stringN]) 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // expected output: "Hello World"
console.log(str2.concat(", ", str1)); // expected output: "World, Hello"

// str.includes(searchString[, position]) 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환
const se = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(`The word "${word}" ${se.includes(word) ? "is" : "is not"} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.

// trim() 메서드는 문자열 양 끝의 공백을 제거
const greeting = "   Hello world!   ";
console.log(greeting); // expected output: "   Hello world!   ";
console.log(greeting.trim()); // expected output: "Hello world!";

//split(separator, limit) 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈 "배열"을 반환
const str21 = "The quick brown fox jumps over the lazy dog.";
const words = str21.split(" ");
console.log(words); // expected output: ['The','quick','brown','fox','jumps','over','the','lazy','dog.']
const chars = str21.split("");
console.log(chars[8]); // expected output: "k"
const strCopy = str21.split();
console.log(strCopy); // expected output: Array ["The quick brown fox jumps over the lazy dog."]

// slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
// 구문 : str.slice(beginIndex[, endIndex])
const str10 = "The quick brown fox jumps over the lazy dog.";
console.log(str10.slice(31)); // expected output: "the lazy dog."
console.log(str10.slice(4, 19)); // expected output: "quick brown fox"
console.log(str10.slice(-4)); // expected output: "dog."
console.log(str10.slice(-9, -5)); // expected output: "lazy"

// toLowerCase() 메서드는 문자열을 소문자로 변환해 반환
// toUpperCase() 메서드는 문자열을 대문자로 변환해 반환
const sentence3 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence3.toUpperCase()); // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
console.log(sentence.toLowerCase()); // expected output: "the quick brown fox jumps over the lazy dog."

// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
// 구문: str.repeat(count);
console.log("abc".repeat(3)); // 'abcabc'

// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다. -- 제대로하기
// 구문 : str.match(regexp)

//replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
// 구문 : var newStr = str.replace(regexp|substr, newSubstr|function)
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
console.log(str);
console.log(newstr); // Twas the night before Christmas...
