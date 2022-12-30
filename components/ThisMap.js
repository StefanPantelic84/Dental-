
import React from 'react'
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'

function ThisMap() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyAYkGYvoHd9v94mBq14GAut5T_fJNJeaH4"
    })

    const myMarker = {lat:44.80399304232847, lng:20.37403948272331}

    if (!isLoaded) {
        return (<div>...is loading</div>)
    }else {
        return(
            <div>
                <GoogleMap 
                    zoom={19} 
                    center={myMarker} 
                    mapContainerClassName="connect-img2"
                   
                    > 
                    <MarkerF position={myMarker} />
                    
                </GoogleMap>
            </div>
        )
    }
}


export default ThisMap