import React from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';



const Icon = ({icon, size, color}) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            style={{transform: `scale(${size})`, color}}
        />
    )
};

export default Icon;