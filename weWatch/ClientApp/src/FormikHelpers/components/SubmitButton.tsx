import React from 'react'
import { ISubmitButtonProps } from '../../typings/SubmitButton';

import styled from "styled-components";
import { colorStack } from '../../styleHelpers/colors';
import * as font from '../../styleHelpers/font';

const Button = styled.button`
    background: ${colorStack.secondary};
    color: ${colorStack.white};
    cursor: pointer;
    border: none;
    font-family: ${font.fontFamily.main};
    font-size: ${font.fontSize[14]};
    margin: 20px 0;
    outline: none;
    padding: 20px;
    text-transform: uppercase;
    transition: .2s;
    width: 280px;

    &:hover {
        background: ${colorStack.submitButtonHover};
    }
`

const SubmitButton = (props: ISubmitButtonProps) => {
    const { isDisabled, text } = props;

    return (
        <Button type='submit' disabled={isDisabled}>{text}</Button>
    );
}

export default SubmitButton