### week-3 배포 링크 : https://linkbrary-tina.netlify.app

#### ❓질문
- 로그인/회원 가입 창에서 인풋박스에서 alert창이 뜰 경우 가끔 엔터를 눌러도 닫히지 않고 계속 뜨는 현상이 생기는데 이유를 모르겠습니다😥

#### 필수 요구사항(전체)
- [x] 로고 클릭시 루트 페이지(“/”)로 이동해야 합니다.
- [x] 로그인 페이지, 회원가입 페이지 모두 로고위 상단 여백이 동일해야 합니다.
- [x] input 요소에 focus in 일 때, input 안에 문자열은 검정색이어야 하고, 파랑색 테두리가 생겨야 합니다.
- [x] input 요소에 focus out 일 때, input 안에 문자열과 테두리는 회색이어야 합니다.
- [x] SNS 아이콘들은 클릭 가능함을 확인할 수 있고, 클릭시 각각 “https://www.google.com/”, “https://www.kakaocorp.com/page/” 으로 이동합니다.)

#### 필수 요구사항(로그인페이지)
- [x] 회원 가입하기는 클릭 가능함을 확인할 수 있고, 클릭시 “/signup” 페이지로 이동합니다.
- [x] 이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
- [x] 이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다.
- [x] 이메일: ```test@codeit.com```, 비밀번호: ```codeit101``` 으로 로그인 시도할 경우, “/my-link” 페이지로 이동합니다.
- [x] 이외의 로그인 시도의 경우, “이메일과 비밀번호를 확인해주세요.” 메세지가 담긴 alert 을 띄워 주세요.
- [x] 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
- [x] 비밀번호 찾기는 클릭 가능함을 확인할 수 있고, 클릭시 “/forgot-password” 페이지로 이동합니다.

#### 필수 요구사항(회원가입 페이지)
- [x] 로그인 하기는 클릭 가능함을 확인할 수 있고, 클릭시 “/signin” 페이지로 이동합니다.
- [x] 이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
- [x] 이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다.
- [x] 이메일 input에서 focus out 일 때, input 값이 ```test@codeit.com``` 일 경우, alert으로 “이미 사용 중인 아이디입니다.” 메세지를 보입니다.
- [x] 비밀번호 input에서 focus out 일 때, 값이 없거나 문자열만 있거나 숫자만 있는 경우, alert으로 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 메세지를 보입니다.
- [x] 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 부분을 alert 메세지로 알립니다.
- [x] 이외의 유효한 회원가입 시도의 경우, “/my-link”로 이동합니다.
- [x] 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.

#### 필수 요구사항(모바일 크기)
- [x] 375px 보다 작은 크기의 기기는 고려하지 않습니다.
- [x] 좌우 여백 32px 제외하고 내부 요소들이 너비를 모두 차지합니다.
- [x] 내부 요소들의 너비는 기기의 너비가 커질수록 커지지만 400px을 넘지 않습니다.

#### 선택 요구사항(전체)
- [x] 비밀번호 input 요소에 비밀번호를 확인할 수 있는 아이콘을 추가합니다.
- [x] 비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
