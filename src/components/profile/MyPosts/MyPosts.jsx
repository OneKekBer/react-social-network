import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {input} from "../../common/form/formsControl";


export const PostForm = (props) =>{
    const maxLength20 =maxLengthCreator(20)
    return(
        <form onSubmit={props.handleSubmit} className={s.form} action="">
            <Field

                className={s.input}
                type="text"

                component={input}
                name={'newPost'}

                placeholder="write smth"
                validate={[required, maxLength20]}
                value={props.newPost}

            />
            <button className='btn'>send</button>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'Message'
})(PostForm)

const MyPost = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.post} key={p.id} likeCount={p.likeCount} id={p.id}/>)


    let onAddPost =(values) =>{
        // console.log(values.newPost)
        props.AddPost(values.newPost)
    }


    return (
        <div className="MyPost">
            <div className="create">
                <h2>My Posts</h2>
                <PostReduxForm onSubmit={onAddPost}/>
            </div>

            <div className="posts">
                {PostElements}
            </div>
        </div>
    );
};
//
// const MyPostForm =(props)=>{
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'write ur post'} component={'input'} name={'PostMessage'}/>
//             </div>
//             <div>
//                 <button  className='btn'>Send</button>
//             </div>
//         </form>
//     )
// }
//
// const PostReduxForm = reduxForm({
//     form: 'Post'
// })(MyPostForm)
//
// const onSubmit = (formData) =>{
//     console.log(formData)
// }
//
// const MyPost = (props) =>{
//     return(
//         <PostReduxForm onSubmit={onSubmit}/>
//     )
// }
export default MyPost;
