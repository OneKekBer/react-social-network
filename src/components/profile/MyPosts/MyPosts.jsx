import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPost = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.post} likeCount={p.likeCount} id={p.id}/>)

    let ImportRef = React.createRef();
    let onAddPost =() =>{
        props.AddPost()
    }
    let onPostChange = () =>{
        let text = ImportRef.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className="MyPost">
            <div className="create">
                <h2>My Posts</h2>
                <div className={s.form} action="">
                    <input
                        ref={ImportRef}
                        className={s.input}
                        type="text"
                        placeholder="write smth"
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                    <button className='btn'  onClick= { onAddPost }>send</button>
                </div>

            </div>

            <div className="posts">
                {PostElements}

            </div>
        </div>
    );
};
export default MyPost;
