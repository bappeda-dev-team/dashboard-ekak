'use client'

import { createContext, useContext } from "react"

interface BrandingContextType {
  title: string,
  description: string,
  logo: string
}

const BRANDING_TITLE = process.env.NEXT_PUBLIC_BRANDING_TITLE || 'KERTAS-KERJA';
const BRANDING_CLIENT_NAME = process.env.NEXT_PUBLIC_BRANDING_CLIENT_NAME || '-';
const BRANDING_CLIENT_LOGO = process.env.NEXT_PUBLIC_LOGO_URL || "/logo.png";
const brandingTitle = BRANDING_TITLE + " " + BRANDING_CLIENT_NAME

export const appBranding: BrandingContextType = {
  title: brandingTitle,
  description: 'App Kertas Kerja',
  logo: BRANDING_CLIENT_LOGO,
}
// context
const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export function BrandingProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <BrandingContext.Provider value={appBranding}>
      {children}
    </BrandingContext.Provider>
  );
}

export function useBrandingContext() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error("useBrandingContext must be used witihin a BrandingProvider")
  }
  return context;
}
