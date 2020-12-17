import React from "react";
import classes from './../Header/Header.module.sass';

const SignedOutLinks = (props) => {
    return (
        <div className={classes.loginBlock}>
            <span>Здравствуйте, User</span>
            <button className="btn btn-primary btn-sm" onClick={props.signOut}>Выйти</button>
        </div>
    )
};

export default SignedOutLinks;