import React from "react";
import styles from "./Login.module.scss";
import logo from "../../../assets/img/ml_sm_logo.png";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles["login-form"]}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="" />
        </div>
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
