import React from "react";

import {connect} from "react-redux";
import Header from "./header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authMe, getProfile} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authMe()
            .then((data) => {
                if (data.resultCode === 0){
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login)

                    getProfile(id)
                        .then((data) => {
                            this.props.setUserProfile(data);
                        });
                }
            });
    }

    render(){
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);