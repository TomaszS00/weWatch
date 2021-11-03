import React from 'react'
import CheckboxGroup from './components/CheckBoxGroup'
import DatePicker from './components/DatePicker'
import Input from './components/Input'
import RadioButtons from './components/RadioButtons'
import Select from './components/Select'
import Textarea from './components/TextArea'


function FormikControl(props: any) {
  const { control, ...rest } = props;

  enum FormikControl {
    input = 'input',
    textarea = 'textarea',
    select = 'select',
    radio = 'radio',
    checkbox = 'checkbox',
    date = 'date'
  };


  switch (control) {

    case FormikControl.input:
      return <Input {...rest} />

    case FormikControl.textarea:
      return <Textarea {...rest} />

    case FormikControl.select:
      return <Select {...rest} />

    case FormikControl.radio:
      return <RadioButtons {...rest} />

    case FormikControl.checkbox:
      return <CheckboxGroup {...rest} />

    case FormikControl.date:
      return <DatePicker {...rest} />

    default:
      return null
  }
}

export default FormikControl