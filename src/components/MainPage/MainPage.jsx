import React from "react";
import classes from './MainPage.module.sass';

const MainPage = props => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.about}>
        <h1>Easy English</h1>
        <p>Лучшее приложение для изучения английского языка.
          Осваивайте новые слова и сохраняйте свои результаты.
          Шаг за шагом, ваши знания в языке возрастут.
        </p>
      </div>
      <div>
        <ul className={classes.slider}>
          <li>
            <a>СЛАЙД 1</a>
          </li>
          <li>
            <a>СЛАЙД 2</a>
          </li>
          <li>
            <a>СЛАЙД 3</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default MainPage;