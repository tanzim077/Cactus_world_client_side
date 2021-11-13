import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px'
};

const position = {
    lat: 23.867806,
    lng: 90.399992
};

function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBED5c6MrM4nIdMAumLERZW_3eUzOKKnFE"
    })

    const [map, setMap] = React.useState(null)


    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

            <Marker
                onLoad={onLoad}
                position={position}
            />
        </GoogleMap>
    ) : <></>
}

export default React.memo(Maps)