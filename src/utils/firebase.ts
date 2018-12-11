import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from "../config";

export const app = firebase.initializeApp(FIREBASE_CONFIG);
// export const firebaseAuth = app.auth();
// export const firebaseDatabase = app.database();
export const firebaseFireStore = app.firestore();
// export const firebaseMessaging = app.messaging();
// export const firebaseFunctions = app.functions();
