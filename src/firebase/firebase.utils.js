import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFa2nm3KeQkGOKwjNLBJVg2fiI29OCIAQ",
    authDomain: "crwn-db-5407c.firebaseapp.com",
    projectId: "crwn-db-5407c",
    storageBucket: "crwn-db-5407c.appspot.com",
    messagingSenderId: "528057157384",
    appId: "1:528057157384:web:b66e1b9cdad491e8a68ebd"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

};



// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//access to GoogleAuthProvider Class to the auth library, do not forget the 'new'
const provider = new firebase.auth.GoogleAuthProvider();

//it popups googleauthprovider 
provider.setCustomParameters({prompt : 'select_account'});

//it takes the google signin only (there are a lot of types as twitter, linkedin...)
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;