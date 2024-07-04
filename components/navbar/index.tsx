'use client';
import { setToken } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router]);

  return (
    <nav className="flex justify-between py-3 px-8 items-center border-b">
      <div className="bg-custom-violet text-gray-50 w-16 h-16 flex justify-center items-center p-2 text-xs rounded-lg">
        <h1 className="uppercase">Chatbot</h1>
      </div>
      <div>
        <button
          className="bg-custom-violet p-2 text-gray-50 px-7 rounded-md"
          onClick={() => {
            localStorage.removeItem('token');
            dispatch(setToken(''));
            window.location.href = '/';
            router.push('/');
          }}
        >
          Log out
        </button>
      </div>
    </nav>
  );
}
