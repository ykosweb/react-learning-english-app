import React from "react";
import classes from './AnswersList.module.sass';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    let itemNumber = null;
    if (props.answerState) {
        itemNumber = +Object.keys(props.answerState);
    }
    return (
        <ul className={classes.answerList}>
            {props.questionItem.answerVariants.map((item, index) => {
                return (
                    <AnswerItem
                        answer={item}
                        key={index}
                        answerId={index + 1}
                        choseAnswer={props.choseAnswer}
                        answerState={index + 1 === itemNumber ? Object.values(props.answerState) : null}
                    />
                )

            })}
        </ul>
    )
};

export default AnswersList;