import "./styles/Menu.scss";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";

interface Props {
  hamburgerMenu: boolean;
  setFalse: () => void;
}

const Menu: FC<Props> = ({ hamburgerMenu, setFalse }) => {
  return (
    <div className={"menu " + (hamburgerMenu && "active")}>
      <ul>
        <li onClick={() => setFalse()}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setFalse()}>
          <NavLink to="/add"> Add Customer</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
