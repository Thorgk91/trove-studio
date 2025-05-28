// pages/success.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">Danke für deine Bestellung!</h1>
      <p className="mb-6">Deine Zahlung wurde erfolgreich abgeschlossen.</p>
      <Link href="/">
        <a className="px-6 py-3 bg-accent text-white rounded-lg">Zurück zur Startseite</a>
      </Link>
    </div>
  );
}
