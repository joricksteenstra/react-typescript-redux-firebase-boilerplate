import {FirebaseActionTypes} from "./firebaseTypes";

export function setObjects(objects: InterfaceObjectModel[]) {
    return {
        objects,
        type: FirebaseActionTypes.SetObjects,
    };
}
