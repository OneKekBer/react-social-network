let ADD_MESSAGE = 'ADD-MESSAGE';


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
    newMessageText: ' ',
}
export const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: 9,
                message: action.newMessage,
            }
            return {
                ...state,
                MessageData:[...state.MessageData,newMessage],
                newMessageText: '',
            }

            // return {
            //     ...state, newMessageText: state.newMessage
            // }

        }
        default: return state;
    }

}
export const addMessage =(newMessage) =>{
    return {type: ADD_MESSAGE, newMessage}
}



export default dialogReducer;