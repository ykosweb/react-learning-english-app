import React, {useState} from "react";
import classes from './LearningVerbs.module.sass';
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as classNames from "classnames";

const LearningVerbs = props => {

    let infinitive = 'человек';
    let [infinitiveClass, setInfinitiveClass] = useState("field");

    const validationSchema = yup.object().shape({
        infinitive: yup.string('человек').required("Поле обязательон для ввода"),
        pastSimple: yup.string().required("Поле обязательон для ввода"),
        pastParticle: yup.string().required("Поле обязательон для ввода")
    })
    const validate = (values, props /* only available when using withFormik */) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        //...

        return errors;
    };

    return (
        <div className={classes.learningVerbs}>
            <h2>Введите три формы глагола</h2>
            <Formik
                initialValues={{
                    Infinitive: '',
                    pastSimple: '',
                    pastParticle: '',
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                validateOnBlur
                validate
            >
                {({errors, touched, isValidating, validateForm, isValid, validate}) => (
                    <Form>
                        <div>
                            <p>Глагол "бежать"</p>
                        </div>
                        <div className={classes.fieldsBlock}>
                            <label htmlFor="Infinitive">Infinitive:</label>
                            <Field
                                id="Infinitive"
                                name="Infinitive"
                                className={infinitiveClass}
                                isValid={isValid}
                                validate={validate}
                            />
                            {errors.Infinitive && touched.Infinitive &&
                            <div className={classes.error}>{errors.Infinitive}</div>
                            }

                            <label htmlFor="pastSimple">Past Simple:</label>
                            <Field
                                id="pastSimple"
                                name="pastSimple"
                                // className={clsField.join(' ')}
                            />
                            {errors.pastSimple && touched.pastSimple &&
                            <div className={classes.error}>{errors.pastSimple}</div>
                            }

                            <label htmlFor="pastParticle">Past Participle:</label>
                            <Field
                                id="pastParticle"
                                name="pastParticle"
                                // className={clsField.join(' ')}
                            />
                            {errors.pastParticle && touched.pastParticle &&
                            <div className={classes.error}>{errors.pastParticle}</div>
                            }

                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={() => validateForm().then(() => console.log('blah'))}
                            >Проверить</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
};

export default LearningVerbs;