import dynamic from 'next/dynamic';
import React from 'react';

const MapPreview = dynamic(() => import('../components/MapPreview'), { ssr: false });

@@ export default function Editor() {
-  return (
-    <div className="flex h-screen">
-      <aside className="w-1/4 bg-gray-100 p-4">
-        <h2 className="font-bold mb-4">Editor Steps</h2>
-        <ul className="space-y-2">
-          <li>Layout</li>
-          <li>Style</li>
-          <li>Text</li>
-          <li>Frame</li>
-        </ul>
-      </aside>
-      <main className="flex-1 relative">
-        <MapPreview />
-      </main>
-    </div>
-  );
+  return (
+    <div className="flex h-screen bg-bg">
+      <aside className="w-1/4 bg-white p-6 border-r border-gray-200">
+        <h2 className="text-xl font-semibold mb-4 text-primary">Editor Steps</h2>
+        <ul className="space-y-3">
+          {['Layout','Style','Text','Frame'].map(step => (
+            <li
+              key={step}
+              className="text-gray-700 cursor-pointer hover:text-accent transition-colors"
+            >
+              {step}
+            </li>
+          ))}
+        </ul>
+      </aside>
+      <main className="flex-1 p-6 overflow-auto">
+        <div className="h-full flex items-center justify-center rounded-lg bg-white shadow">
+          <MapPreview />
+        </div>
+      </main>
+    </div>
+  );
