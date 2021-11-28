import React, {useEffect, useRef, useState} from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import markerIcon from '../../../assets/marker.png';
import {child, get} from "firebase/database";
import scansRef from "../../../firebase/config";

const containerStyle = {
    width: '100%',
    height: '100%'
};

export interface Scan {
    date?: string;
    latitude: string;
    longitude: string;
}

function GoogleMapComponent() {

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


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
            onDragEnd={handleCenter}
            onLoad={handleLoad}
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
