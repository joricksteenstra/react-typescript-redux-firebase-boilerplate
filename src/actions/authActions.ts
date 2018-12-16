import {SET_CURRENT_USER} from "./types";

export function setCurrentUser(user: any) {
    return {type: SET_CURRENT_USER, data: {user}}
}
