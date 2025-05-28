// components/MapPreview.tsx
import React, { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';

export default function MapPreview() {
  const [viewState, setViewState] = useState({
    longitude: 13.4050,
    latitude: 52.5200,
    zoom: 11
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      className="rounded-lg shadow-md"
    >
      <NavigationControl position="top-right" />
    </Map>
  );
}
