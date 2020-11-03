import React from "react";
import classes from './Auth.module.sass';

class Auth extends React.Component {


    render() {
        return (
            <div className={classes.Auth}>
                <div className={classes.AuthBlock}>
                    <h1>Авторизация</h1>

                </div>

            </div>
        )
    }
}

export default Auth;