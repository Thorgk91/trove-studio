// pages/index.tsx

import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-extrabold mb-8">Willkommen bei Trove Studio</h1>

      <nav className="space-x-4">
        {/* So geht’s ab Next.js 15: kein ⟨a⟩-Child mehr */}
        <Link href="/editor" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Zum Editor
        </Link>
        <Link href="/about" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
          Über uns
        </Link>
      </nav>
    </div>
  )
}
