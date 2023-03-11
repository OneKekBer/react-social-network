import React from "react";
import "./Post.module.css";
const Post = (props) => {

    return (
        <div >
            <img src="" alt="" />
            <span>{props.message}</span>
            <span className="out"> Likes:{props.likeCount}</span>
            <div>
                {/* <span>Like</span> */}
            </div>
        </div>
    );
};
export default Post;
