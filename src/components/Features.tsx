import React from 'react'
import { FadeIn, StaggerContainer, FadeInItem } from "@/components/Motion";

const Features = () => {
  return (
    // DEĞİŞİKLİK 1: Arka planı Koyu Lacivert (Holding Rengi) yaptık.
    <section className="bg-[#051120] py-16 md:py-32 relative overflow-hidden text-white">
      
      {/* Arka plan için çok hafif, zarif bir desen (Opsiyonel doku) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#002d72] via-[#051120] to-[#051120]"></div>

      <div className="max-container padding-container relative z-10">
        
        {/* ÜST KISIM: Sol tarafa dayalı, çok ciddi bir manifesto */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 border-b border-white/10 pb-10">
            <FadeIn>
                <div className="max-w-2xl">
                    <p className="text-[#f1c40f] text-sm tracking-[0.2em] uppercase font-bold mb-4">
                        Vizyonumuz & Misyonumuz
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                        Ankara'nın Kalbinde, <br />
                        <span className="font-bold text-white">Sarsılmaz Bir İrade.</span>
                    </h2>
                </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
                <p className="text-gray-400 max-w-md text-sm leading-relaxed text-right md:text-left">
                    BİRFED; bir dernekten fazlası, bir duruştur. 
                    Fenerbahçe'nin başkentteki diplomatik, sosyal ve kültürel kalesidir.
                </p>
            </FadeIn>
        </div>

        {/* KARTLAR: Kutu yok, çizgi var. Jilet gibi. */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-l border-white/10">
          {FEATURES.map((feature, index) => (
            <FadeInItem 
              key={feature.title} 
              // Kenarlıkları ayarladık, her biri bir "hücre" gibi duracak.
              className="group relative p-10 border-r border-b border-white/10 hover:bg-white/5 transition-all duration-500 cursor-default border-t border-t-white/10 lg:border-t-0"
            >
              {/* Hover Efekti: Üstte ince bir sarı çizgi belirir */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f1c40f] group-hover:w-full transition-all duration-700"></div>

              {/* İKON: Kutu yok, direkt zeminde, Altın Sarısı */}
              <div className="w-12 h-12 mb-8 text-[#f1c40f] group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-7 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </FadeInItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

// İKONLAR (Daha ince, minimalist çizgiler)
const IconBuilding = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>;
const IconHandshake = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" /></svg>; 
const IconUsers = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>;
const IconFlag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" /></svg>;

const FEATURES = [
  {
    title: 'KURUMSAL TEMSİL', // Hepsi büyük harf (Uppercase) daha ciddi durur
    icon: IconBuilding,
    description: 'Fenerbahçe Spor Kulübü’nün ilke ve değerlerini başkent Ankara’da resmiyet ve ciddiyetle temsil ediyoruz.',
  },
  {
    title: 'TOPLUMSAL SORUMLULUK',
    icon: IconHandshake,
    description: 'Sivil toplum kuruluşu bilinciyle, eğitim ve yardımlaşma projeleri geliştirerek topluma değer katıyoruz.',
  },
  {
    title: 'ANKARA LOBİSİ',
    icon: IconUsers,
    description: 'Bürokrasi ve iş dünyasındaki Fenerbahçeli kanaat önderlerini tek bir çatı altında buluşturuyoruz.',
  },
  {
    title: 'SARSILMAZ BAĞLILIK',
    icon: IconFlag,
    description: 'İyi günde ve kötü günde, Kulübümüzün haklarını savunmak ve sesini en gür şekilde duyurmak için varız.',
  },
];

export default Features