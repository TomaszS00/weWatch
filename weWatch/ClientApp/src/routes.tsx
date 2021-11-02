// need to configure basic routes with
import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Switch, RouteComponentProps } from 'react-router';

import LoginPage from './components/Auth/LoginPage'
import { PageNotFound } from './components/404';

import Home from './routes/Home';

interface IRoute {
    exact?: boolean;
    path: string;
    component: React.ReactNode | ((props: RouteComponentProps) => React.ReactNode);
    private?: boolean;
    remountKey?: string;
};

interface IPrivateRoute {
    component?: any;
    dynamicRedirect?: any;
    isShadowAuth?: any;
};

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, dynamicRedirect: logicVar = false, isShadowAuth = false, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            // if (store.getState().context.isLoggedIn || isShadowAuth) {
            //     return (<Component {...props} />);
            // } else {
            //     !isShadowAuth && history.push(getLoginPath());
            //     return (<GlobalLoader isLoading />);
            // } // need to finish this when get data from api and so on...
            // return <Component {...props} />
            return <Component {...props} />
        }} />
);

const appRoutes: IRoute[] = [
    // { private: true, path: '/login', component: LoginPage },
    { exact: true, path: '/', component: props => <Home {...props} isHomeRoute />, remountKey: 'home' },
];

const defaultContainer = () => (
    <>
        <Switch>
            {appRoutes.map(appRoute => appRoute
                ? appRoute.private
                    ? <PrivateRoute key={appRoute.remountKey || appRoute.path} /* exact={appRoute.exact} path={appRoute.path} */ component={appRoute.component} /* isShadowAuth={store.getState().context.isShadowAuth} */ />
                    : <Route key={appRoute.remountKey || appRoute.path} exact={appRoute.exact} path={appRoute.path} render={routeProps => {
                        // if (appRoute.path !== '/' && !store.getState().context.isLoggedIn && getContextUserId() && !isIdTokenExpired(getContextUserId())) {
                        //     history.push(getLoginPath());
                        //     return (<GlobalLoader isLoading />);
                        // }
                        const Component = appRoute.component as React.ComponentClass<RouteComponentProps>;
                        return <Component  {...routeProps} />;
                    }} />
                : () => <PageNotFound />
            )}
        </Switch>
    </>
);

export const routes = (
    <Switch>

        <Route path="/login" component={LoginPage} />
        <Route path="/login" component={LoginPage} />

        <Route component={defaultContainer} />
        <Route component={() => <PageNotFound />} />
    </Switch>
);
