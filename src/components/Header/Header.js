import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className="header_img"
        src="https://www.freepnglogos.com/uploads/castle-png/castle-transparent-background-2.png"
      />
      <span className={s.siteName}>SOCIAL NETWORKING</span>
      <div className={s.loginBlock} >
        {props.isAuth ? props.login
        :<NavLink className={s.Login}  to = {'/login'} >Login</NavLink>}
        </div>
    </header>
  );
};

export default Header;
