'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setToken } from '@/features/auth/authSlice';

const userLogin = async (email: string, password: string, dispatch: any) => {
  try {
    const response = await axios(
      'https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ email, password }),
      },
    );

    const data = await response.data;

    localStorage.setItem('token', data.authToken);
    dispatch(setToken(data.authToken));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    userLogin(email, password, dispatch);
  };

  return (
    <div className="flex justify-between gap-10 items-center">
      <div className=" w-1/2 p-5">
        <div className="bg-custom-violet text-gray-50 w-20 h-20 flex justify-center items-center p-2 text-xs rounded-lg m-auto">
          <h1 className="uppercase">Chatbot</h1>
        </div>
        <h1 className="font-extrabold text-center text-2xl mt-5 text-[#9095A1]">
          Log In
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4 mt-10">
          <label className="flex flex-col">
            <span className="text-red-500">Email</span>
            <input
              type="email"
              className="p-2 border border-gray-200 rounded-md outline-none"
              required
              placeholder="Please enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-red-500">Password</span>
            <input
              type="password"
              className="p-2 border border-gray-200 rounded-md outline-none"
              required
              placeholder="Please enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full bg-[#15ABFF] text-gray-50 p-2 rounded-md"
          >
            Log In
          </button>
        </form>
        <div className="">
          <p className="text-[#15ABFF]  mt-5 text-left">
            Don&apos;t have an account? <Link href="signup"> Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="w-full h-[100vh]">
        <Image
          src="/images/login-signup.png"
          alt="Login"
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
