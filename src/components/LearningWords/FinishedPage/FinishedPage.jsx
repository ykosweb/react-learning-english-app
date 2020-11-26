import React from "react";
import classes from './FinishedPage.module.sass';

const FinishedPage = props => {
    return (
        <div className={classes.completed}>
            <h1>
                Отлично, вы выучили 10 слов!
            </h1>
            <button className="btn btn-primary">Выучить еще 10 слов</button>
        </div>

    )
};

export default FinishedPage;