import React from "react";
import classes from "./SignIn.module.sass"
import {Field, Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {signIn} from "../../../redux/actions/authActions";
import {Redirect} from "react-router-dom";

const validationsSсhema = yup.object().shape({
    password: yup.string().typeError('Должно быть строкой').required('Обязательно для заполнения'),
    email: yup.string().email('Введите валидный email').required('Обязательно для заполнения')
})

// компонент входа
const SignIn = (props) => {

    const handleSubmit = (values) => {
        props.signIn(values)
    }
    if (props.auth.uid) return <Redirect to='/' />
    return (
        <div className={classes.auth}>
            <h1>Вход</h1>
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                    initialErrors: props.error
                }}
                enableReinitialize={true}
                validateOnBlur
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
                validationSchema={validationsSсhema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className={classes.authForm}>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <Field type="email"
                                   name="email"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}

                        <p>
                            <label htmlFor="password">Пароль:</label>
                            <Field type="password"
                                   className={classes.input}
                                   name="password"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}

                        {props.authError && <p className={classes.error}>Email или пароль введены не верно</p>}
                        <button
                            disabled={!isValid && !dirty}
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >Войти
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);