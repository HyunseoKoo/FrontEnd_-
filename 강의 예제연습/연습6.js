// set [ => 중복을 허용하지 않는 값을 모아놓은 특별한 객체]
const arr = ['arr', 'arr', 'arr', 'set', 'set', 'map'];
let set = new Set(arr);
console.log(set); // Set(3) { 'arr', 'set', 'map' }

set.add('현서').add('성원');
console.log(set); // Set(5) { 'arr', 'set', 'map', '현서', '성원' }

console.log(set.size); // 5
console.log(set.delete('현서')); // ture
console.log(set); //Set(4) { 'arr', 'set', 'map', '성원' }
console.log(set.delete('현서')); // false
console.log(set); // Set(4) { 'arr', 'set', 'map', '성원' }
console.log(set.has('태기')); // false
// delete와 has의 차이점? 둘다 boolean으로 나타나지만 delete는 해당 값이 있을 경우, 삭제하고 반환함.
console.log(set.keys()); // [Set Iterator] { 'arr', 'set', 'map', '성원' }
console.log(set.values()); // [Set Iterator] { 'arr', 'set', 'map', '성원' }
console.log(set.entries());
/* 이건 뭐지???
[Set Entries] {
  [ 'arr', 'arr' ],
  [ 'set', 'set' ],
  [ 'map', 'map' ],
  [ '성원', '성원' ]
}
*/

// map [ => 키가 있는 데이터를 저장한다는 점에서 객체와 유사, 다만 맵은 키에 문자열이 아닌 다양한 자료형을 허용(객체와 차이점)]
const errMap = new Map([
  [404, '페이지가 없습니다'],
  [500, '서버오류입니다'],
  [401, '권한이 없습니다'],
]);
// 키의 값에 접근하려면 .get이용
console.log(errMap.get(404)); // 페이지가 없습니다.
errMap.set(200, '성공하셨습니다');
console.log(errMap);
/*
Map(4) {
  404 => '페이지가 없습니다',
  500 => '서버오류입니다',
  401 => '권한이 없습니다',
  200 => '성공하셨습니다'
} 
*/
// has(key)
console.log(errMap.has(200)); // ture

// 키를 나타내는 반복문
for (let key of errMap.keys()) {
  console.log(key); // 404 500 401 200
}

// 값을 나타내는 반복문
for (let value of errMap.values()) {
  console.log(value);
}
/* 페이지가 없습니다
서버오류입니다
권한이 없습니다
성공하셨습니다
*/

// 전체를 나타내는 반복문
for (let entry of errMap) {
  console.log(entry); // [key, value]
  console.log(entry[0]); // key
  console.log(entry[1]); // value
}
/* 전체 반복되나, 예시로 하나만 가져옴
[ 200, '성공하셨습니다' ]
200
성공하셨습니다
*/

// 맵 -> 객체
let mapObj = Object.fromEntries(errMap);
console.log(mapObj);
/*
{
  '200': '성공하셨습니다',
  '401': '권한이 없습니다',
  '404': '페이지가 없습니다',
  '500': '서버오류입니다'
}
*/

// 객체 -> 맵
const errobj = {
  404: '페이지가 없습니다',
  500: '서버 오류',
  400: '사용자 오류',
  401: '권한 오류',
};

let map = new Map(Object.entries(errobj));
console.log(map);
/*
Map(4) {
  '400' => '사용자 오류',
  '401' => '권한 오류',
  '404' => '페이지가 없습니다',
  '500' => '서버 오류'
}
*/

// 삼항연산자
let num = 7;
const a = num === 7 ? '칠' : '칠 아니지롱';
console.log(a); // 칠

// const b = errMap.map.has(401) == true ? '맞아' : '아니야';
// console.log(b);      왜 안되지??

const students = {
  이주람님: 27,
  장영승님: 28,
  구현서님: 28,
};

const { 이주람님, 장영승님, 구현서님: 현서나이 } = students;
console.log(이주람님, 장영승님, 현서나이);
// 27 28 28

const hyunseo = {
  무엇을: '개발공부',
  왜: '취업하려고',
  어떻게: '열심히',
};

const printHyunseo = ({ 무엇을, 왜, 어떻게 }) => {
  console.log(`현서는 ${왜} ${어떻게} ${무엇을} 중입니다.`);
};
printHyunseo(hyunseo);
// 현서는 취업하려고 열심히 개발공부 중입니다.
