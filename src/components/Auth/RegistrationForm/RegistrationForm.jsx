import React from "react";
import classes from './RegistrationForm.module.sass';
import {Formik} from "formik";
import * as yup from "yup";

const RegistrationForm = props => {

    const validationsSсhema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно для заполнения'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно для заполнения'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').typeError('Должно быть строкой').required('Обязательно для заполнения'),
        email: yup.string().email('Введите валидный email').required('Обязательно для заполнения')
    })

    return (
        <div className={classes.registration}>
            <h1>Регистрация</h1>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: '',
                    email: ''
                }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationsSсhema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <form className={classes.registrationForm}>
                        <p>
                            <label htmlFor="name">Ваше имя:</label>
                            <input
                                type="text"
                                className={classes.input}
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p className={classes.error}>{errors.name}</p>}

                        <p>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className={classes.input}
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}

                        <p>
                            <label htmlFor="password">Пароль:</label>
                            <input
                                type="password"
                                className={classes.input}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}

                        <p>
                            <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                            <input
                                type="password"
                                className={classes.input}
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p className={classes.error}>{errors.confirmPassword}</p>}

                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-primary"
                        >Отправить</button>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default RegistrationForm;