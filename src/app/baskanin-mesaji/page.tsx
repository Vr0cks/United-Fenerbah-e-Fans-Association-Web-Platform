import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PresidentMessage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      <div className="max-container padding-container py-24">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* BAŞKAN FOTOĞRAFI (Buraya team-1.jpg'yi koyuyoruz şimdilik) */}
            <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/team-1.jpg" alt="Başkan" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">M. Burak Çeliker</h3>
                    <p className="text-[#f1c40f] text-sm uppercase tracking-wider">Yönetim Kurulu Başkanı</p>
                </div>
            </div>

            {/* MESAJ METNİ */}
            <div className="w-full md:w-2/3 space-y-6 text-gray-300 leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Değerli Renktaşlarım,</h1>
                <p>
                    Fenerbahçe, sadece bir spor kulübü değil, kökleri Kuva-yi Milliye'ye dayanan, 
                    Türkiye'nin en büyük sivil toplum örgütüdür. Bizler, bu büyük çınarın Ankara'daki dalları olarak, 
                    tarihimizden aldığımız güçle geleceğe yürüyoruz.
                </p>
                <p>
                    BİRFED olarak amacımız; Anıtkabir'in gölgesinde, Cumhuriyetin başkentinde, Fenerbahçe'yi 
                    en üst düzeyde temsil etmektir. Kurduğumuz bu yapı, sadece maç izlenen bir lokal değil, 
                    projelerin üretildiği, dostlukların pekiştiği ve topluma değer katan bir merkezdir.
                </p>
                <p>
                    Kapımız, kalbi sarı-lacivert atan, Atatürk ilke ve inkılaplarına bağlı herkese sonuna kadar açıktır.
                    Bu büyük yürüyüşte bizimle olduğunuz için teşekkür ederim.
                </p>
                <p className="font-serif italic text-xl text-white pt-4">Saygılarımla,</p>
                <Image src="/logo.png" alt="İmza" width={100} height={100} className="opacity-50" /> 
            </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}