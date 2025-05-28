// components/MapPreview.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

export default function MapPreview() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200">
     <div
       className="absolute inset-0 flex items-center justify-center pointer-events-none"
       style={{ fontFamily: font, color }}
     >
       {text}
     </div>
      <p className="text-gray-600">Map Preview Placeholder</p>
    </div>
  );
}
