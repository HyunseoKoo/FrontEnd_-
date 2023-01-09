const arr1 = ['banana', 'apple', 'orange'];
arr1.sort();
// 원본 변경(훼손)
console.log(arr1); // [ 'apple', 'banana', 'orange' ]

// 오름차순
const arr2 = [1, 7, 11, 25, 542, 511, '현서', '성원', 'apple', 'orange', 3324231, 324234];
// 그냥 .sort() 하면 제대로 오름차순 X. (유니코드기준)
console.log(arr2.sort()); // [1, 11, 25, 324234, 3324231, 511, 542, 7, 'apple', 'orange', '성원', '현서']
arr2.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
console.log(arr2); // [ 1, 7, 11, 25, 511, 542, 324234, 3324231, 'apple', 'orange', '성원', '현서' ]

// 내림차순1
arr2.reverse();
console.log(arr2); // ['현서', '성원', 'orange', 'apple', 3324231, 324234, 542, 511, 25, 11, 7, 1 ]

// 내림차순2
arr2.sort((a, b) => {
  if (a > b) return -1;
  if (a === b) return 0;
  if (a < b) return 1;
});
console.log(arr2); // ['현서', '성원', 'orange', 'apple', 3324231, 324234, 542, 511, 25, 11, 7, 1 ]

// join 배열의 내장함수
const arr3 = [1, 2, 3, 4];
console.log(arr3); // [ 1, 2, 3, 4 ]

const 하이픈 = arr3.join('-');
console.log(하이픈); // 1-2-3-4

const 콜론 = arr3.join(';');
console.log(콜론); // 1;2;3;4

const 공백 = arr3.join('');
console.log(공백); // 1234

const 쉼표 = arr3.join(',');
console.log(쉼표); // 1,2,3,4

const mapArr = [1, 2, 3, 4, 5];

for (let i = 0; i < mapArr.length; i++) {
  console.log(mapArr[i]);
}

const Posts = [
  {
    id: 1,
    content: 'content1',
    title: 'title1',
  },
  {
    id: 2,
    content: 'content2',
    title: 'title2',
  },
  {
    id: 3,
    content: 'content3',
    title: 'title3',
  },
];

const postIndex = Posts.findIndex((el) => el.id === 1);
console.log(Posts[postIndex].content); // content1

console.log(Posts[2]); // { id: 3, content: 'content3', title: 'title3' }

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numArr.reduce((sum, n) => {
  return sum + n;
});
console.log(result); // 55

let resultArr = [];

numArr.reduce((sum, n) => {
  resultArr.push(sum + n);
  return sum + n;
});
console.log(resultArr); // [ 3,  6, 10, 15, 21, 28, 36, 45, 55]

// for in문 [ => 순회 가능하지 않은 객체도 사용할 수 있는 반복문 ]
let obj = {
  name: '구현서',
  age: 28,
  height: 166,
};
for (const key in obj) {
  console.log(obj[key]);
} // 구현서 28 166

let obj2 = ['구현서', 28, 166]; // => 배열 또한 객체이기 때문에 배열에서도 사용 가능.
for (const key in obj2) {
  console.log(obj2[key]);
} // 구현서 28 166

// for each문 [=> 순회 가능한 객체에서 사용할수있는 반복문 ex) 배열, map, set..?]
//  => .forEach((요소,인덱스,원본배열)) 괄호안에 순서 고정!
const arr = ['이충초', '효명중', '수원외고', '중앙대'];
arr.forEach((el, index, arr) => {
  console.log(el, index, arr);
});
/*
이충초 0 [ '이충초', '효명중', '수원외고', '중앙대' ]
효명중 1 [ '이충초', '효명중', '수원외고', '중앙대' ]
수원외고 2 [ '이충초', '효명중', '수원외고', '중앙대' ]
중앙대 3 [ '이충초', '효명중', '수원외고', '중앙대' ]
*/

let arr4 = [10, 11, 13, 15, 17, 20];
for (let i = 1; i < 7; i++) {
  console.log(arr4[i - 1]);
} // 10 11 13 15 17 20

// for of문 [ => 반복문에서 인덱스 번호가 필요 없고, 증감식이 필요없이 "전체"를 순회해야한다면 사용]
for (const el of arr4) {
  console.log(el);
} // 10 11 13 15 17 20

// Array
// 인자로 전달 받은 유사배열객체를 배열화 시킨다
//                  ----------- : 객체인데 키값으로 배열의 속성을 가지고 있음.
const obj3 = new Object();
obj3.length = 2;
obj3[0] = '딸기';
obj3[1] = '사과';
console.log(obj3); // { '0': '딸기', '1': '사과', length: 2 }

// Arr.from() [ => 유사 배열 객체를 실제 배열화 ]
const family = Array.from({ length: 2, 0: '현서', 1: '성원' });
console.log(family); // [ '현서', '성원' ]
// 유사 배열 객체의 콜백함수가 return하는 값으로 배열을 만든 것
const family2 = Array.from({ length: 2 }, (el, index) => {
  // el, index 순서 고정!
  return index;
});
console.log(family2); // [0, 1]

// Arr.of() [ => 인자를 요소로 삼는 배열을 생성]
const ofArr = Array.of('사과', '배', '오렌지');
console.log(ofArr); // [ '사과', '배', '오렌지' ]

// Arr(요소갯수).fill(요소, 시작인덱스, 요소를 넣을 인덱스의 직후 인덱스)
const fillArr = Array(6).fill(2, 3, 5);
console.log(fillArr); // [ 0, 0, 0, <7 empty items> ]

const fillArr2 = Array(10)
  .fill()
  // map의 콜백함수 매개변수는 el(요소), index(인덱스)
  .map((item, index) => {
    return index + 1;
  });
console.log(fillArr2); // [1,2,3,4,5,6,7,8,9,10]

// filter
// 조건식을 만족하는 값을 return하고 해당 값을 새로운 배열로 반환
const filterArr = [1, 2, 3, 4, 4, 5];
const newFilterArr = filterArr.filter((el) => el !== 4);
console.log(newFilterArr); // [1,2,3,5]
