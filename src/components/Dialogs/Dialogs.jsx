import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";



const Dialogs = (props) => {
    let DialogElements = props.state.DialogData
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessageElements = props.state.MessageData
        .map(m => <Message message={m.message} id={m.id}/>)

    let inputRef = React.createRef();



    let addMessage = () => {
        let text = inputRef.current.value;
        props.dispatch(addMessageActionCreator())
        // props.addMessage(text);
        // props.updateNewMessageText(' ')

    }

    let onMessageChange = () =>{
        let text = inputRef.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
        // props.updateNewMessageText(text);

    }

    return (
        <div>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {DialogElements}
                </div>
                <div className={s.messages}>
                    {MessageElements}
                </div>
            </div>
            <div className={s.form}>
                <input className={s.input}
                       ref={inputRef}
                       type='text'
                       placeholder='write message'
                       onChange={onMessageChange}
                       value={props.newMessageText}
                />
                <button className={s.btn} onClick={addMessage}>click me</button>
            </div>
        </div>


    );

}
export default Dialogs;