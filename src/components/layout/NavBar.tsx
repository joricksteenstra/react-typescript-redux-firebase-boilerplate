import * as React from 'react';
import {connect} from "react-redux";
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink as BootstrapNavLink
} from 'reactstrap';
import {bindActionCreators} from "redux";
import {FireBaseManager} from "../../utils/firebase";
import {setCurrentUser} from "../../actions/authActions";

interface IProps extends RouteComponentProps {
    isLoggedIn: boolean,
}

class NavBar extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    public toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };

    public signOut = () => {
        FireBaseManager.signOut();
    };

    public render() {
        const {isLoggedIn} = this.props;
        return (
            <div>
                <Navbar color="dark" light={true} expand="md">
                    <NavbarBrand className="text-white"><NavLink to={'/'}>LastWeek</NavLink></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        {!isLoggedIn ? (
                                <Nav className="ml-auto" pills={true} navbar={true}>
                                    <NavItem>
                                        <BootstrapNavLink
                                            className="text-white"><NavLink to={'/login'}
                                                                            className="text-white">Login</NavLink></BootstrapNavLink>
                                    </NavItem>
                                    <NavItem>
                                        <BootstrapNavLink
                                            className="text-white"><NavLink to={'/register'}
                                                                            className="text-white">Registreren</NavLink></BootstrapNavLink>
                                    </NavItem>
                                </Nav>
                            ) :
                            <Nav className="ml-auto" pills={true} navbar={true}>
                                <NavItem>
                                    <BootstrapNavLink
                                        className="text-white"><NavLink to={'/profile'}
                                                                        className="text-white">Profiel</NavLink></BootstrapNavLink>

                                </NavItem>
                                <NavItem>
                                    <BootstrapNavLink onClick={this.signOut}
                                                      className="text-white">Uitloggen</BootstrapNavLink>
                                </NavItem>
                            </Nav>
                        }
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({setCurrentUser}, dispatch);
}

function mapStateToProps(state: any) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        user: state.authReducer.currentUser,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
