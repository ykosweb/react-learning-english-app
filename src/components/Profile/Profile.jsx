import React from "react";
import classes from './Profile.module.sass';

const Profile = props => {
    return (
        <div className={classes.profile}>
            <div className="container">
                <h1>Профиль</h1>
                <div>
                    <p>Имя:</p>
                    <p>Фото:</p>
                    <p>Email:</p>
                    <p>Пароль</p>
                    <p>Дата создания аккаунта</p>
                    <p>В с нами уже *** дней</p>
                </div>
            </div>
        </div>
    )
};

export default Profile;