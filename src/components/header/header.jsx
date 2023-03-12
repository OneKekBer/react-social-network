import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import Nav from "../nav/nav";
const Header = (props) =>{
    return(
        <header className={s.header}>
        <img
          className={s.logo}
          src="https://th.bing.com/th/id/R.9b56abdfcf6da4438014dd4d4eeaeabf?rik=ViIpqCDGSMfn1Q&pid=ImgRaw&r=0"
          alt="logo"
        />
            <div className={s.login__container}>
                { props.isAuth ? <NavLink to={'/login'} className={s.login__text}>Login</NavLink>
                    : <NavLink to={'/reg'}>Registr</NavLink>

                }
            </div>
            <h1>Only Friends</h1>
      </header>
    );
}
export default Header;