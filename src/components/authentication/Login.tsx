import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {bindActionCreators, Dispatch} from "redux";
import {setObjects} from 'src/actions/firebaseActions';
import {IApplicationState} from "../../reducers";
import {FireBaseManager} from "../../utils/firebase";

class Login extends React.Component<RouteComponentProps, any> {
    public static getDerivedStateFromProps(newProps: any) {
        if (newProps.isLoggedIn) {
            newProps.history.push('/')
        }
        return null
    }
    constructor(props: any) {
        super(props);
        this.state = {
            password: null,
            username: null,
        }
    }

    public handleChange = (e: any) => {
        this.setState({[e.target.name]: e.target.value});
    };

    public signIn = () => {
        const { email, password }: Readonly<any> = this.state;
        FireBaseManager.signInWithEmailAndPassword(email, password);
    };

    public render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row={true}>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input onChange={this.handleChange} name="email" id="exampleEmail" placeholder="with a placeholder"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row={true}>
                            <Label for="examplePassword" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input  onChange={this.handleChange} type="password" name="password" id="examplePassword"
                                        placeholder="password placeholder"/>
                            </Col>
                        </FormGroup>
                        <Button onClick={this.signIn} className='float-right' color="success">Inloggen</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

const actions = (dispatch: Dispatch) => bindActionCreators({
    setObjects,
}, dispatch);

const state = (s: IApplicationState) => ({
    isLoggedIn: s.authReducer.get('isLoggedIn')
});

export default connect(
    state,
    actions
)(Login);
