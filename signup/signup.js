const $togglePasswordIcon = document.querySelector(".toggle-password");
const $togglePasswordVerifyIcon = document.querySelector(".toggle-password-verify");
const $userEmailInput = document.querySelector(".userEmail");
const $userPasswordInput = document.querySelector(".userPassword");
const $userPasswordVerifyInput = document.querySelector(".userPassword-verify");
const $signupForm = document.querySelector("#signup-form");

//비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
function togglePassword(e) {
  e.preventDefault();
  const icons = e.target.parentNode.children;
  const input = e.target.closest('div').querySelector('input');

  for(let i = 0; i<icons.length; i++){
      icons[i].classList.toggle('hide')
  }

  if (input.type === "password") {
      input.type = "text";
  } else {
      input.type = "password";
  }
}

/* 1.이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
   2.이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다. 
   3.이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우, alert으로 “이미 사용 중인 아이디입니다.” 메세지를 보입니다.*/
function verifyEmail(e) {
  let target = e.target.value;
  let regex = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  if (!target) {
    alert("이메일을 입력해주세요.");
  } else if (target === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!regex.test(target)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

//비밀번호 input에서 focus out 일 때, 값이 없거나 문자열만 있거나 숫자만 있는 경우, alert으로 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 메세지를 보입니다.
function verifyPassword(e) {
  let target = e.target.value;
  let regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (!regex.test(target) && !$togglePasswordIcon.contains(e.relatedTarget)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
}

//회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 부분을 alert 메세지로 알립니다.
function verifysignupForm(e) {
  e.preventDefault();

  let email = $userEmailInput.value;
  let password = $userPasswordInput.value;
  let passwordVerify = $userPasswordVerifyInput.value;

  let regexEmail = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  let regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (!email) {
    alert("이메일을 입력해주세요.");
  } else if (email === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!regexEmail.test(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (!regexPassword.test(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if(password !== passwordVerify){
    alert("비밀번호 확인이 일치하지 않습니다.");
  } else {
    location.href = "../my-link/my-link.html";
  }
}

$togglePasswordIcon.addEventListener("click", togglePassword);
$togglePasswordVerifyIcon.addEventListener("click", togglePassword);
$userEmailInput.addEventListener("focusout", verifyEmail);
$userPasswordInput.addEventListener("focusout", verifyPassword);
$signupForm.addEventListener("submit", verifysignupForm);
