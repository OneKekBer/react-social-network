import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {

    return (

        <header className={s.header}>

            <img
                className={s.logo}
                src="https://th.bing.com/th/id/R.9b56abdfcf6da4438014dd4d4eeaeabf?rik=ViIpqCDGSMfn1Q&pid=ImgRaw&r=0"
                alt="logo"
            />
            <div>
                {props.isAuth
                    ?
                    <div className={s.login__text}>
                        {props.login}
                        <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink className={s.login__text} to={'/login'}>Login</NavLink>
                }
            </div>
            <h1>Only Friends</h1>
        </header>
    );
}
export default Header;