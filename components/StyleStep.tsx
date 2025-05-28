// components/StyleStep.tsx

import React from 'react'
import { useEditorStore } from '../store/editorStore'

/**
 * Liste verfügbarer Mapbox-Styles.
 * Du kannst hier beliebig weitere Styles ergänzen
 * (siehe https://docs.mapbox.com/api/maps/#styles).
 */
const styleOptions: { id: string; label: string }[] = [
  { id: 'streets-v11',          label: 'Streets' },
  { id: 'outdoors-v11',         label: 'Outdoors' },
  { id: 'light-v10',            label: 'Light' },
  { id: 'dark-v10',             label: 'Dark' },
  { id: 'satellite-v9',         label: 'Satellite' },
  { id: 'satellite-streets-v11',label: 'Sat + Streets' },
]

export default function StyleStep() {
  const { mapStyle, setMapStyle } = useEditorStore((s) => ({
    mapStyle:    s.mapStyle,
    setMapStyle: s.setMapStyle,
  }))

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Karten-Stil wählen</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {styleOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setMapStyle(opt.id)}
            className={`
              cursor-pointer p-4 border rounded-lg text-center transition-colors
              ${mapStyle === opt.id
                ? 'border-blue-500 bg-blue-50 font-semibold'
                : 'border-gray-300 bg-white hover:bg-gray-100'}
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
