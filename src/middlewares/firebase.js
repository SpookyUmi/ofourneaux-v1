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
  const imageFile = new File(
    [image],
    `${new Date().toISOString()}_${image.name}`,
    { type: image.type },
  );

  const uploadTask = storage.ref(`images/${imageFile.name}`).put(imageFile);

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
          .child(imageFile.name)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          });
      },
    );
  });
}

export default uploadImage;
