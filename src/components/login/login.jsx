import React from "react";
import s from './login.module.css'
import st from '../common/form/formsControl.module.css'

import {Field, reduxForm} from "redux-form";
import {input} from "../common/form/formsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {
    const maxLength20 = maxLengthCreator(30)
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={'email'}
                       component={input}
                       name={'email'}
                       className={s.input}
                       validate={[required, maxLength20]}
                />

            </div>
            <div>
                <Field placeholder={'password'}
                       type={"password"}
                       name={'password'}
                       className={s.input}
                       component={input}
                       validate={[required, maxLength20]}

                />

            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>
                <span>Remember me</span>
            </div>
            {
                props.error && <div className={st.summeryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>

        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
        isAuth:state.auth.isAuth,

})
export default connect(mapStateToProps, {login:loginThunkCreator})(Login)