'use client'

import { createContext, useContext } from "react"

interface BrandingContextType {
  title: string;
  clientName: string;
  branding: {
    title: string
  }
}

const BRANDING_TITLE = process.env.NEXT_PUBLIC_BRANDING_TITLE || "";
const BRANDING_CLIENT_NAME = process.env.NEXT_PUBLIC_BRANDING_CLIENT_NAME || "";

// context
const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export function BrandingProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  const brandingTitle = BRANDING_TITLE + " " + BRANDING_CLIENT_NAME

  return (
    <BrandingContext.Provider value={{ title: BRANDING_TITLE, clientName: BRANDING_CLIENT_NAME, branding: { title: brandingTitle } }}>
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
