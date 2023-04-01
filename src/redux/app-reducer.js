import {authMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


// https://social-network.samuraijs.com/api/1.0//auth/me


let initialState = {

    initialized: false,

}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }


}

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}
// export const Login = ()=>{
//     return {type:LOGIN, data:{email, password, rememberMe}}
// }

export const initializeApp = () => {
    return (dispatch) => {

        let promise = dispatch(authMeThunkCreator())
        // console.log(dispatchResult)
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }

}


export default appReducer;