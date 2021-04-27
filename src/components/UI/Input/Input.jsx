import React from "react";
import classes from './Input.module.sass';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = ({type, label, value, disabled, onChange, onBlur}) => {

    const inputType = type || "text";
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;