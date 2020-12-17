import React from "react";
import classes from './../Header/Header.module.sass';
import {NavLink} from "react-router-dom";

const SignedInLinks = props => {
    return (
        <div className={classes.loginBlock}>
            <NavLink to="signIn" className="btn btn-primary btn-sm">Войти</NavLink>
            <NavLink to="registration" className="btn btn-primary btn-sm">Регистрация</NavLink>
        </div>
    )
};

export default SignedInLinks;