import React from 'react';
import { Formik, Form, Field } from 'formik';
import "./LearningVerbs.sass"
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    infinitive: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    past: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    pastParticiple: Yup.string().email('Invalid email').required('Required'),
});

const LearningVerbs = () => (
    <div className="learningVerbsPage">
        <div className="learningVerbsPage_Wrapper">
            <h1 className="learningVerbsPage_Title">Signup</h1>
            <Formik
                initialValues={{
                    infinitive: '',
                    past: '',
                    pastParticiple: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="learningVerbsPage_Form">
                        <div className="learningVerbsPage_InputBlock">
                            <label htmlFor="infinitive">Infinitive:</label>
                            <Field name="infinitive" />
                            {errors.infinitive && touched.infinitive ? (
                                <div>{errors.infinitive}</div>
                            ) : null}
                        </div>
                        <div className="learningVerbsPage_InputBlock">
                            <label htmlFor="past">Past:</label>
                            <Field name="past" />
                            {errors.past && touched.past ? (
                                <div>{errors.past}</div>
                            ) : null}
                        </div>
                        <div className="learningVerbsPage_InputBlock">
                            <label htmlFor="pastParticiple">Past Participle:</label>
                            <Field name="pastParticiple"/>
                            {errors.pastParticiple && touched.pastParticiple ? <div>{errors.pastParticiple}</div> : null}
                        </div>
                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>


    </div>
);

export default LearningVerbs;