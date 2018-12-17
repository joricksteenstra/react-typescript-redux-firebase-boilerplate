import {Record} from "immutable";
import {Reducer} from "redux";
import AuthActions, {AuthActionTypes} from "../actions/authTypes";

export interface IAuthReducerState {
    currentUser: object; // IAuthenticatedUserInterface
    isLoggedIn: boolean;
}

const stateDefaults: Record.Factory<IAuthReducerState> = Record({
    currentUser: {
        email: null
    },
    isLoggedIn: false,
});

const reducer: Reducer = (state: Record<IAuthReducerState> = stateDefaults(), action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.SetCurrentUser:
            if (action.user !== null) {
                return state.set('currentUser', action.user)
                    .set('isLoggedIn', true);
            } else {
                return state.set('currentUser', action.user)
                    .set('isLoggedIn', false);
            }
        default:
            return state;
    }
};

export default reducer;
