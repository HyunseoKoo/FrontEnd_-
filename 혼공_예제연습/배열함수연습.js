/*
배열 내장함수
  length push pop shift unshift splice slice concat indexOf join includes sort reverse

배열 고차함수
  map filter find findIndex reduce
---------------------------------------------
이터러블한 오브젝트
   forEach
   for in
   for of

배열생성
   Array.from
   Array.fill
*/

// 다은빌라에는 0호실에는 [현서]가 살고 있었는데 0호실에 주람, 1호실에 나실, 2호실에 영승이 이사를 왔습니다. 각 호실을 인덱스로하는 배열에 이사온 사람들의 이름을 추가하시오.
let a = ['현서'];
a.push('주람', '나실', '영승');
console.log(a); // [ '현서', '주람', '나실', '영승' ]

// 0호실과 1호실에 재훈과 혜린이가 이사를 와서 기존 사람들은 방을 다시 옮겼습니다. 각 호실을 인덱스로하는 배열을 다시 구하시오.
a.unshift('재훈', '혜린');
console.log(a); // [ '재훈', '혜린', '현서', '주람', '나실', '영승' ]

// 현재 다은빌라총 몇 사람이 살고 있는지 구하시오.
console.log(a.length); // 6

// 영승이 이사를 가게 되었습니다. 거주민 배열을 다시 구하시오.
a.pop();
console.log(a); // [ '재훈', '혜린', '현서', '주람', '나실' ]

// 재훈이도 이사를 가게 되었습니다. 거주민 배열을 다시 구하시오.
a.shift();
console.log(a); // [ '혜린', '현서', '주람', '나실' ]

// 다은빌라 월세가 올라서 현서와 주람이는 다른 빌라를 알아보기로 했습니다. 현재 이사 의사가 있는 사람들의 배열을 구하시오.
let b = a.slice(1, 3);
console.log(b); // [ '현서', '주람' ]

// 현서와 주람은 결국 이사를 갔습니다. 현재 거주민 배열을 구하시오.
let c = a.splice(1, 2);
console.log(a); // [ '혜린', '나실' ]

// 건물주가 본인이 가진 다른 빌라를 다은빌라 하나로 합치기로 했습니다. 다른 빌라에는 정국이가 살고 있습니다. 합쳐진 다은빌라의 총 거주민 배열을 구하시오.
let d = a.concat('정국');
console.log('배열', d);

// 다은빌라에 새로 이사온 정국이는 자기가 몇호에 살게 될지 궁금해졌습니다. 정국이의 빌라 호수를 인덱스로 구하시오.
console.log(d.indexOf('정국')); // 2

// 건물주가 진이 다은빌라에 살고 있는지 헷갈립니다. 확인해보시오.
console.log(d.includes('진')); // false

// 다은빌라 건물주가 현재 누가 살고 있는지 확인하고자 합니다. &로 연결하여 현 거주민들을 구하시오.
console.log(d.join('&')); // 혜린&나실&정국

// 건물주는 거주민들의 이름을 기준으로 오름차순 정렬하고 싶습니다. 오름차순 정렬을 구하시오.
d.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
console.log(d); // [ '나실', '정국', '혜린' ]

// 건물주는 아래차순으로 정렬하기로 마음으로 바꿨습니다. 내림차순 정렬을 구하시오.
d.reverse();
console.log(d);

// 배열 고차함수

// 배열 [1,10,20] 요소에 각각 10을 더하는 새로운 배열을 만드시오.
let arr = [1, 10, 20];
let arr2 = arr.map(function (el) {
  return el + 10;
});
console.log(arr2); // [ 11, 20, 30 ]

// arr2 중 20이상인 숫자만으로 새로운 배열을 만드시오.
let arr3 = arr2.filter(function (el) {
  return el >= 20;
});
console.log(arr3); // [ 20, 30 ]

// 다음 스파이더맨의 정보를 구하시오.

let hero = [
  { name: '헐크', age: 34 },
  { name: '배트맨', age: 37 },
  { name: '스파이더맨', age: 27 },
  { name: '슈퍼맨', age: 39 },
  { name: '아이언맨', age: 31 },
  { name: '아이언맨2', age: 34 },
];
let spiderman = hero.find(function (el) {
  return el.name === '스파이더맨';
});
console.log(spiderman); // { name: '스파이더맨', age: '27' }

// 나이가 37살인 히어로의 인덱스를 구하시오.
let index = hero.findIndex(function (el) {
  return el.age === '37';
});
console.log(index); // 1

// 히어로들의 총 나이합을 구하시오.
let newArr = [];
for (i = 0; i < hero.length; i++) {
  newArr.push(hero[i].age);
}
console.log(newArr);
let ageReduce = newArr.reduce((el1, el2) => el1 + el2);
console.log(ageReduce);

//////////////////////////////////////////////////////////

const todoList = [
  {
    id: 1,
    title: 'title1',
    content: 'content1',
    state: false,
  },
];

const handleUpdateTodo = (id, content, state) => {
  const newTodoList = [...todoList];

  console.log(newTodoList); // [ { id: 1, title: 'title1', content: 'content1', state: false } ]
  const todo = newTodoList.find((todo) => todo.id === id);

  // todo.content = content;
  // todo.state = state;
};
// console.log(handleUpdateTodo(2, 'content2', 'state2'));

todoList.map((item) => {
  return (todo = { item }); // [리액트]에서 todo는 키, {item}은 값
});
console.log(todoList); // [{ id: 1, title: 'title1', content: 'content1', state: false }];

function Q1() {
  /* 
    문제1
    useState 및 styled-components에 관련한 문제입니다.
    아래 문제를 통해 어떠한 경우 state를 사용해야하는지 고민하여 풀어보세요

    1-1 )
        문제1-1은 input의 value가 placeholder의 값과 같아졌다면
        초록색 글씨로 올바르게 입력하셨습니다가 노출됩니다.

        만약 입력하지 않았다면 올바르게 글을 작성해주세요라는 문구가
        붉은색 글씨로 노출됩니다 */

  const [textState, setTextState] = useState(false);

  const onChangeText = (e) => {
    if (e.target.value == e.target.placeholder) {
      setTextState(true);
      console.log(textState); // false??
    } else setTextState(false);
  };
  console.log(textState);

  /*
    1-2 )
        문제1-2는 보이기 버튼을 누른다면

        button 내부의 텍스트는 숨기기로 바뀌고
        아래 보이는 p태그가 보여야합니다.

        반대로 숨기기 텍스트로 바뀐 button을 누르면
        p태그는 보이지 않아야합니다

  */

  const [buttonState, setButtonState] = useState(false);

  const onShowBtn = (e) => {
    console.log(e.target.innerText); // 보이기
    if (buttonState == false) {
      setButtonState(true);
    }

    console.log(buttonState);
  };

  return (
    <>
      <h1>문제1</h1>
      <div>
        <h2>문제1-1.</h2>
        <input
          type="text"
          placeholder={'김성용'}
          style={{ textAlign: 'center' }}
          onChange={onChangeText}
        />
        <S.Message textState={textState}>
          {textState ? '올바르게 입력하셨습니다' : '올바르게 글을 작성해주세요'}
        </S.Message>
      </div>

      <div>
        <h2>문제1-2. </h2>
        <button onClick={onShowBtn}>보이기</button>
        <p> 이 문구는 보이기 상태일 때만 볼 수 있습니다 </p>
      </div>
    </>
  );
}
export default Q1;

const Message = styled.p`
  color: ${(props) => (props.textState ? 'green' : 'red')};
`;

const S = {
  Message,
};
