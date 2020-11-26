import React from "react";
import classes from './RepeatedPage.module.sass';

const RepeatedPage = props => {
    return (
        <div className={classes.completed}>
            <h3>
                <p>Эти слова нужно пройти заново, ваши ответы были не верны.</p>
                <p>Нажмите "Продолжить обучение", если готовы.</p>
            </h3>
            <div className={classes.results}>
                {props.results.map( (item, index) => {
                    let {word, translation} = item;
                    return (
                        <p key={index} className={classes.resultsItem}>
                            <span className={classes.word}>{word}</span> - &nbsp;
                            <span>{translation}</span>
                        </p>
                    )
                })}
            </div>
            <button className="btn btn-primary" onClick={props.setUnansweredQuestions}>Продолжить обучение</button>

        </div>

    )
};

export default RepeatedPage;