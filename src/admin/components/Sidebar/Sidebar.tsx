import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div
        style={{
          minHeight: "calc(100vh - 75px)",
          borderRight: "1px solid lightgrey",
          width: "200px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
              <Link
                to="/admin/main"
                style={{ textDecoration: "none", color: "black" }}
              >
                문의내역
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
