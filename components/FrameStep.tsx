// components/FrameStep.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

const frames = [
  { id: 'none', label: 'Kein Rahmen' },
  { id: 'thin-black', label: 'Schwarz dünn' },
  { id: 'thin-white', label: 'Weiß dünn' },
  { id: 'wooden', label: 'Holz' },
];

export default function FrameStep() {
  const { frame, setFrame } = useEditorStore((s) => ({
    frame: s.frame,
    setFrame: s.setFrame,
  }));

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {frames.map((f) => (
        <div
          key={f.id}
          onClick={() => setFrame(f.id)}
          className={`
            cursor-pointer p-4 border rounded-lg text-center transition-colors
            ${frame === f.id
              ? 'border-accent bg-accent/10'
              : 'border-gray-200 hover:border-accent'}
          `}
        >
          {f.label}
        </div>
      ))}
    </div>
  );
}
