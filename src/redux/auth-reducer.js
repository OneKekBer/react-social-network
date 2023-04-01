import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA'
// let LOGIN = 'LOGIN'
// let LOGOUT = 'LOGOUT'



// https://social-network.samuraijs.com/api/1.0//auth/me


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,

    isFetching:true,

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,

                }

        default:
            return state;
    }


}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {id, email, login, isAuth}}
}
// export const Login = ()=>{
//     return {type:LOGIN, data:{email, password, rememberMe}}
// }

export const authMeThunkCreator = () => {
    return (dispatch) => {
        profileAPI.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))

                }
            });
        return 'hi'
    }
}
export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {



        authAPI.Login(email, password, rememberMe)
            .then((data) => {

                if (data.resultCode === 0) {//проверка на ошибку

                    dispatch(authMeThunkCreator(email, password, rememberMe))
                }
                else{
                    let messages = data.messages.length >0 ? data.messages[0] : 'some error'
                    dispatch(stopSubmit('login', {_error:messages}))
                }
            });
    }
}
export const logoutThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.Logout()
            .then((data) => {
                if (data.resultCode === 0) {//проверка на ошибку

                    dispatch(setAuthUserData(null, null, null, false))

                }
            });
    }
}

export default authReducer;