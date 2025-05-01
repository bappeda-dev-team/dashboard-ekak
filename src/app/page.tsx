'use client'

import Image from "next/image";
import { Button } from "@mui/material";
import './globals.css';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

  const [Zoom, setZoom] = useState<boolean>(false);

  useEffect(() => {
    const handleZoomCheck = () => {
      const zoomLevel = window.devicePixelRatio;
      const zoomFactor = window.outerWidth / window.innerWidth;

      if (zoomLevel >= 2.5 || zoomFactor >= 2.5) {
        setZoom(true);
      } else {
        setZoom(false);
      }
    };

    window.addEventListener('resize', handleZoomCheck);
    handleZoomCheck(); // Panggil saat komponen mount

    return () => {
      window.removeEventListener('resize', handleZoomCheck);
    };
  }, []);

  return (
    <div className="h-screen">
      <header className="flex sticky top-0 flex-wrap gap-2 justify-between py-4 px-15 bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
          <h1 className="font-bold text-2xl text-black mb-2">KOTA SEMARANG</h1>
        </div>
        <Link href='#'>
          <Button variant="outlined" color="error">Keluar</Button>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center gap-10 px-15 py-5 mt-10">
        {/* PERENCANAAN */}
        <div className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer">
          <div className="max-w-[100px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="uppercase text-2xl font-bold">perencanaan</h1>
            <h1 className={`${Zoom ? 'hidden' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut officiis cupiditate sit amet optio eos recusandae non libero odio pariatur? Voluptate itaque, impedit fuga consequuntur dicta sint esse neque expedita?</h1>
          </div>
        </div>
        {/* REALISASI */}
        <div className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer">
          <div className="max-w-[100px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="uppercase text-2xl font-bold">realisasi</h1>
            <h1 className={`${Zoom ? 'hidden' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut officiis cupiditate sit amet optio eos recusandae non libero odio pariatur? Voluptate itaque, impedit fuga consequuntur dicta sint esse neque expedita?</h1>
          </div>
        </div>
        {/* TPP */}
        <div className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer">
          <div className="max-w-[100px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="uppercase text-2xl font-bold">tpp</h1>
            <h1 className={`${Zoom ? 'hidden' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut officiis cupiditate sit amet optio eos recusandae non libero odio pariatur? Voluptate itaque, impedit fuga consequuntur dicta sint esse neque expedita?</h1>
          </div>
        </div>
      </main >
    </div >
  );
}
