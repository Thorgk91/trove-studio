import React from 'react'
import { useEditorStore, LayoutOption } from '../store/editorStore'

const options: LayoutOption[] = ['Modern', 'Classic', 'Minimal']

export default function LayoutStep() {
  const layout = useEditorStore((s) => s.layout)
  const setLayout = useEditorStore((s) => s.setLayout)

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Wähle dein Layout</h2>
      <div className="flex gap-4">
        {options.map((opt) => {
          const selected = opt === layout
          return (
            <button
              key={opt}
              onClick={() => setLayout(opt)}
              className={
                'px-4 py-2 border rounded-md font-medium ' +
                (selected
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 hover:bg-gray-100')
              }
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
