let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
            }
            state.PostData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }


}
export const addPostActionCreator =() =>{
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator =(text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
}
export default profileReducer;