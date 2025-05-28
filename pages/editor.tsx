// pages/editor.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import { useEditorStore } from '../store/editorStore';

const MapPreview = dynamic(() => import('../components/MapPreview'), { ssr: false });

export default function Editor() {
  const { activeStep, setActiveStep } = useEditorStore();

  const steps: Step[] = ['Layout', 'Style', 'Text', 'Frame'];

  return (
    <div className="flex h-screen bg-bg">
      <aside className="w-1/4 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-primary">Editor Steps</h2>
        <ul className="space-y-3">
          {steps.map((step) => (
            <li
              key={step}
              onClick={() => setActiveStep(step)}
              className={`
                text-gray-700 cursor-pointer transition-colors
                ${activeStep === step ? 'text-accent font-bold' : 'hover:text-accent'}
              `}
            >
              {step}
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <div className="h-full flex flex-col">
          {/* Sidebar-Map Kombination oben */}
          <div className="flex-1 flex items-center justify-center rounded-lg bg-white shadow mb-4">
            <MapPreview />
          </div>
          {/* Aktueller Step-Titel */}
          <div className="text-2xl font-semibold text-primary mb-2">
            {activeStep} Step
          </div>
          {/* Platzhalter für die Step-Komponente */}
          <div className="p-4 bg-white rounded-lg shadow">
            {/* Hier später z.B. <LayoutStep /> oder <StyleStep /> */}
            Content for “{activeStep}”
          </div>
        </div>
      </main>
    </div>
  );
}
