import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDmbhLQies1_EB84i3Nm3oAnR6yvkjLsC4",
  authDomain: "gdocsclone-c5e8f.firebaseapp.com",
  projectId: "gdocsclone-c5e8f",
  storageBucket: "gdocsclone-c5e8f.appspot.com",
  messagingSenderId: "447497475224",
  appId: "1:447497475224:web:ce31bbdb9eb9583dc12ced"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;