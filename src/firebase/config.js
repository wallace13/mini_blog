import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEsNjCPLPwkoWtXZ3prq_scnJEmGoQNr8",
  authDomain: "miniblog-bf93c.firebaseapp.com",
  projectId: "miniblog-bf93c",
  storageBucket: "miniblog-bf93c.appspot.com",
  messagingSenderId: "14703621448",
  appId: "1:14703621448:web:a768ec29da739c61eeaf7d"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };