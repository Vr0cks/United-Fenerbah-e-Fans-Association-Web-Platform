import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#02060b] text-white flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#051120] border-r border-white/5 hidden md:flex flex-col p-6 shadow-2xl z-20">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 relative bg-white rounded-full overflow-hidden border-2 border-[#f1c40f]">
                <Image src="/logo.jpg" alt="Panel Logo" fill className="object-contain p-0.5" />
            </div>
            <h1 className="text-xl font-bold text-white">BİRFED <span className="text-[#f1c40f]">PANEL</span></h1>
        </div>
        
        <nav className="space-y-2">
            {/* SidebarLink'lere href ekledik */}
            <SidebarLink href="/admin/dashboard" label="Genel Bakış" active />
            <SidebarLink href="/admin/uyelikler" label="Üyelik Başvuruları" />
            <SidebarLink href="/admin/haberler" label="Haber Yönetimi" />
            <SidebarLink href="/admin/etkinlikler" label="Etkinlik Takvimi" />
            <SidebarLink href="/admin/mesajlar" label="Mesaj Kutusu" />
            <div className="pt-4 border-t border-white/10 mt-4">
                <SidebarLink href="/admin/ayarlar" label="Site Ayarları" />
                <SidebarLink href="/admin/yoneticiler" label="Yönetici Hesapları" />
            </div>
        </nav>
        
        <div className="mt-auto">
            <Link href="/" className="flex items-center gap-2 text-red-500 text-sm hover:bg-red-500/10 px-4 py-3 rounded-lg transition-all">
                <span>←</span> Çıkış Yap
            </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10 bg-[#0a1a2f] p-4 rounded-xl border border-white/5 shadow-lg">
            <h2 className="text-2xl font-bold text-white pl-2">Genel Bakış</h2>
            
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white">Admin</p>
                    <p className="text-xs text-gray-400">Süper Yönetici</p>
                </div>
                {/* LOGOLU PROFİL KISMI */}
                <div className="w-12 h-12 relative rounded-full border-2 border-[#f1c40f] overflow-hidden bg-white">
                    <Image src="/logo.jpg" alt="Admin" fill className="object-contain p-0.5" />
                </div>
            </div>
        </div>

        {/* İSTATİSTİKLER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <StatCard title="Aktif Üye" value="1,240" change="+12% Artış" icon="👥" />
            <StatCard title="Bekleyen Başvuru" value="45" change="İşlem Bekliyor" color="text-[#f1c40f]" icon="⏳" />
            <StatCard title="Toplam Etkinlik" value="86" change="Bu Yıl" icon="📅" />
            <StatCard title="Kasa Durumu" value="₺ 142.500" change="Güncel Bakiye" color="text-green-500" icon="💰" />
        </div>

        {/* TABLO */}
        <div className="bg-[#0a1a2f] rounded-xl border border-white/5 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Son Üyelik Başvuruları</h3>
                <button className="text-xs bg-white/5 hover:bg-white/10 px-3 py-2 rounded transition-colors">Tümünü Gör</button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-400">
                    <thead className="border-b border-white/10 text-xs uppercase font-bold text-[#f1c40f]">
                        <tr>
                            <th className="py-4 pl-2">Ad Soyad</th>
                            <th className="py-4">Meslek</th>
                            <th className="py-4">Başvuru Tarihi</th>
                            <th className="py-4">Durum</th>
                            <th className="py-4 text-right pr-2">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                        <TableRow name="Ahmet Yılmaz" job="Mühendis" date="Bugün, 14:30" status="Bekliyor" />
                        <TableRow name="Ayşe Demir" job="Avukat" date="Dün, 09:15" status="İnceleniyor" />
                        <TableRow name="Mehmet Öz" job="Doktor" date="23 Kas 2025" status="Onaylandı" />
                        <TableRow name="Canan Can" job="Öğretmen" date="22 Kas 2025" status="Bekliyor" />
                    </tbody>
                </table>
            </div>
        </div>

      </main>
    </div>
  )
}

// YARDIMCI BİLEŞENLER (Aşağıda kalmalı)

const SidebarLink = ({ href, label, active = false }: { href: string, label: string, active?: boolean }) => (
    <Link 
        href={href} 
        className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
            active 
            ? "bg-[#f1c40f] text-[#002d72] font-bold shadow-lg shadow-yellow-500/20" 
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
    >
        {label}
    </Link>
);

const StatCard = ({ title, value, change, color = "text-white", icon }: any) => (
    <div className="bg-[#0a1a2f] p-6 rounded-xl border border-white/5 hover:border-[#f1c40f]/30 transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-gray-400 text-xs uppercase font-bold tracking-wider">{title}</h4>
            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{icon}</span>
        </div>
        <p className={`text-3xl font-bold ${color} mb-1`}>{value}</p>
        <span className="text-xs text-gray-500 block">{change}</span>
    </div>
);

const TableRow = ({ name, job, date, status }: any) => (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
        <td className="py-4 pl-2 text-white">{name}</td>
        <td className="py-4">{job}</td>
        <td className="py-4">{date}</td>
        <td className="py-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                status === "Onaylandı" ? "bg-green-500/10 text-green-500 border border-green-500/20" : 
                status === "İnceleniyor" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
            }`}>
                {status}
            </span>
        </td>
        <td className="py-4 text-right pr-2">
            <button className="text-gray-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">Detay</button>
        </td>
    </tr>
);