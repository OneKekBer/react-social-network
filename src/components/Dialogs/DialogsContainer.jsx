import React from "react";


import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, updateNewMessageText} from "../../redux/dialog-reducer";

import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component{
    render() {

        if(!this.props.isAuth){
            return <Navigate to='/login'/>
        }


        return <>
            <Dialogs
                DialogData = {this.props.DialogData}
                newMessageText = {this.props.newMessageText}
                MessageData = {this.props.MessageData}

                addMessage = {this.props.addMessage}

            />
        </>
    }


}
let mapStateToProps = (state) =>{
    return{
        DialogData:state.DialogsPage.DialogData,
        newMessageText:state.DialogsPage.newMessageText,
        MessageData:state.DialogsPage.MessageData,
    };
}


export default compose (
    connect(mapStateToProps,{addMessage, }),
    withAuthRedirect,
)(DialogsContainer)
