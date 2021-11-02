import React, { FC } from 'react';
import styled from 'styled-components';
// import { instanceConfig } from '../instance'; // need to add instanceConfig for global config

const Wrapper = styled.div`
    height: 100%;
`;

export const PageNotFound: FC = () => {


    return (
        <Wrapper className="lcr-section lcr-margin-t2em">
            Error 404
        </Wrapper>
    );
};
