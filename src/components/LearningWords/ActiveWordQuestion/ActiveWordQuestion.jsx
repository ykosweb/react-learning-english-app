import React from "react";
import AnswersList from "./AnswersList/AnswersList";
import classes from "./ActiveWordQuestion.module.sass"

const ActiveWordQuestion = props => {
  return (
    <div>
      <p className={classes.word}>Слово - <strong className={classes.activeWord}>{props.questions[props.activeQuestionNum].word}</strong></p>
      <AnswersList
          questionItem={props.questions[props.activeQuestionNum]}
          choseAnswer={props.choseAnswer}
          answerState={props.answerState}
      />
    </div>
  )
};

export default ActiveWordQuestion;