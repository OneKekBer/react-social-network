import React from "react";
import s from './Friend.module.css'


const Friend = (props) => {
    return (
        <div className={s.block}>
            <img className={s.img}
                src={props.avatar}
                alt="ava"/>
            <a href="#">{props.name}</a>
        </div>
    )
}
export default Friend;