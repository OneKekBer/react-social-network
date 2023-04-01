import React from 'react'
import s from './formsControl.module.css'
export const input = ({input, meta, ...props})=>{

    const hasError = meta.touched && meta.error;

    return(
        <div>
            <div className={hasError && s.error}>
                <input {...input} {...props} type="text"/>

            </div>
            {hasError &&  <span className={s.errorText}>{meta.error}</span>}

        </div>

    )
}