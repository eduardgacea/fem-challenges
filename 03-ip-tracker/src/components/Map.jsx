import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function Map({ results }) {
    const [mapPosition, setMapPosition] = useState([
        results.location.lat,
        results.location.lng,
    ]);

    useEffect(
        function () {
            setMapPosition([results.location.lat, results.location.lng]);
        },
        [results],
    );

    return (
        <MapContainer
            center={mapPosition}
            zoom={16}
            scrollWheelZoom={true}
            className="h-screen"
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
                <Popup>Your IP location</Popup>
            </Marker>
            <ChangeCenter position={mapPosition} />
        </MapContainer>
    );
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

export default Map;
