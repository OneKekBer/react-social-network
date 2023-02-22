import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";




const Dialogs = (props) => {
    let DialogElements = props.DialogData
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessageElements = props.MessageData
        .map(m => <Message message={m.message} id={m.id}/>)

    let inputRef = React.createRef();



    let onAddMessage = () => {
        // let text = inputRef.current.value;
        props.addMessage();

    }

    let onMessageChange = () =>{
        let text = inputRef.current.value;
        props.updateNewMessageText(text);

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
                <button className={s.btn} onClick={onAddMessage}>click me</button>
            </div>
        </div>


    );

}
export default Dialogs;