import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const CheckboxGroup: FC = (props: any) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name}>
                {({ field }: any) => {
                    return options.map((option: any) => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
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
    )
}

export default CheckboxGroup