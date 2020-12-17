import React from "react";
import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {signOut} from "../../redux/actions/authActions";

const Header = (props) => {
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

            {props.auth.uid
                ? <SignedOutLinks signOut={props.signOut}/>
                : <SignedInLinks />
                }
        </header>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);