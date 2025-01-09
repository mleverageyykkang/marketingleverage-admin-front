import React from "react";
import logo from "../../../assets/img/ml_logo.png";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const navigate = useNavigate(); // React Router v6의 useNavigate 사용
  return (
    <div className={styles["header-container"]}>
      <div>
        <img src={logo} alt="헤더로고고" />
      </div>
      <label onClick={() => navigate("/admin")}>로그아웃</label>
    </div>
  );
};
export default Header;
