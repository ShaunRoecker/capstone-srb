import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  //FacebookAuthProvider, 
  //TwitterAuthProvider, 
  //GithubAuthProvider
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore,
        doc,
        getDoc,
        setDoc, }
from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA5_7jubMkChK6aHZqb64vhZIGoH4tK5kw",
    authDomain: "crwn-db-c4a77.firebaseapp.com",
    projectId: "crwn-db-c4a77",
    storageBucket: "crwn-db-c4a77.appspot.com",
    messagingSenderId: "934787951118",
    appId: "1:934787951118:web:c7bef77ff38f993b9aea5f"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
//const facebookProvider = new FacebookAuthProvider();
//const twitterProvider = new TwitterAuthProvider();
//const githubProvider = new GithubAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
//export const signInWithEmailAndPassword = () => {};
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    //console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    //console.log(userSnapshot.exists());
    //if user data does exist, we dont need to do anything (we already have the data)
    //if data does not exist, we want to set it in a collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })    
        } catch (error) {
            console.log('error creating the user', error.message);
        }
        
    }
    return userDocRef;


};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

}













