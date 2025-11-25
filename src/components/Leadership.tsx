import Image from 'next/image';
import { FadeIn, StaggerContainer, FadeInItem } from "@/components/Motion";

const Leadership = () => {
  return (
    <section className="bg-[#051120] py-16 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      
      <div className="max-container padding-container relative z-10">
        
        {/* BAŞLIK */}
        <FadeIn>
            <div className="text-center mb-16 md:mb-20">
                <p className="text-[#f1c40f] text-sm tracking-[0.3em] uppercase font-bold mb-4">
                    Yönetim Kadrosu
                </p>
                <h2 className="text-3xl md:text-5xl font-bold">
                    BİRFED'e Yön Veren İsimler.
                </h2>
                <div className="w-24 h-1 bg-[#f1c40f] mx-auto mt-6 md:mt-8"></div>
            </div>
        </FadeIn>

        {/* KADRO GRID */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MEMBERS.map((member) => (
            <FadeInItem key={member.name} className="group relative overflow-hidden rounded-xl h-[400px] border border-white/10">
              
              {/* FOTOĞRAF ALANI */}
              {/* bg-gray-800 yerine koyu lacivert yaptık ki resim yüklenmezse sırıtmasın */}
              <div className="w-full h-full bg-[#0a1a2f] relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    // Mobilde daha iyi performans için sizes ekledik
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={true} // Resimlerin hızlı yüklenmesini sağlar
                  />
              </div>

              {/* KARARTMA PERDESİ (Yazıların okunması için alt kısım koyu) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051120] via-transparent to-transparent opacity-60 md:opacity-50 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* İSİM VE ÜNVAN */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-[2px] bg-[#f1c40f] mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                </h3>
                <p className="text-[#f1c40f] text-sm uppercase tracking-wider font-medium">
                    {member.role}
                </p>
              </div>

            </FadeInItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

// Dosya isimlerinin BURADAKİLERLE public klasöründekilerin AYNI olduğundan emin ol.
const MEMBERS = [
  {
    name: 'M. Burak Çeliker', 
    role: 'Yönetim Kurulu Başkanı',
    image: '/team-1.jpg', 
  },
  {
    name: 'Hakan Tüzün', 
    role: 'Başkan Vekili',
    image: '/team-2.jpg',
  },
  {
    name: 'Serkan Öztürk', 
    role: 'Genel Sekreter',
    image: '/team-3.jpg',
  },
  {
    name: 'Av. Elif Yılmaz', 
    role: 'Sayman Üye',
    image: '/team-4.jpg',
  },
];

export default Leadership