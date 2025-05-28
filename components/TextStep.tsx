// components/TextStep.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

const fonts = ['Inter', 'Playfair Display', 'Plus Jakarta Sans'];

export default function TextStep() {
  const { text, setText, font, setFont } = useEditorStore((s) => ({
    text: s.text,
    setText: s.setText,
    font: s.font,
    setFont: s.setFont,
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-primary font-medium mb-1">Text eingeben</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-primary font-medium mb-1">Schriftart wählen</label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {fonts.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
