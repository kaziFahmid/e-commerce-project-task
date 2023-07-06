// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0J-lCDC51cafrr-HrczaTufMgXqHmcBA",
  authDomain: "e-commerce-project-cf506.firebaseapp.com",
  projectId: "e-commerce-project-cf506",
  storageBucket: "e-commerce-project-cf506.appspot.com",
  messagingSenderId: "90396779892",
  appId: "1:90396779892:web:993cf1bcfc93171657b821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app