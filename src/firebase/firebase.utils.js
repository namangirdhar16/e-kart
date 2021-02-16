import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAVkF6GhPmZhqTjlXVTp7cl64QTHkZJhMo",
    authDomain: "e-kart-db-2ecd2.firebaseapp.com",
    projectId: "e-kart-db-2ecd2",
    storageBucket: "e-kart-db-2ecd2.appspot.com",
    messagingSenderId: "401958075335",
    appId: "1:401958075335:web:9b200ab4c107e345be37e2",
    measurementId: "G-DWZ4JD4S4T"
}
export const createsUserProfileDocument = async (userAuth , additionalData ) => {
  
  if(!userAuth)
  return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  const { displayName , email } = userAuth;
  //console.log(userRef);
  const createdAt = new Date();
  if(!snapShot.exists) 
  {
    try{
    await userRef.set(
      {
        displayName , 
        email , 
        createdAt , 
        ...additionalData
      }
    )
    }
    catch(err)
    {
      console.log('error encountered creating user' , err.message);
    }
  }
  // console.log(snapShot.exists);
  // console.log(snapShot);
  return userRef;
  
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

