import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import styled from "styled-components";
import TextError from './TextError'
import { colorStack } from '../../styleHelpers/colors';
import * as font from '../../styleHelpers/font';

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    color: ${colorStack.black};
    font-family: ${font.fontFamily.main};
    font-size: ${font.fontSize[14]};
    margin: 24px 0 7px;
`

const InputField = styled(Field)`
    background: ${colorStack.inputBackground};
    border: none;
    border-bottom: 2px solid ${colorStack.inputBorder};
    color: ${colorStack.black};
    font-family: ${font.fontFamily.main};
    font-size: ${font.fontSize[16]};
    outline: none;
    padding: 12px 20px;
    transition: .2s;
    width: 240px;

    &:focus {
        border-color: ${colorStack.primary}
    }
`

const Input: FC = (props: any) => {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <InputField id={name} name={name} {...rest} />
            {
                //FIXME: typescript error with props
                //<ErrorMessage component={TextError} name={name} />
            }
        </FormControl>
    );
};

export default Input