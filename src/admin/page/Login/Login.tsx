import React from "react";
import styles from "./Login.module.scss";
import logo from "../../../assets/img/ml_sm_logo.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const naviagate = useNavigate();
  const handleLogin = () => {
    naviagate("/admin/inboundList");
  };
  return (
    <div className={styles.container}>
      <form className={styles["login-form"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="마케팅레버리지 로고" />
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
        <button
          type="submit"
          className={styles["login-button"]}
          onClick={() => handleLogin()}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
