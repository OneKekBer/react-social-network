let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const dialogReducer = (state, action) => {
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