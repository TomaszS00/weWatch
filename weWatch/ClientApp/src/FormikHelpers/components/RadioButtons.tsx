import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const RadioButtons: FC = (props: any) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} >
                {({ field }: any) => {
                    return options.map((option: any) => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            {
                //FIXME: typescript error with props
                //<ErrorMessage component={TextError} name={name} />
            }
        </div>
    );
};

export default RadioButtons;