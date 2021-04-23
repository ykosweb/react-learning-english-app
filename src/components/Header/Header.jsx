import React from "react";
import classes from './Header.module.sass';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {signOut} from "../../redux/actions/authActions";
import logo from "./../../img/main_logo.png";

const Header = (props) => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" className={classes.logoImg}/>
            </div>

            <nav>
                <NavLink to="/" className={classes.menuLink} >Главная</NavLink>
                <NavLink to="/learning-words" className={classes.menuLink} >Учим Cлова</NavLink>
                <NavLink to="/learning-verbs" className={classes.menuLink} >Неправильные глаголы</NavLink>
            </nav>

            {props.auth.uid
                ? <SignedOutLinks
                    signOut={props.signOut}
                    profile={props.profile}
                />
                : <SignedInLinks />
                }
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);