// components/Sidebar.tsx

'use client'
import React from 'react'
import { useEditorStore } from '../store/editorStore'
import {
  MapPin,
  Type,
  Droplet,
  ArrowsExpand,
  Frame,
  Star,
  Settings2,
} from 'lucide-react'

// Definiere die Schritt-Typen
export type EditorStep =
  | 'map'
  | 'labels'
  | 'style'
  | 'size'
  | 'frames'
  | 'icons'
  | 'advanced'

const stepConfig: { step: EditorStep; icon: React.ComponentType; label: string }[] = [
  { step: 'map',      icon: MapPin,       label: 'Location' },
  { step: 'labels',   icon: Type,         label: 'Labels' },
  { step: 'style',    icon: Droplet,      label: 'Style' },
  { step: 'size',     icon: ArrowsExpand, label: 'Size' },
  { step: 'frames',   icon: Frame,        label: 'Frames' },
  { step: 'icons',    icon: Star,         label: 'Icons' },
  { step: 'advanced', icon: Settings2,    label: 'Advanced' },
]

export default function Sidebar() {
  const { activeStep, setActiveStep } = useEditorStore((s) => ({
    activeStep: s.activeStep,
    setActiveStep: s.setActiveStep,
  }))

  return (
    <aside className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-6">
      {stepConfig.map(({ step, icon: Icon }) => (
        <button
          key={step}
          onClick={() => setActiveStep(step)}
          className={`p-2 rounded-lg transition-colors ${
            activeStep === step
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          title={stepConfig.find((c) => c.step === step)?.label}
        >
          <Icon size={24} />
        </button>
      ))}
    </aside>
  )
}