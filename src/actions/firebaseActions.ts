import {SET_RESERVATIONS} from "./types";

export function setReservations(reservations: any[]) {
    return {
        type: SET_RESERVATIONS,
        data: reservations
    };
}
