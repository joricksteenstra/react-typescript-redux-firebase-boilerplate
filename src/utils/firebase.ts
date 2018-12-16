import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from "../config";

export const app = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = app.auth();
export const database = app.database();
export const fireStore = app.firestore();
// export const firebaseMessaging = app.messaging();
// export const firebaseFunctions = app.functions();


export const FireBaseManager = {
    getAuthReference: () => firebaseAuth,
    getDatabaseReference: (path: string) => database.ref(path),
    getFireStoreReference: (path: string) => fireStore.collection(path),

    signInWithEmailAndPassword(email: string, password: string): boolean {
        firebaseAuth.signInWithEmailAndPassword(email, password).then(() => {
            return true;
        }).catch(error => {
            return false;
        });
        return true;
    },

    createUserWithEmailAndPassword(email: string, password: string): boolean {
        firebaseAuth.createUserWithEmailAndPassword(email, password).then(() => {
            return true;
        }).catch(error => {
            return false;
        });
        return true;
    },

    isLoggedIn() {
        return firebaseAuth.currentUser !== null;
    },

    signOut() {
        return firebaseAuth.signOut().then(() => {
            // Sign-out successful.
        }).catch(error => {
            // An error happened.
        });
    }
};
