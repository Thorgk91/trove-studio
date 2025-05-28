// components/TextStep.tsx

import React from 'react'
import { useEditorStore } from '../store/editorStore'

const fontOptions: { id: string; label: string }[] = [
  { id: 'sans-serif', label: 'Sans Serif' },
  { id: 'serif',      label: 'Serif' },
  { id: 'monospace',  label: 'Monospace' },
  // hier kannst du noch weitere Fonts ergänzen
]

export default function TextStep() {
  const { text, setText, font, setFont, color, setColor } = useEditorStore((s) => ({
    text:     s.text,
    setText:  s.setText,
    font:     s.font,
    setFont:  s.setFont,
    color:    s.color,
    setColor: s.setColor,
  }))

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">Text & Schriftart</h2>

      {/* Text-Eingabe */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Text eingeben</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Dein Text hier…"
          className="border border-gray-300 rounded p-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Schriftart-Auswahl */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Schriftart wählen</label>
        <div className="flex gap-3">
          {fontOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setFont(f.id)}
              className={`
                px-3 py-1 border rounded transition-colors
                ${font === f.id
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
              `}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Textfarbe */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Textfarbe wählen</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-12 p-0 border-0"
          title="Textfarbe"
        />
      </div>
    </div>
  )
}
