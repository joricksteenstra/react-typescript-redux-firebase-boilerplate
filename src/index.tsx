import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import * as promiseMiddleware from 'redux-promise';
import App from './App';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

// @ts-ignore
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
