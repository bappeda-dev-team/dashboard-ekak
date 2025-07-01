'use client'

import { useEffect, useState } from 'react';
import { useBrandingContext } from '@/context/BrandingContext'; // Adjust the path accordingly
import Image from "next/image";
import Login from '@/component/Login';
import Logout from '@/component/Logout';
import MainMenu from '@/component/MainMenu';
import { User } from '@/app/types';
import { authenticate } from '@/lib/auth';
import './globals.css';

export default function Home() {
  const { title, logo } = useBrandingContext();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await authenticate();
        setUser(res);
      } catch (err) {
        console.error('Autentikasi gagal', err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="h-screen">
      <header className="flex sticky top-0 flex-wrap gap-2 justify-between py-4 px-15 bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
          />
          <h1 className="font-bold text-2xl text-black mb-2">{title}</h1>
        </div>
        {user ? <Logout /> : <Login />}
      </header>
      <MainMenu />
    </div >
  );
}
