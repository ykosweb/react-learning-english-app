import React, {useState} from "react";
import classes from './AsideLink.module.sass';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const AsideLink = ({to, icon, text}) => {

    return (
        <li className={classes.asideLinks}>
            <NavLink to={to}>
                <div>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <span className={classes.text}>{text}</span>

            </NavLink>
        </li>
    )
};

export default AsideLink;