import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Textarea: FC = (props: any) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
};

export default Textarea;