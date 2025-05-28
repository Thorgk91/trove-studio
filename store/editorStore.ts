// src/store/editorStore.ts

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// === neue Poster-Typen ===
export type PosterType = 'none' | 'poster1' | 'poster2' | 'poster3'

export type LayoutType = 'single' | 'double' | 'grid'
export type FrameType  = 'none' | 'simple' | 'fancy'

export interface EditorState {
  activeStep: number
  setActiveStep: (step: number) => void

  // Poster
  poster: PosterType
  setPoster: (poster: PosterType) => void

  // Layout
  layout: LayoutType
  setLayout: (layout: LayoutType) => void

  // Style
  color: string
  setColor: (color: string) => void
  mapStyle: string
  setMapStyle: (style: string) => void

  // Text
  text: string
  setText: (text: string) => void
  font: string
  setFont: (font: string) => void

  // Frame
  frame: FrameType
  setFrame: (frame: FrameType) => void
}

export const useEditorStore = create<EditorState>()(
  devtools((set) => ({
    activeStep: 0,
    setActiveStep: (step) => set({ activeStep: step }),

    poster: 'none',
    setPoster: (poster) => set({ poster }),

    layout: 'single',
    setLayout: (layout) => set({ layout }),

    color: '#000000',
    setColor: (color) => set({ color }),

    mapStyle: 'streets-v11',
    setMapStyle: (mapStyle) => set({ mapStyle }),

    text: '',
    setText: (text) => set({ text }),

    font: 'sans-serif',
    setFont: (font) => set({ font }),

    frame: 'none',
    setFrame: (frame) => set({ frame }),
  }))
)
