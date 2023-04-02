import React from "react";

import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";



// const MyPostContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let PostChange = (text) => {
//
//                     }
//                     return (
//                         <MyPosts updateNewPostText={PostChange}
//                                  AddPost={addPost}
//                                  PostData={state.ProfilePage.PostData}
//                                  newPostText={state.ProfilePage.newPostText}
//
//                         />
//                     )
//                 }
//             }
//         </storeContext.Consumer>)
// }


let mapStateToProps = (state) =>{
    return{
        PostData:state.ProfilePage.PostData,
        newPostText:state.ProfilePage.newPostText,


    };
}
let mapDispatchToProps = (dispatch)=>{
    return{
        AddPost: (newPost) =>{

            dispatch(addPost(newPost))
        }
    }


}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostContainer;
