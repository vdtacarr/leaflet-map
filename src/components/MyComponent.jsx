import React, { useState } from "react";
import {Marker, Popup, useMapEvents } from 'react-leaflet'
import icon from "./MarkerIcon";

export default function MyComponent() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click: () => {
        map.locate([28.3852, -81.5639])
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    });
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }