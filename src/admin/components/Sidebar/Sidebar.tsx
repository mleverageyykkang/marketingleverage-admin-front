import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/ml_logo.png";

interface Route {
  path: string;
  name: string;
}
interface SidebarProps {
  routes: Route[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  return (
    <div>
      <div className={styles["sidebar-container"]}>
        <div>
          <img src={logo} alt="헤더로고" />
        </div>
        <nav>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["sidebar-link"]} ${styles["active"]}`
                      : styles["sidebar-link"]
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
