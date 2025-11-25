import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  // Bu satır kalsın, önemli
  metadataBase: new URL('https://www.birfed.org'), 

  title: {
    default: "BİRFED | Ankara Birleşik Fenerbahçeliler Derneği",
    template: "%s | BİRFED",
  },
  description: "Ankara'nın Kalbi, Fenerbahçe'nin Gücü. BİRFED, başkentte Fenerbahçe değerlerini temsil eden köklü bir sivil toplum kuruluşudur.",
  keywords: ["Fenerbahçe", "Ankara", "Dernek", "BİRFED", "STK", "Sarı Lacivert", "Aziz Yıldırım", "Ali Koç"],
  openGraph: {
    title: "BİRFED | Başkentin Sarı Lacivert Gücü",
    description: "Ankara Birleşik Fenerbahçeliler Derneği Resmi Web Sitesi.",
    url: "https://www.birfed.org",
    siteName: "BİRFED",
    locale: "tr_TR",
    type: "website",
    images: [{
        url: '/stadyum-gece.jpg',
        width: 1200,
        height: 630,
        alt: 'BİRFED Banner',
      }],
  },
  // BURADAKİ "icons" KISMINI SİLDİK. ÇÜNKÜ "icon.jpg" DOSYASI İŞİ HALLEDECEK.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <NextTopLoader 
            color="#f1c40f"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #f1c40f,0 0 5px #f1c40f"
        />
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}