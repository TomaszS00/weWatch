import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikHelpers/FormikControl'
import { Link } from 'react-router-dom'

import { history } from '../history';

const LoginPage: FC = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = (values: any) => {
        console.log('Form data', values)
    }

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <>
            <button onClick={goToHomePage}>Back to homePage</button>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isValid }: any) => {
                    return (
                        <Form>
                            <FormikControl
                                control='input'
                                // control='chakraInput'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                            />
                            <button type='submit' disabled={(!isValid)}>Submit</button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default LoginPage