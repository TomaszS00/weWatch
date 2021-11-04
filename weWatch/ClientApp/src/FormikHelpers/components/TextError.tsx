import React, { FC } from 'react'

interface IProps {
    children: any;
}

const TextError: FC<IProps> = (props) => {
    return <div className='error'>{props.children}</div>;
}

export default TextError