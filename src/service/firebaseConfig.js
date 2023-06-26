import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoB8uSF2D0tOqy79ntckJzh6SAxQ9NtAI",
  authDomain: "doe-sangue-81ad6.firebaseapp.com",
  projectId: "doe-sangue-81ad6",
  storageBucket: "doe-sangue-81ad6.appspot.com",
  messagingSenderId: "44095439520",
  appId: "1:44095439520:web:922617d61f49c113c2ffc5",
  measurementId: "G-9S44ZSYYXK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
