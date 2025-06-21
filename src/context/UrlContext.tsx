'use client'

import { createContext, useContext } from "react"

interface UrlContextType {
  authUrl: string;
  perencanaanUrl: string;
  realisasiUrl: string;
  tppUrl: string;
  laporanUrl: string;
  manriskUrl: string;
}

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "#";
const PERENCANAAN_URL = process.env.NEXT_PUBLIC_PERENCANAAN || "#";
const REALISASI_URL = process.env.NEXT_PUBLIC_REALISASI || "#";
const TPP_URL = process.env.NEXT_PUBLIC_TPP || "#";
const LAPORAN_URL = process.env.NEXT_PUBLIC_LAPORAN || "#";
const MANRISK_URL = process.env.NEXT_PUBLIC_MANRISK || "#";

// context
const UrlContext = createContext<UrlContextType | undefined>(undefined);

export function UrlProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <UrlContext.Provider value={{ authUrl: AUTH_URL, perencanaanUrl: PERENCANAAN_URL, realisasiUrl: REALISASI_URL, tppUrl: TPP_URL, laporanUrl: LAPORAN_URL, manriskUrl: MANRISK_URL }}>
      {children}
    </UrlContext.Provider>
  );
}

export function useUrlContext() {
  const context = useContext(UrlContext);
  if (context === undefined) {
    throw new Error("useUrlContext must be used witihin a UrlProvider")
  }
  return context;
}
