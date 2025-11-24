import type { Metadata } from "next";
import "./globals.css";  // <--- BU SATIR ÇOK ÖNEMLİ! YOKSA CSS ÇALIŞMAZ.
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BİRFED - Birleşik Fenerbahçeliler Derneği",
  description: "Ankara Birleşik Fenerbahçeliler Derneği Resmi Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}