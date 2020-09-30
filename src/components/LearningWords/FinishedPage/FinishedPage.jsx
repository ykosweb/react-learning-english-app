import React from "react";
import classes from './FinishedPage.module.sass';

const FinishedPage = props => {
    return (
        <div className={classes.completed}>
            <h1 className={classes.completedContent}>
                Конец
            </h1>
        </div>

    )
};

export default FinishedPage;