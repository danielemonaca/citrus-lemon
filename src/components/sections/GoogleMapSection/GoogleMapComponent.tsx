import React, {useRef, useState} from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import markerIcon from '../../../assets/marker.png';

const containerStyle = {
    width: '100%',
    height: '100%'
};

function GoogleMapComponent() {

    const center = {
        lat: 41.902782,
        lng: 12.496365
    };

    const { isLoaded } = useJsApiLoader({
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

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
            onDragEnd={handleCenter}
            onLoad={handleLoad}
        >
            <Marker
                icon={markerIcon}
                position={center}

            >
            </Marker>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapComponent)
