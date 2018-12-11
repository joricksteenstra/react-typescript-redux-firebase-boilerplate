import { combineReducers } from 'redux';
import firebaseReducer from "./firebaseReducer";

const rootReducer = combineReducers({
    firebaseReducer ,
});

export default rootReducer;
