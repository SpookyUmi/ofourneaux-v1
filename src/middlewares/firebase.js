import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

function uploadImage(image) {
  const uploadTask = storage.ref(`images/${image.name}`).put(image);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      snapshot => { },
      (error) => {
        reject(error);
        console.error('ERROR =>', error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            resolve(url);
          });
      },
    );
  });
}

export default uploadImage;
