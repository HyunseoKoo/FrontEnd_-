const callback = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      number = number + 1;
      if (number < 5) return resolve(number);
      reject('err');
    }, 3000);
  });

// async function asyncAddNubmer(number) {}  동일. => this를 사용할꺼면 요거 쓰면되고, this 안쓰고 가독성 높이려면 아래 사용
const asyncAddnumber = async (number) => {
  /*
    try{
        ... 실패할 수도 있는(에러가 날 수도 있는 실행문)
    } catch (err) {
        ... 에러처리
        console.error(err)
    }
    */

  //   try {
  const result = await callback(number);
  console.log(result); //4  => 비동기(async 자체가 promise형태이기 때문에). callback함수의 셋타임아웃 3초가 지난후에 console.log(result)를 실행하게 됨.
  // 비동기함수를 동기처리함. (순차적으로 실행되게 바꾼 것!)
  // throw new Error(result);
  // 나 여기서 에러 해결못하기 때문에 상위 에러 처리 시스템으로 넘기는 것 (내 상위에 에러를 해결할수 있는 무언가가 있을때 사용, 코드 중복 방지..?)
  const result2 = await callback(result); // try를 쓰지않는다면 콘솔창에 에러 발생했다고 뜸. try는 에러발생하지 않도록, 실패할 수도 있는 실행문의 reject값을 보여줌.
  console.log(result2, 123); // try처리하여 결과값 ? err
  //   } catch (err) {
  //     console.log(err, 123); // try문장에서 에러 잡힌걸 받아서 해결을 해주는 친구
  //     // throw 하면 또 다시 상위로 던지는 것. console.log하는것과 차이가 없음(?)
};
// };

asyncAddnumber(3).catch((err) => {
  console.log(err);
});
