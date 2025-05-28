import dynamic from 'next/dynamic';
import React from 'react';

const MapPreview = dynamic(() => import('../components/MapPreview'), { ssr: false });

export default function Editor() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Editor Steps</h2>
        <ul className="space-y-2">
          <li>Layout</li>
          <li>Style</li>
          <li>Text</li>
          <li>Frame</li>
        </ul>
      </aside>
      <main className="flex-1 relative">
        <MapPreview />
      </main>
    </div>
  );
}
