// store/editorStore.ts
import create from 'zustand';

type Step = 'Layout' | 'Style' | 'Text' | 'Frame';

interface EditorState {
  activeStep: Step;
  setActiveStep: (step: Step) => void;
  layout: string;
  setLayout: (layout: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeStep: 'Layout',
  setActiveStep: (step) => set({ activeStep: step }),
  layout: 'modern',
  setLayout: (layout) => set({ layout }),
}));
