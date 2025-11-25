import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// DİKKAT: Next.js 15'te params Promise olduğu için 'async' ekledik ve tipi güncelledik
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // URL'den gelen ID'yi almak için önce "await" ediyoruz
  const resolvedParams = await params;
  const projectId = resolvedParams.id;
  
  // Veritabanımız olmadığı için listeden buluyoruz
  const project = ALL_PROJECTS.find(p => p.id === projectId);

  // Eğer öyle bir proje yoksa 404 sayfasına at
  if (!project) {
    return notFound();
  }

  return (
    <main className="bg-[#051120] min-h-screen text-white">
      <div className="bg-[#000d21] relative z-50"><Navbar /></div>

      {/* HERO KISMI */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051120] via-[#051120]/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 max-container padding-container">
            <Link href="/faaliyetler" className="text-[#f1c40f] text-sm font-bold uppercase tracking-wider mb-4 inline-block hover:underline">
                ← Tüm Faaliyetlere Dön
            </Link>
            <div className="bg-[#f1c40f] text-[#002d72] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm w-fit mb-4">
                {project.date}
            </div>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
                {project.title}
            </h1>
        </div>
      </div>

      {/* İÇERİK METNİ */}
      <div className="max-container padding-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-8 font-light">
            
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#f1c40f] first-letter:mr-3 first-letter:float-left">
                {project.description}
            </p>
            
            <p>
                Bu etkinlik kapsamında Ankara'daki üyelerimizle bir araya gelerek Fenerbahçe ruhunu en güçlü şekilde yansıttık. 
                Organizasyonumuza katılım gösteren tüm renktaşlarımıza, yönetim kurulu üyelerimize ve emeği geçen herkese teşekkür ederiz.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8">Etkinlikten Öne Çıkanlar</h3>
            <p>
                Gerçekleştirilen bu organizasyon, BİRFED'in (Birleşik Fenerbahçeliler Derneği) vizyonu doğrultusunda, 
                hem sosyal sorumluluk bilincini artırmayı hem de camiamızın birlik ve beraberliğini pekiştirmeyi amaçlamıştır.
                Gelecek dönemde de benzer projelerle Ankara'da Fenerbahçe bayrağını dalgalandırmaya devam edeceğiz.
            </p>

            <div className="border-l-4 border-[#f1c40f] pl-6 py-2 my-10 italic text-white text-xl">
                "Fenerbahçe büyüklüğü ne şampiyonluk büyüklüğü, ne kupa büyüklüğüdür. Onun büyüklüğü başka bir büyüklüktür işte, adı konamaz."
                <span className="block text-sm text-gray-500 mt-2 not-italic">- İslam Çupi</span>
            </div>

            <p>
                Detaylı bilgi ve gelecek etkinliklerimizden haberdar olmak için sosyal medya hesaplarımızı takip etmeyi unutmayın.
            </p>

        </div>
      </div>

      <Footer />
    </main>
  );
}

// VERİ SETİ
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
    description: 'Ankara Sheraton Otel’de düzenlenen balomuzda iş, sanat ve spor dünyasından önemli isimleri ağırladık.',
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