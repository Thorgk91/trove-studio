// pages/editor.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import { useEditorStore } from '../store/editorStore';
import LayoutStep from '../components/LayoutStep';
import StyleStep from '../components/StyleStep';
import TextStep from '../components/TextStep';
import FrameStep from '../components/FrameStep';

type Step = 'Layout' | 'Style' | 'Text' | 'Frame';

const MapPreview = dynamic(() => import('../components/MapPreview'), { ssr: false });

export default function Editor() {
  const { activeStep, setActiveStep } = useEditorStore();
  const steps: Step[] = ['Layout', 'Style', 'Text', 'Frame'];

  return (
    <div className="flex h-screen bg-bg">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-primary">Editor Steps</h2>
        <ul className="space-y-3">
          {steps.map((step) => (
            <li
              key={step}
              onClick={() => setActiveStep(step)}
              className={`text-gray-700 cursor-pointer transition-colors ${
                activeStep === step ? 'text-accent font-bold' : 'hover:text-accent'
              }`}
            >
              {step}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Map Preview */}
        <div className="h-2/3 flex items-center justify-center rounded-lg bg-white shadow mb-4">
          <MapPreview />
        </div>

        {/* Active Step Title */}
        <div className="text-2xl font-semibold text-primary mb-2">
          {activeStep} Step
        </div>

        {/* Step Content */}
        <div className="p-4 bg-white rounded-lg shadow">
          {activeStep === 'Layout' && <LayoutStep />}
          {activeStep === 'Style'  && <StyleStep />}
          {activeStep === 'Text'   && <TextStep />}
          {activeStep === 'Frame'  && <FrameStep />}

          {/* Checkout Button (nur im Frame-Step) */}
          {activeStep === 'Frame' && (
            <button
              onClick={async () => {
                const { url } = await fetch('/api/create-checkout-session', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(useEditorStore.getState()),
                }).then((res) => res.json());
                window.location.href = url;
              }}
              className="mt-4 w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Jetzt kaufen für 19,90 €
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
