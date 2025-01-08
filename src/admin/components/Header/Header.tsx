import React from "react";
import logo from "../../../assets/img/ml_logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate(); // React Router v6의 useNavigate 사용
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "75px",
        backgroundColor: "lightgrey",
        alignItems: "center",
      }}
    >
      <div>헤더로고</div>
      <label
        style={{
          fontWeight: "bold",
          color: "white",
          cursor: "pointer",
          marginRight: "20px",
        }}
        onClick={() => navigate("/admin")}
      >
        로그아웃
      </label>
    </div>
  );
};
export default Header;
