import React from "react";
import classes from './Header.module.sass';
import {Link} from "react-router-dom";
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

                <Link to="/" className={classes.menuLink}>Главная</Link>
                <Link to="/learning-words" className={classes.menuLink}>Учим Cлова</Link>
                <Link to="/learning-verbs" className={classes.menuLink}>Неправильные глаголы</Link>
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