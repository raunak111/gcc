import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import './MapComp.css';
import CustomPopup from './CustomPopup';
// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import 'react-leaflet-markercluster/dist/styles.min.css';
// import { NightRegion } from 'react-leaflet-night-region'
import cities from './cities.json';

export default function MapComp() {
    const markerIconInfraRed = new L.Icon({
        iconUrl: require("./purpleRed.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });
    const markerIconInfraGreen = new L.Icon({
        iconUrl: require("./purpleGreen.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });
    const markerIconInfraYellow = new L.Icon({
        iconUrl: require("./purpleYellow.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });

    const markerIconInfraGrey = new L.Icon({
        iconUrl: require("./purpleGrey.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });

    const markerIconNetworkRed = new L.Icon({
        iconUrl: require("./orangeRed.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });

    const markerIconNetworkGreen = new L.Icon({
        iconUrl: require("./orangeGreen.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });
    const markerIconNetworkYellow = new L.Icon({
        iconUrl: require("./orangeYellow.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });
    const markerIconNetworkGrey = new L.Icon({
        iconUrl: require("./orangeGrey.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [3, -46]
    });

    return (
        <div>
            <Map className='containerMap' center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} attributionControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap='true'
                />

                {/* <NightRegion
                    fillColor='#00345c'
                    color='#001a2e'
                    refreshInterval={1000}
                /> */}
                {cities.map((city, idx) => {

                    let markerIcon = "";
                    if (city.type === 'infra' && city.status==="critical") {
                        markerIcon = markerIconInfraRed;
                    } else if (city.type === 'infra' && city.status==="warning"){
                        markerIcon = markerIconInfraYellow;;
                    }else if (city.type === 'infra' && city.status==="normal"){
                        markerIcon= markerIconInfraGreen;
                    }else if (city.type === 'infra' && city.status==="null"){
                        markerIcon= markerIconInfraGrey;
                    }else if (city.type === 'network' && city.status==="critical"){
                        markerIcon= markerIconNetworkRed;
                    }else if (city.type === 'network' && city.status==="warning"){
                        markerIcon= markerIconNetworkYellow;
                    }else if (city.type === 'network' && city.status==="normal"){
                        markerIcon= markerIconNetworkGreen;
                    }else{
                        markerIcon=markerIconNetworkGrey
                    }

                    return (
                        //  <MarkerClusterGroup>
                            <Marker position={[city.lat, city.lng]}
                                icon={markerIcon}
                                key={idx}>
                                <Popup>
                                    <CustomPopup city={city} />
                                </Popup>
                            </Marker>
                        //   </MarkerClusterGroup>
                    )
                })}
            </Map>
        </div >

    )

}