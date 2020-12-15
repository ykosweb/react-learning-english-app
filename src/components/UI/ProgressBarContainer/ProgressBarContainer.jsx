import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import classes from './ProgressBarContainer.module.sass'

const ProgressBarContainer = ({successWords}) => {

    return (
        <div className={classes.progressBarContainer}>
            <h6>Прогресс урока</h6>
            <ProgressBar animated now={successWords*10} label={`${successWords*10}%`} variant="success"/>
        </div>
    )
};

export default ProgressBarContainer;