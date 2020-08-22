import React from "react";
import classes from './QuestionCounter.module.sass';

const QuestionCounter = props => {
  return (
    <small className={classes.questionCounter}>
      1 из 10
    </small>
  )
};

export default QuestionCounter;