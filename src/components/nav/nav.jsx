import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";


import Friends from "./Friends/Friends";
import storeContext from "../../storeContext";

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

            <storeContext.Consumer>
                {
                (store) =>{
                    return(
                        <Friends FriendsData={store.getState().SideBar.FriendsData}/>
                    )
                }
            }
            </storeContext.Consumer>

        </nav>
    )
}
export default Nav;