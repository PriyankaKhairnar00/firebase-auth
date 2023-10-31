import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_-jTJJlsmNdaRtVAXeefXB8GC_1i1kUY",
  authDomain: "fir-auth-2023-7dfd8.firebaseapp.com",
  projectId: "fir-auth-2023-7dfd8",
  storageBucket: "fir-auth-2023-7dfd8.appspot.com",
  messagingSenderId: "997719450337",
  appId: "1:997719450337:web:c6182fa47d9dea28834da0",
  measurementId: "G-V1QSBD7QE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();/*Method call */

export {app,auth};