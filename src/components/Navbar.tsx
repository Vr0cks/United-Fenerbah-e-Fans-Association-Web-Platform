import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1">
          <span className="font-bold text-2xl text-[#002d72]">BİRFED</span>
          <div className="h-3 w-3 rounded-full bg-[#f1c40f]" />
        </Link>

        {/* LİNKLER (Masaüstü) */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link 
              href={link.href} 
              key={link.key} 
              className="regular-16 text-gray-600 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-[#002d72]"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* BUTON (Üye Ol) */}
        <div className="lg:flexCenter hidden">
            <button 
                type="button" 
                className="bg-[#002d72] px-6 py-3 text-white transition-all hover:bg-black rounded-full"
            >
                Üye Ol
            </button>
        </div>

        {/* MOBİL MENÜ İKONU (Şimdilik Basit Çizgi) */}
        <div className="lg:hidden cursor-pointer">
            <div className="w-8 h-1 bg-[#002d72] mb-1"></div>
            <div className="w-8 h-1 bg-[#002d72] mb-1"></div>
            <div className="w-8 h-1 bg-[#002d72]"></div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar