import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import Link from "next/link";   

export default function ActivitiesPage() {
  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50 shadow-md">
          <Navbar />
      </div>

      <div className="max-container padding-container py-24">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
            <p className="text-[#f1c40f] text-sm tracking-[0.2em] uppercase font-bold mb-3">
                ARŞİV & GÜNDEM
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
                Tüm Faaliyetlerimiz
            </h1>
            <div className="w-24 h-1 bg-[#f1c40f] mx-auto mt-6"></div>
        </div>

        {/* PROJE GRID'İ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project) => (
            // LİNK GÜNCELLENDİ: /faaliyetler/[id]
            <Link href={`/faaliyetler/${project.id}`} key={project.id} className="group block h-full">
                <div className="h-full flex flex-col bg-[#0a1a2f] rounded-xl overflow-hidden border border-white/5 hover:border-[#f1c40f]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  
                  {/* GÖRSEL ALANI */}
                  <div className="relative h-[250px] w-full overflow-hidden bg-gray-900 shrink-0">
                    <div className="absolute top-4 left-4 z-10 bg-[#f1c40f] text-[#002d72] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                        {project.date}
                    </div>
                    
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  {/* İÇERİK */}
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f1c40f] transition-colors line-clamp-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                    
                    {/* DETAYLARI OKU LİNKİ */}
                    <div className="flex items-center gap-2 text-xs font-bold text-[#f1c40f] uppercase tracking-wider group/link w-fit mt-auto">
                        <span className="border-b border-[#f1c40f] pb-0.5 group-hover/link:text-white group-hover/link:border-white transition-all">
                            Detayları Oku
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>

                </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

// VERİLER (ID'ler ve Resim Yolları Tam)
const ALL_PROJECTS = [
  { 
    id: '1',
    title: 'Anıtkabir Ziyareti ve Resmi Tören', 
    date: '10 KASIM 2024', 
    description: 'Büyük Fenerbahçe ailesi olarak Atamızın huzuruna çıktık. Binlerce üyemizin katılımıyla gerçekleşen törende çelenk bırakıldı.',
    image: '/anıtkabir.jpg', 
  },
  { 
    id: '2',
    title: 'Geleneksel 19.07 Galası', 
    date: '19 TEMMUZ 2024', 
    description: 'Ankara Sheraton Otel’de düzenlenen balomuzda iş dünyasını ağırladık.',
    image: '/gala.jpg',
  },
  { 
    id: '3',
    title: 'Geleceğin Yıldızları Burs Programı', 
    date: '01 EYLÜL 2024', 
    description: '100 başarılı öğrenciye eğitim bursu desteği sağladık.',
    image: '/burs.jpg',
  },
  { 
    id: '4',
    title: 'Anadolu Dernekleri Zirvesi', 
    date: '15 MAYIS 2024', 
    description: 'Türkiye genelindeki Fenerbahçe derneklerini Ankara’da buluşturduk.',
    image: '/dernek.jpg', 
  },
  { 
    id: '5',
    title: 'Ramazan Yardım Kolileri', 
    date: '10 MART 2024', 
    description: 'İhtiyaç sahibi 500 aileye erzak yardımı ulaştırdık.',
    image: '/koli.jpg', 
  },
  { 
    id: '6',
    title: 'Cumhuriyet Kupası Tenis Turnuvası', 
    date: '29 EKİM 2023', 
    description: 'Üyelerimiz arasında düzenlenen dostluk turnuvası.',
    image: '/cumhuriyet.jpg', 
  },
];