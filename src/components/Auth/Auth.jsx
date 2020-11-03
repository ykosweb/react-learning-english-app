import React from "react";
import classes from './Auth.module.sass';
import Input from "../UI/Input/Input";

class Auth extends React.Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault();
    };
    validateControl(value, validation) {
        if (!validation) {
            return true;
        }
        let isValid = true;

        if (validation.required) {}

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: ${event.target.value}`)

        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls
        })

    }
    renderInputs () {
        return Object.keys(this.state.formControls).map( (controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}

                    onChange = {event => this.onChangeHandler(event, controlName)}
                />
            )
        });
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div className={classes.AuthBlock}>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <div className={classes.buttonBlock}>
                            <button
                                className="btn btn-success"
                                onClick={this.loginHandler}>
                                Войти
                            </button>
                            <button
                                className="btn btn-warning"
                                onClick={this.registerHandler}>
                                Зарегистрироваться
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default Auth;