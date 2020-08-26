import React from "react";
import classes from './LearningWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionCounter from "./QuestionCounter/QuestionCounter";

const LearningWords = props => {
  return (
    <div className={classes.learningWords}>
      <p className={classes.learnedWords}>Выучено слов за сегодня &nbsp;
        <span className={classes.successNumber}>10</span>
      </p>
      <div>
        <h2>Выберите правильный перевод</h2>
        <div className={classes.questionBlock}>
          <ActiveWordQuestion/>
          <QuestionCounter/>
        </div>
      </div>
    </div>
  )
};

export default LearningWords;