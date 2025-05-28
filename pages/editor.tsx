import dynamic from 'next/dynamic'
import React from 'react'
import { useEditorStore, Step } from '../store/editorStore'
import LayoutStep from '../components/LayoutStep'

const MapPreview = dynamic(() => import('../components/MapPreview'), {
  ssr: false,
})

const steps: Step[] = ['Layout', 'Style', 'Text', 'Frame']

export default function Editor() {
  const { activeStep, setActiveStep } = useEditorStore()

  // Rendert den aktuellen Step
  function renderStep() {
    switch (activeStep) {
      case 'Layout':
        return <LayoutStep />
      // später: StyleStep, TextStep, FrameStep
      default:
        return <div className="p-4">Noch nicht implementiert</div>
    }
  }

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-50 p-6 border-r">
        <h1 className="text-2xl font-bold mb-4">Editor Steps</h1>
        <ul className="space-y-2">
          {steps.map((step) => (
            <li key={step}>
              <button
                onClick={() => setActiveStep(step)}
                className={
                  'w-full text-left px-2 py-1 rounded ' +
                  (step === activeStep
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100')
                }
              >
                {step}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 grid grid-rows-[auto_1fr]">
        {/* Oben: Map-Preview */}
        <div className="h-1/2">
          <MapPreview />
        </div>

        {/* Unten: Step-Inhalte */}
        <div className="h-1/2 overflow-auto bg-white">
          {renderStep()}
        </div>
      </main>
    </div>
  )
}
