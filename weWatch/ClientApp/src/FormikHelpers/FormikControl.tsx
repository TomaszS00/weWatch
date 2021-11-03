import React from 'react'
import CheckboxGroup from './components/CheckBoxGroup'
import DatePicker from './components/DatePicker'
import Input from './components/Input'
import RadioButtons from './components/RadioButtons'
import Select from './components/Select'
import Textarea from './components/TextArea'


function FormikControl(props: any) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl