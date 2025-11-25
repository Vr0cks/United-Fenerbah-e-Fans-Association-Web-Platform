import Image from "next/image";
import { FadeIn } from "@/components/Motion"; // <--- BU SATIRI EKLE

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#000d21]">
      
      {/* 1. KATMAN: ARKAPLAN (Sabit kalabilir veya çok yavaş zoom yapılabilir ama şimdilik sabit kalsın) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image 
          src="/bg-stadium.jpg" 
          alt="Ülker Stadyumu Atmosferi" 
          fill 
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000d21]/80 via-[#000d21]/70 to-[#000d21]/90"></div>
      </div>

      {/* 3. KATMAN: İÇERİK (Yazılar Ortada) */}
      {/* DEĞİŞİKLİK: 'pt-32' eklendi (mobilde aşağı itmek için), 'md:pt-0' ile masaüstünde sıfırladık */}
      <div className="relative z-10 max-container padding-container flex flex-col items-center text-center pt-32 md:pt-0">
        
        {/* Üst Başlık - İlk gelir */}
        {/* Üst Başlık (Küçük & Prestijli) */}
        <FadeIn delay={0.2}>
          <p className="text-[#f1c40f] text-xs md:text-base tracking-[0.2em] uppercase mb-4 md:mb-6 font-bold">
            — ANKARA BİRLEŞİK FENERBAHÇELİLER DERNEĞİ —
          </p>
        </FadeIn>

        {/* Ana Başlık - Biraz bekleyip gelir */}
        {/* Ana Başlık (Büyük & Vurucu) */}
        {/* Yazı boyutunu mobilde 36px'e çektik ki taşmasın */}
        <FadeIn delay={0.4}>
          <h1 className="text-[36px] md:text-[90px] font-extrabold leading-[110%] text-white max-w-5xl drop-shadow-xl">
            Ankara'nın <span className="text-[#f1c40f]">Kalbi</span>, <br />
            Fenerbahçe'nin Gücü.
          </h1>
        </FadeIn>

        {/* Açıklama - Daha geç gelir */}
        <FadeIn delay={0.6}>
          <p className="mt-8 text-gray-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow-md">
            Büyük taraftarımızın enerjisini, kurumsal vizyon ve toplumsal fayda ile başkentte buluşturuyoruz.
          </p>
        </FadeIn>

        {/* Butonlar - En son gelir */}
        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full items-center">
            <button 
              type="button" 
              className="w-full sm:w-auto bg-[#f1c40f] text-[#002d72] px-10 py-4 font-bold rounded-sm hover:bg-white hover:scale-105 transition-all uppercase tracking-wider text-sm shadow-lg shadow-[#f1c40f]/20 max-w-sm"
            >
              Aramıza Katıl
            </button>
            <button 
              type="button" 
              className="w-full sm:w-auto border-2 border-white/80 text-white px-10 py-4 font-bold rounded-sm hover:bg-white hover:text-[#002d72] hover:border-white transition-all uppercase tracking-wider text-sm backdrop-blur-sm max-w-sm"
            > 
              İletişime Geç
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Hero