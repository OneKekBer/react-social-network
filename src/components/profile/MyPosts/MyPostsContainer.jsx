import React from "react";
import storeContext from "../../../storeContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let PostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <MyPosts updateNewPostText={PostChange}
                                 AddPost={addPost}
                                 PostData={state.ProfilePage.PostData}
                                 newPostText={state.ProfilePage.newPostText}

                        />
                    )
                }
            }
        </storeContext.Consumer>)
}

export default MyPostContainer;
