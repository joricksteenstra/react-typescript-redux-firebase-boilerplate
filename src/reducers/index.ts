import {Record} from "immutable";
import {combineReducers, Reducer} from 'redux';
import authReducer, {IAuthReducerState} from "./authReducer";
import firebaseReducer, {IFirebaseReducerState} from "./firebaseReducer";

export interface IApplicationState {
    firebaseReducer: Record<IFirebaseReducerState>;
    authReducer: Record<IAuthReducerState>;
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    authReducer,
    firebaseReducer,
});


export default rootReducer;
