// components/StyleStep.tsx
import React from 'react';
import { useEditorStore } from '../store/editorStore';

const colorOptions = [
  { value: '#CBA27C', label: 'Terracotta' },
  { value: '#D6BCA3', label: 'Beige' },
  { value: '#1A1A1A', label: 'Anthrazit' },
];

const mapStyles = [
  { value: 'mapbox/streets-v11', label: 'Streets' },
  { value: 'mapbox/light-v10', label: 'Light' },
  { value: 'mapbox/dark-v10', label: 'Dark' },
];

export default function StyleStep() {
  const { color, setColor, mapStyle, setMapStyle } = useEditorStore((s) => ({
    color: s.color,
    setColor: s.setColor,
    mapStyle: s.mapStyle,
    setMapStyle: s.setMapStyle,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-primary mb-2">Akzentfarbe wählen</h3>
        <div className="flex gap-4">
          {colorOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setColor(opt.value)}
              className={`
                w-8 h-8 rounded-full border-2 transition-transform 
                ${color === opt.value 
                  ? 'scale-110 border-accent'
                  : 'border-gray-300 hover:scale-105'}
              `}
              style={{ backgroundColor: opt.value }}
              aria-label={opt.label}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-primary mb-2">Kartenstil wählen</h3>
        <select
          value={mapStyle}
          onChange={(e) => setMapStyle(e.target.value)}
          className="p-2 border rounded shadow-sm"
        >
          {mapStyles.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
