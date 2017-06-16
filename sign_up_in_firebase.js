const firebase = require('./firebase_config');

sign_up_in_firebase = async (email, phone, password) => {
  let userPhone;
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(
        email, password);
    await firebase.database().ref('/users/')
        .child(user.uid).child('phone').set(phone);
    userPhone = await firebase.database().ref('/users/')
        .child(user.uid).child('phone').once('value');
    return userPhone.val();
  } catch (err) {
    return userPhone;
  }
}

module.exports = sign_up_in_firebase;
