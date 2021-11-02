import React, { FC } from 'react';

interface IProps {

}

const LoginPage: FC<IProps> = (props) => {
    return (
        <>
            <h2>Login Page</h2>
            {console.log(props, 'props')}
        </>

    );
};

export default LoginPage;