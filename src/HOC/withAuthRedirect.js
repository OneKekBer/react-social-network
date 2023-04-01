import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

// export const withAuthRedirect = (Component)=>{
//     let RedirectComponent = (props) =>{
//         if (!props.isAuth){
//             return <Component to="/login" />;
//         }
//     }
//     return RedirectComponent;
//
// }

let mapStateToPropsForRedirect =(state)=>{
    return {isAuth: state.auth.isAuth}
}

export const withAuthRedirect = (Component) =>{
    let RedirectComponent = (props)=>{
        if (!props.isAuth) return <Navigate to='/login'/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;


}
