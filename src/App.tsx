import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchReservations} from "./actions/firebaseActions";
import './App.css';

class App extends React.Component<any, any> {

    public onClick = (): void => {
        this.props.fetchReservations();
    };

    public render() {
        return (
                <div className="App">

                    <button onClick={this.onClick}>Test</button>
                </div>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ fetchReservations }, dispatch);
}


function mapStateToProps(state: any) {
    return { reservations: state.reservations };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
