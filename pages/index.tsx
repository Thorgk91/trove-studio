import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Trove Studio</h1>
      <p className="mt-4">
        <Link href="/editor">
          <a className="text-blue-500 underline">Go to Editor</a>
        </Link>
      </p>
    </div>
  );
}
