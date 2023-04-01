import React from "react";
import user from "../../../assets/img/user.png"
import s from "./profileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import Status from "../Status/ProfileStatus";
const ProfileInfo = (props) => {
    if(!props.profile){
        return <div><Preloader/></div>
    }

    return (
        <main className="main">

            <div className={s.info}>
                <img
                    className={s.info_logo}
                    src={props.profile.photos.small}
                    alt={user}
                />
                <div className={s.info_text}>
                    <h2>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJob ? 'Ищу работу' : 'не ищу работу'}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <p>freelancer</p>
                </div>

            </div>
                <Status status={props.status} updateStatus={props.updateStatus} />
            {/*<div>*/}
            {/*    <ul>*/}
            {/*        <li><a href={props.profile.contacts.facebook}>Facebook</a></li>*/}
            {/*        <li><a href={props.profile.contacts.vk}>VK</a></li>*/}
            {/*        <li><a href={props.profile.contacts.twitter}>twitter</a></li>*/}
            {/*        <li><a href={props.profile.contacts.instagram}>instagram</a></li>*/}
            {/*        <li><a href={props.profile.contacts.vk}>VK</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </main>
    );
};
export default ProfileInfo;
