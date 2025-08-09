  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth} from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBK76JNqcuEg8seYFJskj_72beJ2xkjh5A",
    authDomain: "absolutecinema-34954.firebaseapp.com",
    projectId: "absolutecinema-34954",
    storageBucket: "absolutecinema-34954.firebasestorage.app",
    messagingSenderId: "1060315931690",
    appId: "1:1060315931690:web:158c5b375e449b7f318f53",
    measurementId: "G-SNEHJG00DV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export  const auth = getAuth();