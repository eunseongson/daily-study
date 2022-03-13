const loginForm = document.querySelector('#login-form') // 로그인 폼 id 불러오기
const loginInput = document.querySelector('#login-form input') // 로그인 input data 받아오기
const greeting = document.getElementById('greeting') // h1 데이터 불러오기

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'
function onLoginSubmit(e) {
  // 로그인 버튼 클릭하였을 때
  e.preventDefault() // 초기 새로고침 실행 x
  const username = loginInput.value // username(input값) 저장
  localStorage.setItem(USERNAME_KEY, username) // localstorage에 username저장(작은 DB)
  loginForm.classList.add(HIDDEN_CLASSNAME) // loginform hidden 속성 적용
  getGreeting(username) // username 함수 실행
}

const savedUserName = localStorage.getItem(USERNAME_KEY) // localstorage에 username 받아옴

function getGreeting(username) {
  // username 호출 함수
  greeting.innerText = `Hello ${username}` // greeting(h1태그)에 Text 넣어줌
  greeting.classList.remove(HIDDEN_CLASSNAME) // greeting에 hidden속성 제거(보여주기)
}

if (savedUserName === null) {
  // 만약 localstorage에 값이 없다면
  loginForm.classList.remove(HIDDEN_CLASSNAME) // input 로그인 폼에서 hidden 속성 제거
  loginForm.addEventListener('submit', onLoginSubmit) // login폼에 submit 이벤트 추가
} else {
  // 만약 localstorage에 값이 있다면
  getGreeting(savedUserName) // greeting함수 실행
}
