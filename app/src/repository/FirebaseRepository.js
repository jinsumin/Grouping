import firebase from 'react-native-firebase';

export default class FirebaseRepository {
  sendSignUpPhoneCode = async (phoneNumber) => {
    const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
    return confirmation;
  };
}
