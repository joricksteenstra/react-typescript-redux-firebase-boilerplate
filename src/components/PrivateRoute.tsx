import * as React from 'react';
import { Redirect, Route } from 'react-router-dom'
import {FireBaseManager} from "../utils/firebase";

const PrivateRoute = ({ component: Component, ...rest } : any) => {

    // Add your own authentication on the below line.
    const isLoggedIn = FireBaseManager.isLoggedIn();

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
};

export default PrivateRoute
