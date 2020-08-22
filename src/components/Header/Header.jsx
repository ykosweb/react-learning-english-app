import React from "react";
import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <div className={classes.header}>
      <div>
        <h3>Easy English</h3>
      </div>

      <div>
        <NavLink to="/" className={classes.menuLink}>Главная</NavLink>
        <NavLink to="practice-words" className={classes.menuLink}>Практикуем слова</NavLink>
      </div>
      <div>
        <span>User 123</span>
        <button>LogIn</button>
        <button>Registration</button>
      </div>
    </div>
  )
};

export default Header;