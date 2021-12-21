import React, {useEffect, useRef, useState} from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import markerIcon from '../../../assets/marker.png';
import {child, get, getDatabase, push, ref, update} from "firebase/database";
import scansRef from "../../../firebase/config";
import {initializeApp} from "firebase/app";

const containerStyle = {
    width: '100%',
    height: '100%'
};

export interface Scan {
    date?: string;
    latitude: number;
    longitude: number;
    video?: number;
}


export interface GooogleMapProps {
    clickable?: boolean
}

function GoogleMapComponent({clickable}: GooogleMapProps) {

    const [scans, setScans] = useState<Scan[]>([]);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCrhko7oOe2TB9_COTXZckSoqhpHWEJfLI"
    })

    const mapRef = useRef(null);
    const [position, setPosition] = useState({
        lat: 41.902782,
        lng: 12.496365
    });

    function handleLoad(map) {
        mapRef.current = map;
    }

    function handleCenter() {
        if (!mapRef.current) return;

        const newPos = mapRef.current.getCenter().toJSON();
        setPosition(newPos);
    }


    useEffect(() => {
        get(child(scansRef, `/`)).then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val() !== null) {
                    setScans(snapshot.val());
                }
            } else {

            }
        }).catch((error) => {
            console.log('Error getting data:', error);
        });
    }, []);

    const handleOnClick = (e) =>  {
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
        updates[`/${newPostKey}`] = {date: new Date().toLocaleString(), latitude:e.latLng.lat(), longitude:e.latLng.lng(), video: getRandomInt(3)+1};
        update(scansRef,updates).then(r => console.log('successfully stored', r));
        window.location.reload();

    }
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
            onDragEnd={handleCenter}
            onLoad={handleLoad}
            onClick={clickable && handleOnClick}
        >
            {scans &&
            // eslint-disable-next-line array-callback-return
            Object.values(scans).map((scan: Scan, index: number) => {
                if ((typeof (scan.latitude) === 'number' && typeof (scan.longitude) === 'number')) {
                    return (<Marker
                        key={scan.date ?? index}
                        icon={markerIcon}
                        position={{lat: scan.latitude, lng: scan.longitude}}
                    />)
                }
            })}

        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapComponent)
