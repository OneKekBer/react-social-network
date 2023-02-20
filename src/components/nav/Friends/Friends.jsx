import React from "react";
import s from './Friends.module.css'

import Friend from "./Friend/Friend";


const Friends = (props) => {
    let FriendElement = props.FriendsData
        .map(f => <Friend name={f.name} avatar={f.avatar} id={f.id}/>)
    return (

        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friends_container}>
                {FriendElement}

            </div>
        </div>

    )
}
export default Friends;