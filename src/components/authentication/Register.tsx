import * as React from 'react';
import {connect} from "react-redux";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {bindActionCreators} from "redux";
import {FireBaseManager} from "../../utils/firebase";

class Register extends React.Component<any, any> {
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

    public register = () => {
        const { email, password }: Readonly<any> = this.state;
        FireBaseManager.createUserWithEmailAndPassword(email, password);
    };

    public render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Registreren</CardTitle>
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
                        <Button onClick={this.register} className='float-right' color="success">Registreer</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state: any) {
    return {objects: state.firebaseReducer.objects};
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
