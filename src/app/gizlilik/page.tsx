import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      <div className="max-container padding-container py-24">
        <div className="max-w-4xl mx-auto bg-[#0a1a2f] p-8 md:p-16 rounded-xl border border-white/5">
            
            <h1 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6 text-[#f1c40f]">
                Gizlilik Politikası
            </h1>

            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-loose font-light">
                <p>
                    Bu Gizlilik Politikası, BİRFED web sitesini kullanan ziyaretçilerin kişisel bilgilerinin nasıl korunduğunu açıklar.
                </p>
                <p>
                    <strong>Çerezler (Cookies):</strong> Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla temel seviyede çerezler kullanmaktadır.
                </p>
                <p>
                    <strong>Bilgi Paylaşımı:</strong> Kişisel bilgileriniz, yasal zorunluluklar haricinde üçüncü şahıslarla asla paylaşılmamaktadır.
                </p>
                <p>
                    <strong>Güvenlik:</strong> Verileriniz, güncel güvenlik önlemleri ve şifreleme yöntemleri ile korunmaktadır.
                </p>
            </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}