import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInitAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitAuthentication;