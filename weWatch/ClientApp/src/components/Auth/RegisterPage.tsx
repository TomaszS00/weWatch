import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikHelpers/FormikControl'
import { Link } from 'react-router-dom'

import { history } from '../history';
import SubmitButton from '../../FormikHelpers/components/SubmitButton'

const RegisterPage: FC = () => {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
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
                                type='text'
                                label='Name'
                                name='name'
                            />
                            <FormikControl
                                control='input'
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
                            <SubmitButton
                                isDisabled={!isValid}
                                text='Sign up'
                            />
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default RegisterPage