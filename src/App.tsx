import * as React from 'react';
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import {bindActionCreators, Dispatch} from "redux";
import {setCurrentUser} from './actions/authActions';
import './App.css';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import NavBar from "./components/layout/NavBar";
import Overview from "./components/Overview";
import PrivateRoute from './components/PrivateRoute';
import {IApplicationState} from "./reducers";
import {FireBaseManager} from "./utils/firebase";
import history from "./utils/history";

class App extends React.Component<any, any> {
    public componentDidMount() {
        FireBaseManager.getAuthReference().onAuthStateChanged(user => {
            if (user) {
                this.props.setCurrentUser({
                    email: user.email
                });
            } else {
                this.props.setCurrentUser(null);
            }
        });
    }

    public render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                        <NavBar/>
                        <Container className="mt-5">
                            <Switch>
                                <PrivateRoute exact={true} path={'/'} component={Overview}/>
                                <Route exact={true} path={'/login'} component={Login}/>
                                <Route exact={true} path={'/register'} component={Register}/>
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </div>
        );
    }
}


const actions = (dispatch: Dispatch) => bindActionCreators({
    setCurrentUser,
}, dispatch);

const state = (s: IApplicationState) => ({});

export default connect(
    state,
    actions
)(App);
