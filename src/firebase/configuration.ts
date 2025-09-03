import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqZ93J5fKkWfw63mYJYmwZwKBhUTgW9ho",
  authDomain: "qr-warehouse2.firebaseapp.com",
  projectId: "qr-warehouse2",
  storageBucket: "qr-warehouse2.firebasestorage.app",
  messagingSenderId: "251808559074",
  appId: "1:251808559074:web:4a0970e213c59c270153bb",
  measurementId: "G-32FN19FNDT",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}
