import React from "react";
import classes from './MainPage.module.sass';

const MainPage = props => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.about}>
                <h1>Easy English</h1>
            </div>
            <div className={classes.slider}>
                <ul>
                    <li>
                        <a>Тест 1</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MainPage;