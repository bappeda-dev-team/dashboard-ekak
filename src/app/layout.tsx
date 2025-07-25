import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UrlProvider } from "@/context/UrlContext"
import { BrandingProvider, appBranding } from "@/context/BrandingContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appBranding.title,
  description: appBranding.description,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UrlProvider>
          <BrandingProvider>
            {children}
          </BrandingProvider>
        </UrlProvider>
      </body>
    </html>
  );
}
