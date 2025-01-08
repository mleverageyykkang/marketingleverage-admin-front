import React from "react";
import styles from "./Login.module.scss"; // SCSS 모듈 가져오기

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles["login-form"]}>
        <h2>로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          className={styles["input-field"]}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles["input-field"]}
        />
        <button type="submit" className={styles["login-button"]}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
