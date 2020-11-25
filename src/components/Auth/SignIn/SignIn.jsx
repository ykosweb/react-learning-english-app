import React from "react";
import classes from "./SignIn.module.sass"
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {signIn} from "../../../redux/authReducer";

const validationsSсhema = yup.object().shape({
    password: yup.string().typeError('Должно быть строкой').required('Обязательно для заполнения'),
    email: yup.string().email('Введите валидный email').required('Обязательно для заполнения')
})

class SignIn extends React.Component {

    handleSubmit = (values) => {
        console.log(values)
        this.props.signIn(values)
    }

    render() {
        return (
            <div className={classes.auth}>
                <h1>Вход</h1>
                <Formik
                    initialValues={{
                        password: '',
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
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
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


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);