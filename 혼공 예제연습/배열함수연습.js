/*
배열 내장함수 (기본)
  length
  push
  pop
  shift
  unshif
  splice
  slice
  concat
  indexOf
  join
  includes
  sort
  reverse

배열 고차함수
   map
   filter
   find
   findIndex
   reduce
------------------------
이터러블한 오브젝트
   forEach
   for in
   for of

배열생성
   Array.from
   Array.fill
*/

// 다음 배열에서 400, 500을 삭제하는 code를 입력하시오.
let nums = [100, 200, 300, 400, 500];

nums.pop(400);
nums.pop(500);
console.log(nums);
