import SignIn from '@/components/signin';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <SignIn />
    </main>
  );
}
