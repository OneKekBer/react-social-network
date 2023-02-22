let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    DialogData: [
        {id: 1, name: 'down'},
        {id: 2, name: 'leha'},
        {id: 3, name: 'leha'},
        {id: 4, name: 'leha'},
        {id: 4, name: 'leha'},
        {id: 4, name: 'leha'},
        {id: 4, name: 'leha'},

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
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            state.MessageData.push(newMessage);
            state.newMessageText = ''; // нужно чтобы не отсавлять данные на сервере а после перезагрузки написанное убрать
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
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