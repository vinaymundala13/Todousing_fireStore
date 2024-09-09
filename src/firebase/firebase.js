import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6EIHmJntxudRNy-6mfoCHHSu6z5hlRMQ",
  authDomain: "todo-application-33142.firebaseapp.com",
  projectId: "todo-application-33142",
  storageBucket: "todo-application-33142.appspot.com",
  messagingSenderId: "245376330684",
  appId: "1:245376330684:web:a1ecc78528250f7e1819b9",
  measurementId: "G-60D1JDT23E"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;

