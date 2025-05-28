import { create } from 'zustand'

export type LayoutOption = 'Modern' | 'Classic' | 'Minimal'
export type Step = 'Layout' | 'Style' | 'Text' | 'Frame'

interface EditorState {
  activeStep: Step
  setActiveStep: (step: Step) => void

  layout: LayoutOption
  setLayout: (layout: LayoutOption) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  // Navigation
  activeStep: 'Layout',
  setActiveStep: (step) => set({ activeStep: step }),

  // Layout-Step
  layout: 'Modern',
  setLayout: (layout) => set({ layout }),
}))
