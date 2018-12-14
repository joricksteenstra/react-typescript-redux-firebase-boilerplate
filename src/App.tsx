import * as React from 'react';
import './App.css';
import Overview from "./components/Overview";

class App extends React.Component<any, any> {
    public render() {
        return (
                <div className="App">
                    <Overview/>
                </div>
        );
    }
}

export default (App);
