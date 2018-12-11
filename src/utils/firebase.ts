import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from "../config";

export const app = firebase.initializeApp(FIREBASE_CONFIG);
// export const firebaseAuth = app.auth();
export const database = app.database();
export const fireStore = app.firestore();
// export const firebaseMessaging = app.messaging();
// export const firebaseFunctions = app.functions();


export const FireBaseManager = {
    getDatabaseReference: (path: string) => database.ref(path),
    getFireStoreReference: (path: string) => fireStore.collection(path),
};
