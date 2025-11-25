import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KVKKPage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      <div className="max-container padding-container py-24">
        <div className="max-w-4xl mx-auto bg-[#0a1a2f] p-8 md:p-16 rounded-xl border border-white/5">
            
            <h1 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6 text-[#f1c40f]">
                KVKK Aydınlatma Metni
            </h1>

            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-loose font-light">
                <p>
                    <strong>1. Veri Sorumlusu:</strong> Birleşik Fenerbahçeliler Derneği (BİRFED) olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.
                </p>
                <p>
                    <strong>2. Kişisel Verilerin Toplanması:</strong> Üyelik başvurusu, etkinlik kayıtları ve iletişim formları aracılığıyla ad, soyad, telefon ve e-posta bilgileriniz toplanmaktadır.
                </p>
                <p>
                    <strong>3. İşleme Amacı:</strong> Toplanan veriler, dernek faaliyetlerinin yürütülmesi, üyelerle iletişim kurulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
                </p>
                <p>
                    <strong>4. Haklarınız:</strong> KVKK'nın 11. maddesi uyarınca verilerinizin silinmesini veya düzeltilmesini talep etme hakkına sahipsiniz.
                </p>
            </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}