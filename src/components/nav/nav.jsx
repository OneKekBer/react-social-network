import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";

import Friends from "./Friends/Friends";

const Nav = (props) => {
    return (
        <nav className={s.container}>
            <div className={s.list}>
                <NavLink to='/profile' className={s.item}>profile</NavLink>
                <NavLink to='/dialogs' className={s.item}>messages</NavLink>
                <NavLink to='#' className={s.item}>news</NavLink>
                <NavLink to='#' className={s.item}>music</NavLink>
                <NavLink to='#' className={s.item}>settings</NavLink>
            </div>


            <Friends FriendsData={props.state.FriendsData}/>
        </nav>
    )
}
export default Nav;