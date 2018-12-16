import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import firebaseReducer from "./firebaseReducer";

const rootReducer = combineReducers({
    firebaseReducer,
    authReducer,
});

export default rootReducer;
