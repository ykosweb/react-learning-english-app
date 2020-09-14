import React from "react";
import classes from './CompletedPage.module.sass';

const CompletedPage = props => {
    return (
        <div className={classes.completed}>
            <h1 className={classes.completedContent}>
                Конец
            </h1>
        </div>

    )
};

export default CompletedPage;