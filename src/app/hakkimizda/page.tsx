import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      <div className="max-container padding-container py-24">
        
        {/* BAŞLIK */}
        <div className="mb-16 text-center">
            <p className="text-[#f1c40f] text-sm tracking-[0.2em] uppercase font-bold mb-3">BİZ KİMİZ?</p>
            <h1 className="text-4xl md:text-5xl font-bold">Kurumsal Kimlik</h1>
            <div className="w-24 h-1 bg-[#f1c40f] mx-auto mt-6"></div>
        </div>

        {/* İÇERİK */}
        <div className="max-w-4xl mx-auto space-y-12 text-gray-300 leading-relaxed text-lg font-light">
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Kuruluş ve Amaç</h2>
                <p>
                    Birleşik Fenerbahçeliler Derneği (BİRFED), Fenerbahçe Spor Kulübü'nün tüzük, ilke ve değerleri doğrultusunda; 
                    Başkent Ankara'da yaşayan Fenerbahçeliler arasında birlik, beraberlik ve dayanışmayı sağlamak amacıyla kurulmuş 
                    bağımsız bir sivil toplum kuruluşudur.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
                <p>
                    Büyük Fenerbahçe camiasının Ankara'daki sesi ve temsilcisi olarak; üyelerimizin sosyal, kültürel ve sportif 
                    ihtiyaçlarını karşılamak, Kulübümüzün haklarını her platformda savunmak ve toplumsal fayda üreten projelerle 
                    kamuoyunda saygınlık uyandırmaktır.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h2>
                <p>
                    Sadece bir taraftar derneği olmanın ötesine geçerek; bürokrasi, iş dünyası ve sivil toplum alanlarında 
                    etkin, sözü dinlenen, kurumsal yapısı ve projeleriyle Türkiye'ye örnek teşkil eden lider bir STK olmaktır.
                </p>
            </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}