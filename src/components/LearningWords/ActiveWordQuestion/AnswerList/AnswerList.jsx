import React from "react";
import classes from './AnswerList.module.sass';

const AnswerList = props => {
  return (
    <ul className={classes.answerList}>
      <li>Мальчик</li>
      <li>Курица</li>
      <li>Олень</li>
      <li>Огурец</li>
    </ul>
  )
};

export default AnswerList;