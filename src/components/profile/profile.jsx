import React from "react";
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <main className="main">
            <ProfileInfo/>
            <MyPostContainer store={props.store}

            />

        </main>
    );

};
export default Profile;

