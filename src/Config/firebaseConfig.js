import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';
 
const firebaseConfig ={
  apiKey: "AIzaSyDp-fzqkFJWZufFGEbVK2CKG1FIFuhY_E8",
    authDomain: "wm6370-896c5.firebaseapp.com",
    databaseURL: "https://wm6370-896c5-default-rtdb.firebaseio.com",
    projectId: "wm6370-896c5",
    storageBucket: "wm6370-896c5.appspot.com",
    messagingSenderId: "741585991033",
    appId: "1:741585991033:web:e0499089052a8c18aeeba8",
    measurementId: "G-4K8Z4BHWF1"
};
if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

export default () =>{
    return (firebase, auth)
}