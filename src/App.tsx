import * as React from 'react';
import './App.css';
import Overview from "./components/Overview";

class App extends React.Component<any, any> {

    public onClick = (): void => {
        // this.props.fetchReservations();
    };

    public render() {
        return (
                <div className="App">
                    <Overview/>
                    <button onClick={this.onClick}>Test</button>
                </div>
        );
    }
}

export default (App);
