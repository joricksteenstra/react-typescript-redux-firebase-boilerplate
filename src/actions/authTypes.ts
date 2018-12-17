export enum AuthActionTypes {
    SetCurrentUser,
}

interface ISetCurrentUser {
    type: AuthActionTypes.SetCurrentUser
    user: any // IAuthenticatedUserInterface
}

type AuthActions = ISetCurrentUser;

export default AuthActions;
