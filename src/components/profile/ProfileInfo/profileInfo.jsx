import React from "react";

import s from "./profileInfo.module.css";
const ProfileInfo = () => {
    return (
        <main className="main">
            <div className={s.img}></div>
            <div className={s.info}>
                <img
                    className={s.info_logo}
                    src="https://th.bing.com/th/id/R.94fb77ea8792301125b8ca604ed4c3e9?rik=MrxSCyEj01wCgw&pid=ImgRaw&r=0"
                    alt="ava"
                />
                <div className={s.info_text}>
                    <h2>Ilya</h2>
                    <p>16 years old</p>
                    <p>dead inside</p>
                    <p>1000-7</p>
                    <p>freelancer</p>
                </div>
            </div>
        </main>
    );
};
export default ProfileInfo;
