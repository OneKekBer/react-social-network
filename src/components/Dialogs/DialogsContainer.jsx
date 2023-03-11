import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//
//                     let onMessageChange = (text) => {
//                         let action = updateNewMessageTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//                     return (
//                         <Dialogs updateNewMessageText={onMessageChange}
//                                  addMessage={addMessage}
//                                  DialogData={state.DialogsPage.DialogData}
//                                  newMessageText={state.DialogsPage.newMessageText}
//                                  MessageData={state.DialogsPage.MessageData}
//                         />
//                     )
//
//                 }
//             }
//         </storeContext.Consumer>
//     )
//
//
// }
let mapStateToProps = (state) =>{
    return{
        DialogData:state.DialogsPage.DialogData,
        newMessageText:state.DialogsPage.newMessageText,
        MessageData:state.DialogsPage.MessageData,

    };
}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageText: (text)=>{
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        }
    }


}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;