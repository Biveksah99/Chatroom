import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqd2l0EilOg9lTULZ6a8Txurp9fVg7J5k",
  authDomain: "gyanda-room.firebaseapp.com",
  projectId: "gyanda-room",
  storageBucket: "gyanda-room.firebasestorage.app",
  messagingSenderId: "865505926443",
  appId: "1:865505926443:web:3cf38662c4dc84f18c396e",
  measurementId: "G-DGDLDNV7JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

