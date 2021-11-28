import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyBeHjhp2KuQRyYsFodKIaUmmuniMAY2_1A",
    authDomain: "citrus-x-lemon.firebaseapp.com",
    databaseURL: "https://citrus-x-lemon.firebaseio.com",
    projectId: "citrus-x-lemon",
    storageBucket: "citrus-x-lemon.appspot.com",
    messagingSenderId: "47508765259",
    appId: "1:47508765259:web:34c15eae9b5875c32e6bce",
    measurementId: "G-6Q4PNKYWSW"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const scansRef = ref(db, "/scans");
export default scansRef;
