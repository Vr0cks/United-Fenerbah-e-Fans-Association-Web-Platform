import Image from 'next/image';
import Link from 'next/link'; 
import { FadeIn, StaggerContainer, FadeInItem } from "@/components/Motion"; 

const Projects = () => {
  return (
    <section className="bg-[#051120] py-24 relative overflow-hidden border-t border-white/5">
      
      <div className="max-container padding-container relative z-10">
        
        {/* BAŞLIK ALANI */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn>
                <div>
                    <p className="text-[#f1c40f] text-sm tracking-[0.2em] uppercase font-bold mb-3">
                        Gündem & İcraatlar
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Sahadaki Gücümüz.
                    </h2>
                </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
                <Link href="/faaliyetler" className="group">
                    <span className="text-white border-b border-[#f1c40f] pb-1 group-hover:text-[#f1c40f] transition-colors text-sm uppercase tracking-wider flex items-center gap-2">
                        Tüm Faaliyetleri Gör <span>→</span>
                    </span>
                </Link>
            </FadeIn>
        </div>

        {/* PROJE KARTLARI */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <FadeInItem key={project.id} className="h-full">
              
              {/* KART LİNKİ: Artık detay sayfasına gidiyor (/faaliyetler/1 gibi) */}
              <Link href={`/faaliyetler/${project.id}`} className="group cursor-pointer h-full flex flex-col rounded-xl overflow-hidden bg-[#0a1a2f] border border-white/5 hover:border-[#f1c40f]/30 transition-colors duration-300">
                
                {/* GÖRSEL ALANI */}
                <div className="relative h-[250px] w-full overflow-hidden shrink-0">
                    <div className="absolute top-4 left-4 z-10 bg-[#f1c40f] text-[#002d72] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                        {project.date}
                    </div>
                    
                    <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-700">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>

                {/* İÇERİK ALANI */}
                <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#f1c40f] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {project.description}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-sm text-[#f1c40f] font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Detayları İncele <span>→</span>
                    </div>
                </div>

              </Link>
            </FadeInItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

// VERİLER (ID'ler Eklendi)
const PROJECTS = [
  {
    id: '1', // <--- ID
    title: 'Anıtkabir Ziyareti ve Resmi Tören',
    date: '10 KASIM 2024',
    description: 'Büyük Fenerbahçe ailesi olarak Atamızın huzuruna çıktık. Binlerce üyemizin katılımıyla gerçekleşen törende çelenk bırakıldı.',
    image: '/anıtkabir.jpg', 
  },
  {
    id: '2', // <--- ID
    title: 'Geleneksel 19.07 Galası',
    date: '19 TEMMUZ 2024',
    description: 'Ankara Sheraton Otel’de düzenlenen balomuzda iş, sanat ve spor dünyasından önemli isimleri ağırladık.',
    image: '/gala.jpg', 
  },
  {
    id: '3', // <--- ID
    title: 'Geleceğin Yıldızları Burs Programı',
    date: '01 EYLÜL 2024',
    description: 'Eğitimde fırsat eşitliği yaratmak adına başlattığımız burs programı ile 100 başarılı öğrenciye destek sağlıyoruz.',
    image: '/burs.jpg', 
  },
];

export default Projects