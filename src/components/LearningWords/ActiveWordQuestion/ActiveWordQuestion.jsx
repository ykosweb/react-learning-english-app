import React from "react";
import AnswerList from "./AnswerList/AnswerList";
import classes from "./ActiveWordQuestion.module.sass"

const ActiveWordQuestion = props => {
  return (
    <div>
      <p className={classes.word}>Слово - <strong className={classes.activeWord}>Boy</strong></p>

      <AnswerList />
    </div>
  )
};

export default ActiveWordQuestion;