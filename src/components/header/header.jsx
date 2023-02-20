import React from "react";
import s from './header.module.css';
const Header = () =>{
    return(
        <header className={s.header}>
        <img
          className={s.logo}
          src="https://th.bing.com/th/id/R.9b56abdfcf6da4438014dd4d4eeaeabf?rik=ViIpqCDGSMfn1Q&pid=ImgRaw&r=0"
          alt="logo"
        />
            <h1>Only Friends</h1>
      </header>
    );
}
export default Header;