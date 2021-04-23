import React from "react";
import classes from './MainPage.module.sass';
import {NavLink} from "react-router-dom";


const MainPage = props => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.mainPageContent}>
                <div className={classes.leftSide}>
                    <h1 className={classes.mainTitle}><span className={classes.mainTitleSpan}>Easy</span> English</h1>
                    <p>Лучшее приложение для изучения английского языка.
                        Осваивайте новые слова, изучайте неправильные формы глаголов, делайте переводы.
                        Шаг за шагом, ваши знания в языке возрастут.
                    </p>
                </div>
                <div className={classes.rightSide}>
                    <ul className={classes.rightSideContent}>
                        <li>
                            <p>Изуйчай слова, отгадывая правильный перевод. За каждые выученные 10 слов, получай 10
                                баллов</p>
                            <NavLink to="/learning-words" className="btn btn-success">Начать урок</NavLink>
                        </li>
                        <li>
                            <p>Запоминай неправильный формы глаголы. Пройди 5 слов и используй их потом в предложениях</p>
                            <NavLink to="/learning-verbs" className="btn btn-success">Начать урок</NavLink>
                        </li>
                        <li>
                            <p>Делай перевод и тренируйся в составлении предложений.</p>
                            <NavLink to="/learning-sentence" className="btn btn-success">Начать урок</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MainPage;