import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import universal from 'react-universal-component';
// import { options } from './route'; // need to add loader end etc
// import { Layout } from '../components/Layout/Layout'; // need to add global layout

const RouteComponent = universal<RouteComponentProps>(import('../components/Home/HomeContainer'), /* options */);

const Route: FC<RouteComponentProps & { isHomeRoute?: boolean; }> = (props) => (
    // <Layout isHomeRoute={props.isHomeRoute}>
    <>
        <RouteComponent {...props} />
    </>
);

export default Route;
