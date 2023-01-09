// const로 배열을 선언하였지만 값을 재할당할수 있는 이유?
// 배열은 객체로 힙 메모리에 저장.
// 힙 메모리는 참조 할당으로 특정 값이 아닌, 특정 값이 저장된 주소를 저장하기 때문
// 계속해서 다른 주소값을 저장할수 있음??

const a = { name: '김성용' };
const b = { name: '김성용' };

const c = '김성용';
const d = '김성용';

console.log(a === b);
// false
// 참조에 의한 할당 (메모리 힙의 주소가 저장되는 것)

console.log(c === d);
// true

// 내가 b랑 똑같은 형태의 객체가 필요하다면
const e = b;
console.log(e === b);
// true

e.name = '기성용';
console.log(b); // { name: '기성용' }

// 1. 전개 연산자 [깊은복사..?]
const f = { ...b }; // const arr = [ ...d ]
f.name = '김성용';
console.log(f); // { name: '김성용' }

// 2. Obejct.assign
const newObject = Object.assign({}, b);
console.log(newObject); // { name: '기성용' }

// quizz
function parsePhone(phone) {
  const origin = phone.split('-'); // [ '010', '3353', '7844' ]
  origin[1] = '*'.repeat(origin[1].length); // ****
  console.log(origin.join('-'));
}
parsePhone('010-3353-7844');

// 아웃풋 : 휴대폰 가운데 4자리 숫자를 *으로 대체
// 1. 하이푼 기준으로 번호를 3덩어리로 쪼갠다. => split 사용 [.slit('기점으로 덩어리로 나눌 문자')]
// 2. 가운데 4자리수 객체에 접근하여 *으로 대체 => repeat 사용 ['반복할문자'.repeat(반복할갯수)]
// 3. 중간에 하이푼 넣어주기 => join 사용 [새로 만든 배열.join('-')]
