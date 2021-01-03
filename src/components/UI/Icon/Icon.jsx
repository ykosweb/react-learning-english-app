import React from "react";
import classNames from 'classnames';
import "font-awesome";

const Icon = ({name, className, size}) => {

    const elemSize = size ? {fontSize: `${size}rem`} : null

    const classes = classNames(
        'fa',
        `fa-${name}`,
        className
    )

    return (
        <i
            className={classes}
            style={elemSize}
        />
    )
};

export default Icon;