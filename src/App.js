import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from "react";
import './App.css'
import 'leaflet/dist/leaflet.css'
import DisplayPosition from './components/DisplayPosition'
import icon from './components/MarkerIcon' 
import MyComponent from './components/MyComponent';
import {dataPoints} from './data/Data'
import {HeatmapLayer} from "react-leaflet-heatmap-layer-v3";

const center = [51.505, -0.09]
const zoom = 13
function App() {
  const [map2, setMap] = useState(null)
  return (
    <div>
      {map2 ? <DisplayPosition map={map2} /> : null}

      {
        <MapContainer ref={setMap} center={center} zoom={zoom}>
           <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={dataPoints}
            longitudeExtractor={m => m.coordinates[0]}
            latitudeExtractor={m => m.coordinates[1]}
            intensityExtractor={m => parseFloat(m[2])} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent />
          <Marker position={[38.9072, -77.0369]} icon={icon} >
            <Popup>
            </Popup>
          </Marker>
        </MapContainer>}
    </div>
  )
}

export default App;
