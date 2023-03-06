function Register() {
  return (
    <div>
      <div>
        <div id="logo"></div>
        <p id="title">회원가입</p>
        <div>
          <form>
            <input id="userId" type="text" />
            <input id="userPw" type="password" />
            <input id="userPwc" type="password" />
            <input id="userEmail" />
            <button>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
