// components/LayoutStep.tsx

import React from 'react'
import { useEditorStore, LayoutType } from '../store/editorStore'

const layoutOptions: { id: LayoutType; label: string }[] = [
  { id: 'single', label: 'Modern' },
  { id: 'double', label: 'Classic' },
  { id: 'grid',   label: 'Minimal' },
]

export default function LayoutStep() {
  const { layout, setLayout } = useEditorStore((s) => ({
    layout:    s.layout,
    setLayout: s.setLayout,
  }))

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Layout wählen</h2>
      <div className="grid grid-cols-3 gap-4">
        {layoutOptions.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setLayout(opt.id)}
            className={`
              cursor-pointer p-4 border rounded-lg text-center transition-colors
              ${layout === opt.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
            `}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  )
}
