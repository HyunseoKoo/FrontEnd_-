/* axios
axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
쉽게 말해서, 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용
이미 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할땐 axios를 쓰는 편
(fetch와 비슷하지만 확장성을 염두했을땐 axios가 유리)

https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9 참조

axios 장점
커스텀 인스턴스
요청을 취소하는 cancelToekn
인터셉터 => 네트워크 상태가 좋지 않을 경우 공통된 로직을 만들어 마치 미들웨어처럼 넣을수 있음.
 axios.interceptors.request.use(config=>{})
쉬운 참조 가능

axios 특징
1. 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
2. Promise API 사용
3. 요청과 응답 데이터의 변형
4. HTTP 요청 취소
5. HTTP 요청과 응답을 JSON 형태로 자동 변경 (key, value)
 */

//-------------------------------------------------------------------------------------------------

// axios 문법 구성
axios({
  url: 'https://jsonplaceholder.typicode.com', // 통신할 웹문서
  method: 'get', // 통신할 방식
  data: {
    // 인자로 보낼 데이터
    foo: 'diary',
  },
});

/* axios 요청(request) 파라미터 옵션

method : 요청방식. (get이 디폴트)
url: 서버 주소
headers: 요청 헤더
data: 요청 방식이 'PUT', 'POST', 'PATCH' 해당하는 경우 body에 보내는 데이터
params: URL 파라미터 (?key=value로 요청하는 url get 방식을 객체로 표현한 것)
response Type: 서버가 응답해주는 데이터의 타입 지정(arraybuffer, document, json, text, stream, blob)
withCredentials : cross-site access-control 요청을 허용 유무. 이를 true로 하면 cross-origin으로 쿠키값을 전달 할 수 있다.
*/

// axios 파라미터 문법 예시
axios({
  method: 'get', // 통신 방식
  url: 'www.naver.com', // 서버
  headers: { 'X-Requested-With': 'XMLHttpRequest' }, // 요청 헤더 설정
  params: { api_key: '1234', langualge: 'en' }, // ?파라미터를 전달
  responseType: 'json', // default
  maxContentLength: 2000, // http 응답 내용의 max 사이즈
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  }, // HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l',
    },
  }, // proxy서버의 hostname과 port를 정의
  maxRedirects: 5, // node.js에서 사용되는 리다이렉트 최대치를 지정
  httpsAgent: new https.Agent({ keepAlive: true }), // node.js에서 https를 요청을 할때 사용자 정의 agent를 정의
}).then(function (response) {
  // response Action
});

//-------------------------------------------------------------------------------------------------

/* axios 응답(response) 데이터
axios를 통해 요청을 서버에게 보내면, 서버에서 처리를하고 다시 데이터를 클라이언트에 응답 하게 된다.
이를 .then으로 함수인자로(response)로 받아 객체에 담긴 데이터가 바로 응답 데이터.
*/

axios({
  method: 'get', // 통신 방식
  url: 'www.naver.com', // 서버
}).then(function (response) {
  console.log(response.data); //     {}, // 서버가 제공한 응답(데이터)
  console.log(response.status); //    200, // `status`는 서버 응답의 HTTP 상태 코드
  console.log(response.statusText); //    'OK',  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지
  console.log(response.headers); //     {},  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공
  console.log(response.config); //   {}, // `config`는 요청에 대해 `axios`에 설정된 구성(config)
  console.log(response.request);
});
// response.request: {}
// `request`는 응답을 생성한 요청
// 브라우저: XMLHttpRequest 인스턴스
// Node.js: ClientRequest 인스턴스(리디렉션)

//-------------------------------------------------------------------------------------------------
/* Aixos 단축 메소드

axios 요청 메소드 - 객체 옵션을 이것저것 주면 가독성이 떨어져, 함수형으로 재구성하여 나눠논 것.
1. axios.get(url[, config])
2. axios.delete(url[, config])
3. axios.post(url,[,data[,config]])
4. axios.put(url,[,data[,config]])
5. axios.patch(url[,data[,data[config]]])
*/

/* 1. [axios GET] - get 메서드에는 2가지 상황이 크게 존재
1) 단순 데이터(페이지 요청, 지정된 요청) 요청을 수행할 경우
2) 파라미터 데이터를 포함시키는 경우 (사용자 번호에 따른 조회)
*/
const axios = require('axios'); // node.js쓸때 모듈 불러오기

// user에게 할당된 id 값과 함께 요청을 합니다.
axios
  .get('/user?ID=12345')
  .then(function (response) {
    // 성공했을 때
    console.log(response);
  })
  .catch(function (error) {
    // 에러가 났을 때
    console.log(error);
  })
  .finally(function () {
    // 항상 실행되는 함수
  });

// 위와는 같지만, 옵션을 주고자 할 때는 이렇게 요청을 합니다.
axios
  .get('/user', {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// async/await 를 쓰고 싶다면 async 함수/메소드를 만듭니다.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// 2. [axios POST] - 일반적으로 데이터를 Message Body에 포함시켜 보낸다.

axios
  .post('url', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  })
  .then(function (response) {
    // response
  })
  .catch(function (error) {
    // 오류발생시 실행
  });

// 3. [axios Delete] - 일반적으로 body가 비어있고, rest 기반 api 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용
axios
  .delete('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// 4. [axios PUT] - REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 갱신(수정)하는 목적으로 사용
// PUT메서드는 서버에 있는 데이터베이스의 내용을 변경하는 것을 주 목적.
axios
  .put('url', {
    username: '',
    password: '',
  })
  .then(function (response) {
    // response
  })
  .catch(function (error) {
    // 오류발생시 실행
  });
