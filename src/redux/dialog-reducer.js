let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    DialogData: [
        {id: 1, name: 'down'},
        {id: 2, name: 'leha'},
        {id: 3, name: 'leha'},
        {id: 4, name: 'leha'},
        {id: 5, name: 'leha'},
        {id: 6, name: 'leha'},
        {id: 7, name: 'leha'},

    ],
    MessageData: [
        {id: 1, message: 'how are u?'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'how are u?'},

    ],
    newMessageText: 'hatabyc',
}
export const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: 9,
                message: state.newMessageText,
            }
            return {
                ...state,
                MessageData:[...state.MessageData,newMessage],
                newMessageText: '',
            }

        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText:action.newText,
            }

        }

        default: return state;
    }

}
export const addMessageActionCreator =() =>{
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator =(text) =>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText:text}
}


export default dialogReducer;