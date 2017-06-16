const firebase = require('./firebase_config');
const sign_up_in_firebase = require('./sign_up_in_firebase');

beforeEach(async () => {
  try {
    await firebase.auth()
        .signInWithEmailAndPassword('joe@gmail.com', '123456');
    await firebase.auth().currentUser.delete();
  } catch (err) {
  }
});

test('creates user joe with wrong phone length', async () => {
  expect(await sign_up_in_firebase('joe@gmail.com', '456789', '123456'))
      .toBe(undefined);
});

test('creates user joe with correct phone length', async () => {
  expect(await sign_up_in_firebase('joe@gmail.com', '(123) 456-7890', '123456'))
      .toBe('(123) 456-7890');
});
