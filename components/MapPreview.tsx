// components/MapPreview.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

export default function MapPreview() {
  const { text, font, color } = useEditorStore((state) => ({
    text: state.text,
    font: state.font,
    color: state.color,
    frame: state.frame,
  }));

  return (
    <div className={`relative h-full w-full bg-gray-200 ${frameClass}`}>
      {/* Text Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ fontFamily: font, color }}
      >
        {text}
      </div>
      {/* Placeholder Hinweis */}
      <p className="absolute bottom-4 right-4 text-xs text-gray-500">
        Map Preview Placeholder
      </p>
    </div>
  );
}
