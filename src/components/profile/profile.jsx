import React from "react";
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";



const Profile = (props) => {
    return (
        <main className="main">
            <ProfileInfo/>
            <MyPost PostData ={props.ProfilePage.PostData}

                    newPostText = {props.ProfilePage.newPostText}
                    addPost = {props.addPost}
                    updateNewPostText ={props.updateNewPostText}


            />

        </main>
    );

};
export default Profile;

