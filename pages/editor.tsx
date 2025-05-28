// pages/editor.tsx

import dynamic from 'next/dynamic'
import React from 'react'
import { useEditorStore } from '../store/editorStore'
import LayoutStep from '../components/LayoutStep'
import StyleStep from '../components/StyleStep'
import TextStep from '../components/TextStep'
import FrameStep from '../components/FrameStep'

// MapPreview nur clientseitig laden (z.B. für mapbox)
const MapPreview = dynamic(() => import('../components/MapPreview'), { ssr: false })

export default function EditorPage() {
  const { activeStep, setActiveStep } = useEditorStore((s) => ({
    activeStep: s.activeStep,
    setActiveStep: s.setActiveStep,
  }))

  // Definition aller Schritte mit Label und Komponente
  const steps = [
    { id: 0, label: 'Layout', component: <LayoutStep /> },
    { id: 1, label: 'Style', component: <StyleStep /> },
    { id: 2, label: 'Text',  component: <TextStep /> },
    { id: 3, label: 'Frame', component: <FrameStep /> },
    { id: 4, label: 'Preview', component: <MapPreview /> },
  ]

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <nav>
          <ul>
            {steps.map((step) => (
              <li
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  mb-2 cursor-pointer px-3 py-2 rounded
                  ${activeStep === step.id
                    ? 'bg-white font-semibold shadow'
                    : 'text-gray-600 hover:bg-gray-200'}
                `}
              >
                {step.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Hauptbereich: aktueller Schritt */}
      <main className="flex-1 p-6 overflow-auto bg-white">
        {steps.find((step) => step.id === activeStep)?.component}
      </main>
    </div>
  )
}
