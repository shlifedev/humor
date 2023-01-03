import scss from "./index.module.scss";
export const Login = () => {
  return (
    <div className={scss.container}>
      <header>
        <div className={scss.logo}>
          Dev Humor
        </div>
        <p>건전한 커뮤니티를 위해 초대장을 통해 가입해야 합니다.</p>
      </header>
      <div className={scss.wrap}>
        <h2 className="">로그인</h2>
        <div
          className={[scss.row, scss.socialWrap].join(" ")}
          aria-label="소셜 로그인 선택"
        >
          <a
            href="#"
            aria-label="카카오 로그인"
            className={[scss.loginBtn, scss.kakao].join(" ")}
          >
            카카오 로그인
          </a>
          <a
            href="#"
            aria-label="페이스북 로그인"
            className={[scss.loginBtn, scss.facebook].join(" ")}
          >
            페이스북 로그인
          </a>
        </div>

        <div className={[scss.row, scss.emailWrap].join(" ")}>
          <h2>
            이메일 로그인 
          </h2>
          <form action="">
            <input type="text" placeholder="이메일 주소"></input>
            <input type="text" placeholder="비밀번호 주소"></input>
            <button type="submit" className={scss.loginBtn}> 이메일 로그인 </button>
          </form>
        </div>
      </div>
    </div>
  );
};
