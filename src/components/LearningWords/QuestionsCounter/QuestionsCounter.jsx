import React from "react";
import classes from './QuestionsCounter.module.sass';

const QuestionsCounter = props => {
  return (
    <small className={classes.questionCounter}>
        {props.activeQuestionNum + 1} из {props.questionCounter}
    </small>
  )
};

export default QuestionsCounter;