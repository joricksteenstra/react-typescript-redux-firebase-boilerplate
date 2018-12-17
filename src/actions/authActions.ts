import {AuthActionTypes} from "./authTypes";

export function setCurrentUser(user: any) {
    return {
        type: AuthActionTypes.SetCurrentUser,
        user,
    };
}
