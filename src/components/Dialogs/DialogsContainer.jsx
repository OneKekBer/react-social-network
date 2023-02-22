import React from "react";
import storeContext from "../../storeContext";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs updateNewMessageText={onMessageChange}
                                 addMessage={addMessage}
                                 DialogData={state.DialogsPage.DialogData}
                                 newMessageText={state.DialogsPage.newMessageText}
                                 MessageData={state.DialogsPage.MessageData}
                        />
                    )

                }
            }
        </storeContext.Consumer>
    )


}
export default DialogsContainer;