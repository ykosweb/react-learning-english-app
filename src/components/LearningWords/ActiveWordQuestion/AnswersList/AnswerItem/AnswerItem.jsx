import React from "react";
import classes from './AnswerItem.module.sass';

const AnswerItem = props => {
    let cls = [classes.answerItem];
    if (props.answerState) {
        cls.push(classes[props.answerState])
    }
    return (
        <li
            className={cls.join(' ')}
            onClick={ () => props.choseAnswer(props.answerId) }
        >
            {props.answer}
        </li>
    )
};

export default AnswerItem;