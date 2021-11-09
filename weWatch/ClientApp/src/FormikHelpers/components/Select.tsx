import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Select: FC = (props: any) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {options.map((option: any) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            {
                //FIXME: typescript error with props
                //<ErrorMessage component={TextError} name={name} />
            }
        </div>
    );
};

export default Select;