import {
    SET_CURRENT_USER,
} from '../actions/types';

interface IAction {
    type: string,
    data: any
}

const initialState = {
    currentUser: {
        email: null
    },
    isLoggedIn: false
};

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.data.user,
                isLoggedIn: !!action.data.user,
            };

        default:
            return state;
    }
}
