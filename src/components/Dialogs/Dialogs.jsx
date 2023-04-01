import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {input} from "../common/form/formsControl";

let maxLength10 = maxLengthCreator(10)
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field className={s.input}
                   component={input}
                   name={'newMessage'}
                   type='text'
                   placeholder='write message'
                   validate={[required, maxLength10]}

                   value={props.newMessageText}
            />
            <button className={s.btn}>click me</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'Message'
})(DialogsForm)

const Dialogs = (props) => {
    let DialogElements = props.DialogData
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let MessageElements = props.MessageData
        .map(m => <Message message={m.message} key={m.id} id={m.id}/>)


    const addMessage = (values) => {
        console.log(values.newMessage)
        props.addMessage(values.newMessage);

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
            <DialogsReduxForm onSubmit={addMessage}/>

        </div>


    );

}
export default Dialogs;