// 타입변환//
let x = 10;
let str = x.toString();
console.log(typeof str); // string
console.log(typeof x); // number
// str은 10이라는 숫자타입의 변수를 문자열로 반환하여 담은 변수
// .toString을 이용해서 타입변환 하더라도 x의 원래 타입은 변하지 않음.

let y = 10 + '';
console.log(typeof y); // string
// 암묵적 타입 변환(강제 타입 변환)
// + ''로 인해 10이 스트링이 되어버림(?)

console.log(1 + '2'); // 12
console.log(1 - '1'); // 0
console.log(1 * '10'); // 10
console.log('10' / 1); // 10
console.log('10' % 3); // 1
// '숫자'일 경우 +일때만 문자열 타입이 됨. 그외 사칙연산은 '숫자'가 숫자 타입.

// 숫자형 (Number 와 parseInt 차이점)
let num = Number('1234');
console.log(typeof num, num); // number 1234

let num2 = parseInt('1234');
console.log(typeof num2, num2); // number 1234

// 둘다 숫자형으로 바꿔주지만, 문자열('1000원')이 숫자로 시작하는 경우 Number는 NaN이 찍힘.
let num3 = Number('1000원');
console.log(typeof num3, num3); // number NaN

let num4 = parseInt('1000원');
console.log(typeof num4, num4); // number 1000

// 둘다 숫자형으로 바꿔주지만, parseInt는 문자열('10.123')이 소수점인 경우 정수만 뽑아서 표시.
let num5 = Number('10.123');
console.log(typeof num5, num5); // number 10.123

let num6 = parseInt('10.123');
console.log(typeof num6, num6); // number 10

let num7 = Number(true);
console.log(typeof num7, num7); // number 1

// 불리언형
let boo1 = Boolean(1);
console.log(typeof boo1, boo1); // boolean true

let boo2 = Boolean('1234');
console.log(typeof boo2, boo2); // boolean true => 문자열 불리안은 true

// 객체//
// 생성자
let obj = new Object('구현서');
console.log(obj); // [String: '구현서']

let hyunseo = {
  1: '이충초', // 키:값 => 프로퍼티
  2: '효명중',
  3: '수원외고',
  4: '중앙대',
};
console.log(hyunseo['1']); // 이충초    => 객체 접근법 [대괄호 표기법]
console.log(hyunseo); // { '1': '이충초', '2': '효명중', '3': '수원외고', '4': '중앙대' }
hyunseo['4'] = '항주사범대'; // => 키값 변경!
console.log(hyunseo); // { '1': '이충초', '2': '효명중', '3': '수원외고', '4': '항주사범대' }

let Koo = new Object();
Koo['5'] = '중앙대';
Koo['6'] = '퀴네앤드나겔';
Koo['7'] = '쿠팡';
Koo['8'] = '핌아시아';

let hyunseoKoo = Object.assign(hyunseo, Koo);
console.log(hyunseoKoo);
// {
//   '1': '이충초',
//   '2': '효명중',
//   '3': '수원외고',
//   '4': '항주사범대',
//   '5': '중앙대',
//   '6': '퀴네앤드나겔',
//   '7': '쿠팡',
//   '8': '핌아시아'
// }

// 배열 //
// 배열 내장함수
const a = [1, 2, 3, 4, 5];
const newArr = a.slice(2, 3);
console.log(newArr); // [3]

const newArr2 = a.slice(3, 5);
console.log(newArr2); // [4, 5]

// 배열 접근법
const arr = ['현서', '성원', '엄마', '아빠'];
// 특정 인덱스 번호를 알고 있을때 해당 인덱스의 값 알고 싶을때
console.log(arr[0]); // 현서(객체값o, 배열형태x) => arr[인덱스번호]
// 특정 값을 알고 있을때 해당 값의 인덱스 번호 알고 싶을때
console.log(arr.indexOf('성원')); // 1
// 특정 값이 없으면 맨뒤에 추가해라!
if (arr.indexOf('오빠') === -1) {
  arr.push('오빠');
}
// push는 원본 변경
console.log(arr); // [ '현서', '성원', '엄마', '아빠', '오빠' ]
// include도 push랑 비슷!
if (!arr.includes('강아지')) {
  arr.push('강아지');
}
// if (arr.includes('강아지') === false) {
//   arr.push('강아지');
// }
console.log(arr); // [ '현서', '성원', '엄마', '아빠', '오빠', '강아지' ]

// 오빠를 엄마 앞에 넣고 싶어!
// arr.splice(삭제할 인덱스번호, 해당 인덱스부터 삭제할 값 갯수) => 삭제할 값 반환
console.log(arr.splice(4, 1)); // ['오빠']
// splice는 원본 변경
console.log(arr); // [ '현서', '성원', '엄마', '아빠', '강아지' ]
const plus = arr.splice(2, 0, '오빠');
console.log(plus); //[]
console.log(arr); // [ '현서', '성원', '오빠', '엄마', '아빠', '강아지' ]

const hobby = ['요리', '미술', '독서', '산책'];
// hobby.slice(시작인덱스, 삭제할값 직후 인덱스)
const hobby2 = hobby.slice(1, 3);
// 삭제한 값 반환
console.log(hobby2); // [ '미술', '독서' ]
// slice는 원본 변경 X.
console.log(hobby); // [ '요리', '미술', '독서', '산책' ]
console.log(hobby.includes('뜨개')); // false   => ES7 배열의 탑색, 값이 있는지 확인[ture/false]

// 메서드
// fact 키 값의 함수를 메서드라고 부른다!
const printer = {
  fact: function (any) {
    console.log(`${any}는 참 예쁘다`);
  },
};
printer.fact('현서'); // 현서는 참 예쁘다
