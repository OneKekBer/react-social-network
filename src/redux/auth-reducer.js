let SET_USER_DATA = 'SET_USER_DATA'


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
                isAuth: true,
                }

        default:
            return state;
    }


}

export const setAuthUserData = (id, email, login) => {
    return {type: SET_USER_DATA, data: {id, email, login}}
}

export default authReducer;