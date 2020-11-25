import React from "react";
import classes from './LearningWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionsCounter from "./QuestionsCounter/QuestionsCounter";

const LearningWords = props => {
    debugger;
  return (
    <div className={classes.learningWords}>
      <div className={classes.wordsSuccess}>Выучено слов за сегодня &nbsp;
        <span className={classes.successNumber}>{props.successWords}</span>
      </div>
      <div>
        <h2>Выберите правильный перевод</h2>
        <div className={classes.questionBlock}>
          <ActiveWordQuestion
              questions={props.questions}
              activeQuestion={props.activeQuestion}
              choseAnswer={props.choseAnswer}
              answerState={props.answerState}
          />
          <QuestionsCounter
              questionCounter={props.questions.length}
              activeQuestion={props.activeQuestion}
          />
        </div>
      </div>
    </div>
  )
};

export default LearningWords;