import React, {useState} from "react";
import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";

const Header = props => {
    const [loginMenu, setLoginMenu] = useState(false);

    function toggleLoginMenu() {
        setLoginMenu(!loginMenu);
    }
    return (
        <header className={classes.header}>
            <div>
                <h3 className={classes.appName}>Easy English</h3>
            </div>

            <nav>
                <NavLink to="/" className={classes.menuLink}>Главная</NavLink>
                <NavLink to="learning-words" className={classes.menuLink}>Учим Cлова</NavLink>
                <NavLink to="learning-verbs" className={classes.menuLink}>Неправильные глаголы</NavLink>
            </nav>
            {/*Сделать потом вместо этого блока проверку пропса isAuth. И если авторизовать показывать просто имя пользователя*/}
            <div className={classes.loginBlock}>
                <NavLink to="auth" className="btn btn-primary btn-sm">LogIn</NavLink>
                <NavLink to="registration" className="btn btn-primary btn-sm">Registration</NavLink>
            </div>
        </header>
    )
};

export default Header;