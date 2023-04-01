import {profileAPI} from "../api/api";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
// let UPDATE_STATUS = 'UPDATE_STATUS';
let SET_STATUS = 'SET_STATUS';

let initialState = {
    PostData: [
        {id: 1, post: 'how are u?', likeCount: 12},
        {id: 2, post: 'how are u?', likeCount: 14},
    ],
    newPostText: 'log',
    profile: {photos: {}},
    // profile:null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                post: action.newPost,
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,

            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state, status: action.status
            }
        }


        default:
            return state;
    }


}
export const addPost = (newPost) => {
    return {type: ADD_POST, newPost}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status};
}


export const getMyProfileThunkCreator = (id) => {
    return (dispatch) => {

        profileAPI.getProfile(id)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}


export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatusThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then((data) => {
                dispatch(setStatus(data));
            });
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}
export default profileReducer;