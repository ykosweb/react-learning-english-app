import React from "react";
import classNames from 'classnames';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Icon = ({name, className, size, onClick}) => {

    const classes = classNames(
        'fa',
        `fa-${name}`,
        className
    )

    const elemSize = size ? { fontSize: `${size}rem` } : null

    return (
        <FontAwesomeIcon icon={faCheck} />
    )
};

export default Icon;