import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Input: FC = (props: any) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            {
                //FIXME: typescript error with props
                //<ErrorMessage component={TextError} name={name} />
            }
        </div>
    );
};

export default Input