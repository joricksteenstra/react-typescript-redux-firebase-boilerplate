import ObjectModel from "../models/ObjectModel";
import {SET_OBJECTS} from "./types";

export function setObjects(objects: ObjectModel[]) {
    return {
        data: objects,
        type: SET_OBJECTS
    };
}
