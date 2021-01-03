import React from "react";
import classes from './MainPage.module.sass';
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./../../img/slide1.png"
import slide2 from "./../../img/slide2.png"
import slide3 from "./../../img/slide3.png"
import {NavLink} from "react-router-dom";


const MainPage = props => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.about}>
                <h1>Easy English</h1>
                <p>Лучшее приложение для изучения английского языка.
                    Осваивайте новые слова, изучайте неправильные формы глаголов, делайте переводы.
                    Шаг за шагом, ваши знания в языке возрастут.
                </p>
            </div>
            <div className={classes.slider}>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <div>
                            <img src={slide1}/>
                        </div>

                        <Carousel.Caption>
                            <h3>Выучи 10 слов и получи 10 очков!</h3>
                            <NavLink to="learning-words" className="btn btn-primary">Начать обучение</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <div>
                            <img src={slide2}/>
                        </div>
                        <Carousel.Caption>
                            <h3>Изучай неправильные глаголы и повышай свой рейтинг!</h3>
                            <NavLink to="learning-verbs" className="btn btn-primary">Начать обучение</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.imgWrap}>
                            <img src={slide3}/>
                        </div>
                        <Carousel.Caption>
                            <h3>Из заданных слов, сделай перевод текста!</h3>
                            <NavLink to="learning-sentence" className="btn btn-primary">Начать обучение</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
};

export default MainPage;