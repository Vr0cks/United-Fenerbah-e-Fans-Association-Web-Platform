"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";

// URL'deki İngilizce/kısa isimleri Türkçe Başlıklara çeviren sözlük
const PAGE_TITLES: { [key: string]: string } = {
  "uyelikler": "Üyelik Başvuruları",
  "haberler": "Haber Yönetimi",
  "etkinlikler": "Etkinlik Takvimi",
  "mesajlar": "Mesaj Kutusu",
  "ayarlar": "Site Ayarları",
  "yoneticiler": "Yönetici Hesapları"
};

export default function AdminDynamicPage() {
  const params = useParams();
  const pathname = usePathname();
  
  // URL'den gelen parametreyi al (örn: "ayarlar")
  const menuKey = params.menu as string;
  const pageTitle = PAGE_TITLES[menuKey] || "Sayfa Bulunamadı";

  return (
    <div className="min-h-screen bg-[#02060b] text-white flex">
      
      {/* SIDEBAR (Aynısını buraya da koyduk ki menü kaybolmasın) */}
      <aside className="w-64 bg-[#051120] border-r border-white/5 hidden md:flex flex-col p-6 shadow-2xl z-20">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 relative bg-white rounded-full overflow-hidden border-2 border-[#f1c40f]">
                <Image src="/logo.jpg" alt="Panel Logo" fill className="object-contain p-0.5" />
            </div>
            <h1 className="text-xl font-bold text-white">BİRFED <span className="text-[#f1c40f]">PANEL</span></h1>
        </div>
        
        <nav className="space-y-2">
            <SidebarLink href="/admin/dashboard" label="Genel Bakış" isActive={false} />
            <SidebarLink href="/admin/uyelikler" label="Üyelik Başvuruları" isActive={pathname.includes("uyelikler")} />
            <SidebarLink href="/admin/haberler" label="Haber Yönetimi" isActive={pathname.includes("haberler")} />
            <SidebarLink href="/admin/etkinlikler" label="Etkinlik Takvimi" isActive={pathname.includes("etkinlikler")} />
            <SidebarLink href="/admin/mesajlar" label="Mesaj Kutusu" isActive={pathname.includes("mesajlar")} />
            <div className="pt-4 border-t border-white/10 mt-4">
                <SidebarLink href="/admin/ayarlar" label="Site Ayarları" isActive={pathname.includes("ayarlar")} />
                <SidebarLink href="/admin/yoneticiler" label="Yönetici Hesapları" isActive={pathname.includes("yoneticiler")} />
            </div>
        </nav>
        
        <div className="mt-auto">
            <Link href="/" className="flex items-center gap-2 text-red-500 text-sm hover:bg-red-500/10 px-4 py-3 rounded-lg transition-all">
                <span>←</span> Çıkış Yap
            </Link>
        </div>
      </aside>

      {/* İÇERİK ALANI */}
      <main className="flex-1 p-8 flex flex-col h-screen overflow-hidden">
        
        {/* Üst Bar */}
        <div className="flex justify-between items-center mb-10 bg-[#0a1a2f] p-4 rounded-xl border border-white/5 shadow-lg">
            <h2 className="text-2xl font-bold text-white pl-2">{pageTitle}</h2>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white">Admin</p>
                    <p className="text-xs text-gray-400">Süper Yönetici</p>
                </div>
                <div className="w-12 h-12 relative rounded-full border-2 border-[#f1c40f] overflow-hidden bg-white">
                    <Image src="/logo.jpg" alt="Admin" fill className="object-contain" />
                </div>
            </div>
        </div>

        {/* BOŞ DURUM (Placeholder) */}
        <div className="flex-1 bg-[#0a1a2f] rounded-xl border border-white/5 flex flex-col items-center justify-center text-center p-10 border-dashed border-2 border-white/10">
            <div className="w-24 h-24 bg-[#f1c40f]/10 text-[#f1c40f] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{pageTitle} Modülü</h3>
            <p className="text-gray-400 max-w-md">
                Bu modülün arayüz entegrasyonu tamamlanmış olup, backend (veritabanı) bağlantısı beklenmektedir.
            </p>
            <button className="mt-8 border border-[#f1c40f] text-[#f1c40f] px-6 py-3 rounded-lg hover:bg-[#f1c40f] hover:text-[#002d72] transition-all font-bold">
                Demo Veri Yükle
            </button>
        </div>

      </main>
    </div>
  )
}

// Helper
const SidebarLink = ({ href, label, isActive }: any) => (
    <Link 
        href={href} 
        className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive
            ? "bg-[#f1c40f] text-[#002d72] font-bold shadow-lg shadow-yellow-500/20" 
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
    >
        {label}
    </Link>
);