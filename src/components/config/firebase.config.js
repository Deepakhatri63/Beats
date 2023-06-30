import {getApp, getApps, initializeApp} from 'firebase/app';
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBPXyS0lTWTCJN8YMBM2WrbR3egIwG-OXc",
    authDomain: "beats-f2b57.firebaseapp.com",
    projectId: "beats-f2b57",
    storageBucket: "beats-f2b57.appspot.com",
    messagingSenderId: "1043335352323",
    appId: "1:1043335352323:web:bc263db46ab7e97dc0fe36"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const storage = getStorage(app);

  export {app,storage};
