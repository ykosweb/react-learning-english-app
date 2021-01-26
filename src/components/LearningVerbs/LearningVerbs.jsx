import React, {useState} from "react";
import classes from './LearningVerbs.module.sass';
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as classNames from "classnames";

const LearningVerbs = props => {
    const validationSchema = yup.object().shape({
        infinitive: yup.string().required("Поле обязательон для ввода"),
        pastSimple: yup.string().required("Поле обязательон для ввода"),
        pastParticle: yup.string().required("Поле обязательон для ввода")
    })
    const handleSubmit = () => {
        validationSchema.validate({infinitive: props.verbs[0], pastSimple: props.verbs[1], pastParticle: props.verbs[2]}).then((valid) => {
            console.log(valid, "успех")
        }).catch(() => {
            console.log("error")
        })
    }


    return (
        <div className={classes.learningVerbs}>
            <h2>Введите три формы глагола</h2>
            <Formik
                initialValues={{
                    infinitive: '',
                    pastSimple: '',
                    pastParticle: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnBlur
            >
                {( {values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty} ) => (
                    <Form>
                        <div>
                            <p>Глагол <strong className={classes.activeVerb}>{props.verbItem.verb}</strong></p>
                        </div>
                        <div className={classes.fieldsBlock}>
                            <label htmlFor="Infinitive">Infinitive:</label>
                            <Field
                                type="text"
                                name="infinitive"
                                value={values.infinitive}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.infinitive && touched.infinitive &&
                            <div className={classes.error}>{errors.infinitive}</div>
                            }

                            <label htmlFor="pastSimple">Past Simple:</label>
                            <Field
                                type="text"
                                name="pastSimple"
                                value={values.pastSimple}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.pastSimple && touched.pastSimple &&
                            <div className={classes.error}>{errors.pastSimple}</div>
                            }

                            <label htmlFor="pastParticle">Past Participle:</label>
                            <Field
                                type="text"
                                name="pastParticle"
                                value={values.pastParticle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.pastParticle && touched.pastParticle &&
                            <div className={classes.error}>{errors.pastParticle}</div>
                            }

                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                            >Проверить</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
};

export default LearningVerbs;