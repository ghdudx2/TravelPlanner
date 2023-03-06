function Login() {
  return (
    <div>
      <div id="wrap">
        <div id="logo"></div>
        <p id="title">로그인</p>
        <div>
          <form>
            <input type="text" id="userId" placeholder="아이디를 입력해주세요" />
            <input type="password" id="userPw" placeholder="비밀번호를 입력해주세요" />
            <button id="submitBtn">로그인</button>
          </form>
          <p>회원가입</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
