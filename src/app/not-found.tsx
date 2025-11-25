import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#051120] text-white text-center px-4">
      <h2 className="text-9xl font-bold text-[#f1c40f] opacity-20">404</h2>
      <h1 className="text-4xl font-bold mt-4">Aradığınız Sayfa Bulunamadı</h1>
      <p className="text-gray-400 mt-4 max-w-md">
        Görünüşe göre yanlış bir tribüne girdiniz. Aradığınız sayfa silinmiş veya taşınmış olabilir.
      </p>
      <Link 
        href="/"
        className="mt-8 bg-[#f1c40f] text-[#002d72] px-8 py-3 rounded-full font-bold hover:bg-white transition-all"
      >
        Anasayfaya Dön
      </Link>
    </div>
  )
}