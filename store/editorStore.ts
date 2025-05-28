// store/editorStore.ts
import create from 'zustand';

type Step = 'Layout' | 'Style' | 'Text' | 'Frame';

interface EditorState {
  activeStep: Step;
  setActiveStep: (step: Step) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeStep: 'Layout',
  setActiveStep: (step) => set({ activeStep: step }),
}));
