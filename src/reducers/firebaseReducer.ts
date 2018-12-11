import * as firebase from 'firebase';
import {
FETCH_RESERVATIONS,
} from '../actions/types';
import {FireBaseManager} from "../utils/firebase";
import QuerySnapshot = firebase.firestore.QuerySnapshot;

interface IAction {
    type: string,
    data: any
}

const initialState = {
    reservations: [],
};

export default function (state = initialState, action: IAction) {
    switch (action.type) {

        case FETCH_RESERVATIONS:
            return fetchReservations();

        default:
            return state;
    }
}

function fetchReservations() {
    FireBaseManager.getFireStoreReference('reservations')
        .onSnapshot((querySnapshot: QuerySnapshot) => {
            return querySnapshot;
        });
    ;
}
