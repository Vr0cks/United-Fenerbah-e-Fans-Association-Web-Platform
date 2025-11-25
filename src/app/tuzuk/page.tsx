import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      <div className="max-container padding-container py-24">
        <div className="max-w-4xl mx-auto bg-[#0a1a2f] p-8 md:p-16 rounded-xl border border-white/5">
            
            <h1 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6">
                Dernek Tüzüğü / Yasal Metin
            </h1>

            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-loose">
                <p><strong>MADDE 1 - DERNEĞİN ADI VE MERKEZİ:</strong> Derneğin adı "Birleşik Fenerbahçeliler Derneği"dir. Derneğin merkezi Ankara'dır.</p>
                <p><strong>MADDE 2 - DERNEĞİN AMACI:</strong> Fenerbahçe Spor Kulübü'nün amaç ve ilkelerine hizmet etmek, üyeler arasında sosyal dayanışmayı sağlamaktır.</p>
                <p><strong>MADDE 3 - ÜYELİK KOŞULLARI:</strong> Medeni hakları kullanma ehliyetine sahip ve 18 yaşını bitirmiş herkes derneğe üye olabilir.</p>
                <p>*(Buraya uzun uzun lorem ipsum veya gerçek tüzük metni gelebilir...)*</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}