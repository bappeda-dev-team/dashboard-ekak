'use client'

import LinkItem from "@/component/LinkItem";
import { useUrlContext } from '@/context/UrlContext'; // Adjust the path accordingly
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { TbLogin } from "react-icons/tb";
import './globals.css';

export default function Home() {

  const { authUrl, perencanaanUrl, realisasiUrl, tppUrl, laporanUrl } = useUrlContext();

  const linksMenu = [
    { href: perencanaanUrl, title: "Perencanaan", imgSrc: "/logo.png", enabled: true },
    { href: realisasiUrl, title: "Realisasi", imgSrc: "/logo.png", enabled: true },
    { href: laporanUrl, title: "Laporan", imgSrc: "/logo.png", enabled: true },
    { href: tppUrl, title: "TPP", imgSrc: "/logo.png", enabled: true },
  ];

  // TODO: pindah ke context dan ambil dari env
  const branding = {
    title: 'test'
  }

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
          <h1 className="font-bold text-2xl text-black mb-2">{branding.title}</h1>
        </div>
        <Link href={authUrl}>
          <Button
            className="flex items-center gap-1"
            variant="outlined"
            color="info"
          >
            <TbLogin />
            LOGIN
          </Button>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center gap-10 px-15 py-5 mt-10">
        {linksMenu.filter(link => link.enabled).map((link, index) => (
          <LinkItem
            key={index}
            href={link.href}
            title={link.title}
            imgSrc={link.imgSrc}
          />
        ))}
      </main >
    </div >
  );
}
