
import React, { useState,useEffect, useCallback, useMemo } from "react";

export default function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())
  
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        <button>reset</button>
      </p>
    )
  }