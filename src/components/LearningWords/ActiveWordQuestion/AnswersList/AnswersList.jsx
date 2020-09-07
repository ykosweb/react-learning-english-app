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
                        answer={item.version}
                        key={item.id}
                        answerId={item.id}
                        choseAnswer={props.choseAnswer}
                        answerState={item.id === itemNumber ? Object.values(props.answerState) : null}
                    />
                )

            })}
        </ul>
    )
};

export default AnswersList;