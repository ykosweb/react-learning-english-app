import React from "react";
import classes from './LearningWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionCounter from "./QuestionCounter/QuestionCounter";

const LearningWords = props => {
  return (
    <div className={classes.learningWords}>
      <p className={classes.learnedWords}>Выучено слов за сегодня 10</p>
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