// components/FrameStep.tsx

import React from 'react'
import { useEditorStore, FrameType } from '../store/editorStore'

const frameOptions: { id: FrameType; label: string }[] = [
  { id: 'none', label: 'Kein Rahmen' },
  { id: 'simple', label: 'Einfach' },
  { id: 'fancy', label: 'Verschnörkelt' },
]

export default function FrameStep() {
  const { frame, setFrame } = useEditorStore((s) => ({
    frame:    s.frame,
    setFrame: s.setFrame,
  }))

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Rahmen wählen</h2>
      <div className="grid grid-cols-3 gap-4">
        {frameOptions.map((f) => (
          <div
            key={f.id}
            onClick={() => setFrame(f.id)}
            className={`
              cursor-pointer p-4 border rounded-lg text-center transition-colors
              ${frame === f.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
            `}
          >
            {f.label}
          </div>
        ))}
      </div>
    </div>
  )
}
