import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const fbLogin = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    console.log('login result #24-->', result);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log('login data #24-->', data);

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // console.log('login facebookCredential #24-->', facebookCredential)

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      // Use it only when user Sign's up,
      // so create different social signup function
      .then(() => {
        //Once the user creation has happened successfully, we can add the currentUser into firestore
        //with the appropriate details.
        console.log('current User', auth().currentUser);
        // firestore().collection('users').doc(auth().currentUser.uid)
        // .set({
        //     fname: '',
        //     lname: '',
        //     email: auth().currentUser.email,
        //     createdAt: firestore.Timestamp.fromDate(new Date()),
        //     userImg: null,
        // })
        // //ensure we catch any errors at this stage to advise us if something does go wrong
        // .catch(error => {
        //     console.log('Something went wrong with added user to firestore: ', error);
        // })
      })
      //we need to catch the whole sign up process if it fails too.
      .catch((error) => {
        console.log('Something went wrong with sign up: ', error);
      });
  } catch (error) {
    console.log({error});
  }
};
//
const logOut = async () => {
  try {
    await auth().signOut();
    console.log('Log out successful');
  } catch (e) {
    console.log('Log out Not successful', e);
  }
};
//
const CurrentUser = () => {
  return auth().currentUser;

  // try {
  //   const currentuser = auth().currentUser;
  //   // console.log('current user', currentuser);
  //   return currentuser;
  // } catch (e) {
  //   alert('current user Not successful', e);
  // }
};
// /////////////////////////////////////////////////////////////////////////////////

const EmailSignin =()=>{

  auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    
    console.error(error);
  });
}
  
  
  
  
  // /////////////////////////////////////////////////////////////////////////////////
  export {fbLogin, logOut, CurrentUser,EmailSignin };
  