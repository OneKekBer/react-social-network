import React from "react";
import {connect} from "react-redux";

import Login from "./login";

const loginContainer = () => {
    return <Login/>

}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, {})(loginContainer)