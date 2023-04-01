import React from "react";
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <main className="main">
            <ProfileInfo status={props.status} updateStatus={props.updateStatus}  profile={props.profile}/>
            <MyPostContainer store={props.store}

            />

        </main>
    );

};
export default Profile;

