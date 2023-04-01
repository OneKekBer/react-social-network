import React from "react";
import s from "../login.module.css";
import {Field} from "redux-form";



const LoginForm = (props) =>{
    return(
        <form action="" className={s.form}>
            <div>

                <Field type="text" placeholder='login' component="input" className={s.input}/>
            </div>
            <div>
                <Field type="text" placeholder='password' component="input"/>
            </div>
            <div>
                <Field type="checkbox" />
                <span>Remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

export default LoginForm
