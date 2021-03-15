import React from "react";
import classes from './Button.module.sass';

const Button = ({bootstrapType, bootstrapSize, children}) => {
    const cls = [classes.buttonCls, 'btn'];
    if (bootstrapType) {
        cls.push(bootstrapType)
    }
    if (bootstrapSize) {
        cls.push(bootstrapSize)
    }
    return (
        <button className={cls.join(' ')}>
            {children}
        </button>
    )
};

export default Button;