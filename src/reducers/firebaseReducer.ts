import {
    SET_OBJECTS,
} from '../actions/types';

interface IAction {
    type: string,
    data: any
}

const initialState = {
    objects: [],
};

export default function (state = initialState, action: IAction) {
    switch (action.type) {

        case SET_OBJECTS:
            return {
                ...state,
                objects: action.data
            };

        default:
            return state;
    }
}
