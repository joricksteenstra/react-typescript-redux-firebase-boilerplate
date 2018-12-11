import {
SET_RESERVATIONS,
} from '../actions/types';

interface IAction {
    type: string,
    data: any
}

const initialState = {
    reservations: [],
};

export default function (state = initialState, action: IAction) {
    switch (action.type) {

        case SET_RESERVATIONS:
            return {
                ...state,
                reservations: action.data
            };

        default:
            return state;
    }
}
