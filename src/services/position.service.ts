import {child, getDatabase, push, ref, update} from "firebase/database";
import {Scan} from "../components/sections/GoogleMapSection/GoogleMapComponent";
import {initializeApp} from "firebase/app"

    export default function writePositionData(videoId) {
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
        const scansRef = ref(db, "scans/");
        const newPostKey = push(child(ref(db), 'scans')).key;
        const updates = {};
        navigator.geolocation.getCurrentPosition((position) => {
        updates[`/${newPostKey}`] = buildScanObject(position.coords.latitude, position.coords.longitude, videoId);
        update(scansRef,updates).then(r => console.log('successfully stored', r));
        });

    }

    function buildScanObject(latitude: number, longitude: number, videoId: number): Scan {
        return {
            latitude,
            longitude,
            date: new Date().toLocaleString(),
            video: videoId
        }
    }


