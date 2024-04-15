// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKecC0ABflidrRjYxqz8eH7rXpZ5srR5A",
  authDomain: "disneyplus-clone-4211c.firebaseapp.com",
  projectId: "disneyplus-clone-4211c",
  storageBucket: "disneyplus-clone-4211c.appspot.com",
  messagingSenderId: "938792923658",
  appId: "1:938792923658:web:b48bd02311c7c9e42e25f3",
  measurementId: "G-H6M7T75Z5B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app, "gs://my-custom-bucket"); 


export {storage,db,auth,provider}

export default app;