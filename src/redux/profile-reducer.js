let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    PostData: [
        {id: 1, post: 'how are u?', likeCount: 12},
        {id: 2, post: 'how are u?', likeCount: 14},
    ],
    newPostText: 'log',
    profile: {photos:{}},
    // profile:null,
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                post: state.newPostText,
            };
            return {
                ...state,
                PostData:[...state.PostData,newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText,

            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state, profile: action.profile
            }
        }


        default:
            return state;
    }


}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}
export default profileReducer;