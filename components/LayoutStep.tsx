// components/LayoutStep.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

const layouts = [
  { id: 'modern', label: 'Modern' },
  { id: 'classic', label: 'Classic' },
  { id: 'minimal', label: 'Minimal' },
];

export default function LayoutStep() {
  const { layout, setLayout } = useEditorStore((state) => ({
    layout: state.layout,
    setLayout: state.setLayout,
  }));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {layouts.map((l) => (
        <div
          key={l.id}
          onClick={() => setLayout(l.id)}
          className={`
            cursor-pointer p-4 border rounded-lg text-center
            ${layout === l.id
              ? 'border-accent bg-accent/10'
              : 'border-gray-200 hover:border-accent'}
          `}
        >
          {l.label}
        </div>
      ))}
    </div>
  );
}
