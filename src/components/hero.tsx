import Image from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"> 
      {/* (Not: border-red-500'ü hizalamayı görmen için koydum, sonra sileceğiz) */}
      
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-[52px] font-bold leading-[120%] lg:text-[88px] text-[#002d72]">
          Ankara'da <span className="text-[#f1c40f]">Sarı</span> Lacivert Bir Güç.
        </h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[520px]">
          Birleşik Fenerbahçeliler Derneği olarak, büyük taraftarımızın enerjisini sosyal sorumluluk ve birliktelikle taçlandırıyoruz. Sen yoksan bir kişi eksiğiz.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-10">
            <button 
                type="button" 
                className="bg-[#002d72] px-8 py-4 text-white font-bold rounded-full hover:bg-[#f1c40f] hover:text-[#002d72] transition-all"
            >
                Aramıza Katıl
            </button>
            <button 
                type="button" 
                className="bg-gray-100 px-8 py-4 text-[#002d72] font-bold rounded-full hover:bg-gray-200 transition-all flex gap-2 items-center"
            > 
                <span>▶</span> Tanıtım Filmi
            </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start justify-end">
        {/* Buraya Görsel Gelecek - Şimdilik gri kutu koydum */}
        <div className="relative z-20 w-[500px] h-[500px] bg-gradient-to-r from-[#002d72] to-blue-900 rounded-3xl flex items-center justify-center text-white text-xl shadow-2xl">
            Görsel Alanı (500x500)
        </div>
      </div>
    </section>
  )
}

export default Hero