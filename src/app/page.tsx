'use client'

import Image from "next/image";
import Link from "next/link";
import './globals.css';
import { TbLogout } from "react-icons/tb";
import { Button } from "@mui/material";

export default function Home() {

  // const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || "#";
  const urlPerencanaan = process.env.NEXT_PUBLIC_PERENCANAAN || "#";
  const urlRealisasi = process.env.NEXT_PUBLIC_REALISASI || "#";
  const urlTpp = process.env.NEXT_PUBLIC_TPP || "#";
  const urlLaporan = process.env.NEXT_PUBLIC_LAPORAN || "#";

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
          <h1 className="font-bold text-2xl text-black mb-2">E-MANER PEMERINTAH KOTA SEMARANG</h1>
        </div>
        <Link href="/Login">
          <Button 
            className="flex items-center gap-1"
            variant="outlined"
            color="error"
          >
            <TbLogout />
            LOGOUT
          </Button>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center gap-10 px-15 py-5 mt-10">
        {/* KEPEGAWAIAN */}
        <Link className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300" href="#">
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
            <h1 className="uppercase text-2xl font-bold">KEPEGAWAIAN</h1>
          </div>
        </Link>
        {/* PERENCANAAN */}
        <Link className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300" href={urlPerencanaan}>
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
          </div>
        </Link>
        <Link className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300" href={urlRealisasi}>
          {/* REALISASI */}
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
          </div>
        </Link>
        {/* LAPORAN */}
        <Link className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300" href={urlLaporan}>
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
            <h1 className="uppercase text-2xl font-bold">Laporan</h1>
          </div>
        </Link>
        {/* TPP */}
        <Link className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300" href={urlTpp}>
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
          </div>
        </Link>
      </main >
    </div >
  );
}
