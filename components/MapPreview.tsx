// components/MapPreview.tsx

import React from 'react'
import { useEditorStore, FrameType } from '../store/editorStore'

export default function MapPreview() {
  const { layout, color, mapStyle, text, font, frame } = useEditorStore((s) => ({
    layout:    s.layout,
    color:     s.color,
    mapStyle:  s.mapStyle,
    text:      s.text,
    font:      s.font,
    frame:     s.frame,
  }))

  // Mapping der FrameType-Werte auf Tailwind-Klassen
  const frameClasses: Record<FrameType, string> = {
    none:   '',
    simple: 'border border-gray-400',
    fancy:  'border-4 border-dashed border-purple-600 p-1 rounded-lg',
  }

  // Optional: Mapping der Schriftarten (falls nötig)
  const fontClasses: Record<string, string> = {
    'sans-serif': 'font-sans',
    serif:        'font-serif',
    monospace:    'font-mono',
    // weitere Fonts hier ergänzen…
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Karten-Vorschau</h2>
      <div className={`relative w-full h-64 bg-gray-100 overflow-hidden ${frameClasses[frame]}`}>
        {/* Platzhalter-Karte */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Karte (Style: {mapStyle})
        </div>

        {/* Text-Overlay */}
        {text && (
          <div
            className={`
              absolute inset-0 flex items-center justify-center pointer-events-none
              ${fontClasses[font] ?? ''}
            `}
          >
            <span className="text-2xl" style={{ color }}>
              {text}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
