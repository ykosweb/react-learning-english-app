import React from "react";
import classes from './Button.module.sass';

const Button = props => {
    const cls = [classes.buttonCls, 'btn'];
    if (props.bootstrapType) {
        cls.push(props.bootstrapType)
    }
    if (props.bootstrapSize) {
        cls.push(props.bootstrapSize)
    }
    return (
        <button className={cls.join(' ')}>
            {props.text}
        </button>
    )
};

export default Button;