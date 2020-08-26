import React from "react";
import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <div>
        <h3 className={classes.appName}>Easy English</h3>
      </div>

      <nav>
        <NavLink to="/" className={classes.menuLink}>Главная</NavLink>
        <NavLink to="learning-words" className={classes.menuLink}>Практикуем слова</NavLink>
        <NavLink to="learning-verbs" className={classes.menuLink}>Неправильные глаголы</NavLink>
      </nav>
      <div className={classes.registrationBlock}>
        <button>LogIn</button>
        <button>Registration</button>
      </div>
    </header>
  )
};

export default Header;