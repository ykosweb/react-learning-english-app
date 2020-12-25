import React from "react";
import classes from './SignUp.module.sass';
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {signUp} from "../../../redux/actions/authActions";
import {Redirect} from "react-router-dom";

const validationsSсhema = yup.object().shape({
    password: yup.string().typeError('Должно быть строкой').required('Обязательно для заполнения'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').typeError('Должно быть строкой').required('Обязательно для заполнения'),
    email: yup.string().email('Введите валидный email').required('Обязательно для заполнения')
})

class SignUp extends React.Component {

    handleSubmit = ({name, password, email}) => {
        this.props.signUp({name, password,email})
    }

    render() {
        debugger;
        if (this.props.auth && this.props.auth.uid) return <Redirect to='/' />
        return (
            <div className={classes.auth}>
                <h1>Регистрация</h1>
                <Formik
                    initialValues={{
                        name: '',
                        password: '',
                        confirmPassword: '',
                        email: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        this.handleSubmit(values);
                    }}
                    validationSchema={validationsSсhema}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div className={classes.authForm}>
                            <p>
                                <label htmlFor="name">Имя:</label>
                                <input
                                    type="text"
                                    className={classes.input}
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </p>
                            {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
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
                            {touched.confirmPassword && errors.confirmPassword &&
                            <p className={classes.error}>{errors.confirmPassword}</p>}

                            <button
                                disabled={!isValid && !dirty}
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >Отправить
                            </button>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);