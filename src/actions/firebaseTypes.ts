export enum FirebaseActionTypes {
    SetObjects,
}

interface ISetObjects {
    type: FirebaseActionTypes.SetObjects;
    objects: InterfaceObjectModel;
}

type FirebaseTypes = ISetObjects;

export default FirebaseTypes;
