// store/editorStore.ts
import create from 'zustand';

type Step = 'Layout' | 'Style' | 'Text' | 'Frame';

interface EditorState {
  activeStep: Step;
  setActiveStep: (step: Step) => void;
  layout: string;
  setLayout: (layout: string) => void;
  color: string;
  setColor: (color: string) => void;
  mapStyle: string;
  setMapStyle: (style: string) => void;
  text: string;
  setText: (text: string) => void;
  font: string;
  setFont: (font: string) => void;
  frame: string;               // neu
  setFrame: (frame: string) => void; // neu
}

export const useEditorStore = create<EditorState>((set) => ({
  activeStep: 'Layout',
  setActiveStep: (step) => set({ activeStep: step }),
  layout: 'modern',
  setLayout: (layout) => set({ layout }),
  color: '#CBA27C',
  setColor: (color) => set({ color }),
  mapStyle: 'mapbox/light-v10',
  setMapStyle: (mapStyle) => set({ mapStyle }),
  text: 'Dein Text hier',
  setText: (text) => set({ text }),
  font: 'Inter',
  setFont: (font) => set({ font }),
  frame: 'none',              // neu
  setFrame: (frame) => set({ frame }), // neu
}));
