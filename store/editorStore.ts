// src/store/editorStore.ts

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Definiere hier am besten deine konkreten Typen für Layout und Frame
export type LayoutType = 'single' | 'double' | 'grid'
export type FrameType = 'none' | 'simple' | 'fancy'

export interface EditorState {
  // aktueller Schritt im Editor
  activeStep: number
  setActiveStep: (step: number) => void

  // Layout-Konfiguration
  layout: LayoutType
  setLayout: (layout: LayoutType) => void

  // Farb-Einstellung
  color: string
  setColor: (color: string) => void

  // Karten-Stil
  mapStyle: string
  setMapStyle: (style: string) => void

  // Freier Text und Schriftart
  text: string
  setText: (text: string) => void

  font: string
  setFont: (font: string) => void

  // Rahmen-Einstellung
  frame: FrameType
  setFrame: (frame: FrameType) => void
}

export const useEditorStore = create<EditorState>()(
  devtools((set) => ({
    // === Initial-Zustand ===
    activeStep: 0,
    layout: 'single',
    color: '#000000',
    mapStyle: 'streets-v11',
    text: '',
    font: 'sans-serif',
    frame: 'none',

    // === Actions / Setter ===
    setActiveStep: (step) => set({ activeStep: step }),
    setLayout: (layout) => set({ layout }),
    setColor: (color) => set({ color }),
    setMapStyle: (mapStyle) => set({ mapStyle }),
    setText: (text) => set({ text }),
    setFont: (font) => set({ font }),
    setFrame: (frame) => set({ frame }),
  }))
)
