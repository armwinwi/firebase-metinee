import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import "./assets/main.css";

import"bootstrap/dist/css/bootstrap.css";
import"bootstrap/dist/js/bootstrap.js";

import"bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
const firebaseConfig = {
    apiKey: "AIzaSyD-gQuerwLYSa-qgpNMktNvjAaBgsuM9f0",
    authDomain: "cs313-dae3f.firebaseapp.com",
    projectId: "cs313-dae3f",
    storageBucket: "cs313-dae3f.appspot.com",
    messagingSenderId: "1043184258652",
    appId: "1:1043184258652:web:03cfb934d2fdf96a006099",
    measurementId: "G-G9FRTYZPTC"
  };
  

app.use(router);
const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);

app.mount("#app");


