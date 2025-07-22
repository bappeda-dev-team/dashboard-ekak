'use client'

import { useUrlContext } from '@/context/UrlContext'; // Adjust the path accordingly
import { useBrandingContext } from '@/context/BrandingContext'; // Adjust the path accordingly
import LinkItem from "@/component/LinkItem";

export default function MainMenu() {
    const { perencanaanUrl, realisasiUrl, tppUrl, laporanUrl, manriskUrl, peraturanUrl } = useUrlContext();
    const { logo } = useBrandingContext();

    // default logo
    const logoSrc = logo;

    const linksMenu = [
        { href: perencanaanUrl, title: "Perencanaan", imgSrc: logoSrc, enabled: true },
        { href: realisasiUrl, title: "Realisasi", imgSrc: logoSrc, enabled: true },
        { href: laporanUrl, title: "Laporan", imgSrc: logoSrc, enabled: true },
        { href: tppUrl, title: "TPP", imgSrc: logoSrc, enabled: false },
        { href: peraturanUrl, title: "Peraturan Perundang-undangan dan Dokumen Lainnya", imgSrc: logoSrc, enabled: true },
    ];

    return (
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
    )
}
