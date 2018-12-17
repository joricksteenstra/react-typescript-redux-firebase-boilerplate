import {Record} from "immutable";
import {Reducer} from "redux";
import FirebaseTypes, {FirebaseActionTypes} from "../actions/firebaseTypes";

export interface IFirebaseReducerState {
    objects: InterfaceObjectModel | null;
}

const stateDefaults: Record.Factory<IFirebaseReducerState> = Record({
    objects: null,
});

const reducer: Reducer = (state: Record<IFirebaseReducerState> = stateDefaults(), action: FirebaseTypes) => {
    switch (action.type) {
        case FirebaseActionTypes.SetObjects:
            return state.set('objects', action.objects);
        default:
            return state;
    }
};

export default reducer;
