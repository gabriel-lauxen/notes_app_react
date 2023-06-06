import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLq7jwHVoNUXtF7ZLqDt29VJ2JrEjMw90",
  authDomain: "notes-react-38d81.firebaseapp.com",
  projectId: "notes-react-38d81",
  storageBucket: "notes-react-38d81.appspot.com",
  messagingSenderId: "950604911557",
  appId: "1:950604911557:web:f2a0f1fdccfbab923831ac",
  measurementId: "G-Y35XVM8N7R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
