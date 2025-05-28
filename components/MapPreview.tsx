// components/MapPreview.tsx

'use client'
import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { useEditorStore, FrameType } from '../store/editorStore'

export default function MapPreview() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const { mapStyle, frame } = useEditorStore((s) => ({
    mapStyle: s.mapStyle,
    frame:    s.frame,
  }))

  // Tailwind-Klassen je FrameType
  const frameClasses: Record<FrameType, string> = {
    none:   '',
    simple: 'border border-gray-400',
    fancy:  'border-4 border-dashed border-purple-600 p-1 rounded-lg',
  }

  useEffect(() => {
    if (!mapRef.current && mapContainer.current) {
      // Stelle sicher, dass du 'mapbox-gl/dist/mapbox-gl.css' global importiert hast
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle.startsWith('mapbox://')
          ? mapStyle
          : `mapbox://styles/mapbox/${mapStyle}`,
        center: [0, 0],
        zoom: 2,
      })
      mapRef.current.addControl(new mapboxgl.NavigationControl())
    }
  }, [])

  // Bei Änderung von mapStyle das Karten-Layout aktualisieren
  useEffect(() => {
    if (mapRef.current) {
      const styleUrl = mapStyle.startsWith('mapbox://')
        ? mapStyle
        : `mapbox://styles/mapbox/${mapStyle}`
      mapRef.current.setStyle(styleUrl)
    }
  }, [mapStyle])

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Interaktive Karten-Vorschau</h2>
      <div
        ref={mapContainer}
        className={`relative w-full h-96 bg-gray-100 overflow-hidden ${frameClasses[frame]}`}
      />
    </div>
  )
}
