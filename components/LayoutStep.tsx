// src/components/LayoutStep.tsx

import React from 'react'
import { useEditorStore, LayoutType, PosterType } from '../store/editorStore'

const posterOptions: { id: PosterType; src: string; label: string }[] = [
  { id: 'none',    src: '',                  label: 'Kein Poster' },
  { id: 'poster1', src: '/images/poster1.png', label: 'Poster 1' },
  { id: 'poster2', src: '/images/poster2.png', label: 'Poster 2' },
  { id: 'poster3', src: '/images/poster3.png', label: 'Poster 3' },
]

const layoutOptions: { id: LayoutType; label: string }[] = [
  { id: 'single', label: 'Modern' },
  { id: 'double', label: 'Classic' },
  { id: 'grid',   label: 'Minimal' },
]

export default function LayoutStep() {
  const { poster, setPoster, layout, setLayout } = useEditorStore((s) => ({
    poster:    s.poster,
    setPoster: s.setPoster,
    layout:    s.layout,
    setLayout: s.setLayout,
  }))

  return (
    <div className="p-4 space-y-8">
      {/* Poster-Auswahl */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Poster wählen</h2>
        <div className="grid grid-cols-4 gap-4">
          {posterOptions.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setPoster(opt.id)}
              className={`
                cursor-pointer border rounded-lg overflow-hidden transition-colors
                ${poster === opt.id ? 'border-blue-500' : 'border-gray-300'}
              `}
            >
              {opt.src ? (
                <img
                  src={opt.src}
                  alt={opt.label}
                  className="w-full h-32 object-cover"
                />
              ) : (
                <div className="w-full h-32 flex items-center justify-center text-gray-500">
                  {opt.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Layout-Auswahl */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Layout wählen</h2>
        <div className="grid grid-cols-3 gap-4">
          {layoutOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setLayout(opt.id)}
              className={`
                cursor-pointer p-4 border rounded-lg text-center transition-colors
                ${layout === opt.id
                  ? 'border-blue-500 bg-blue-50 font-semibold'
                  : 'border-gray-300 bg-white hover:bg-gray-100'}
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
