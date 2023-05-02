import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

import s from './Login.module.css';

const Login = (props) => (
    <div className={s.loginForm}>
        <h1 className={s.loginTitle}>Login</h1>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(formData) => {
                props.login(formData.email,formData.password,formData.rememberMe)
            }}
            validationSchema={loginFormSchema}>
            {() => (
                <Form className={s.loginFormBody}>
                    <div className={s.loginFormGroup}>
                        <Field className={s.loginFormInput} type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage className={s.loginFormError} name="email" component="div"/>

                    <div className={s.loginFormGroup}>
                        <Field className={s.loginFormInput} type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <ErrorMessage className={s.loginFormError} name="password" component="div"/>

                    <div className={s.loginFormGroup}>
                        <Field className={s.loginFormCheckbox} type={'checkbox'} name={'rememberMe'} id="rememberMe"/>
                        <label className={s.loginFormLabel} htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button className={s.loginFormButton} type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;
