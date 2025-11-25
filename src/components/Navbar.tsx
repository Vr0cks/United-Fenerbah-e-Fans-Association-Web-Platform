"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"; // useScroll ve useSpring eklendi
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  // SCROLL PROGRESS BAR MANTIĞI
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // EĞER ADMIN PANELİNDEYSEK NAVBAR'I GÖSTERME
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* İLERLEME ÇUBUĞU (En Tepeye Sabit) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#f1c40f] origin-left z-[100]"
        style={{ scaleX }}
      />

      <nav className="absolute top-0 z-50 w-full py-6 bg-transparent border-none">
        <div className="max-container padding-container flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-[#f1c40f] transition-all duration-300 bg-white">
               <Image 
                 src="/birfed.jpg" 
                 alt="BİRFED Logo" 
                 fill 
                 sizes="64px"
                 className="object-contain p-0.5" 
               />
            </div>
            <span className="font-bold text-xl md:text-2xl text-white tracking-wide">
              BİRFED
            </span>
          </Link>

          {/* MASAÜSTÜ LİNKLERİ */}
          <ul className="hidden h-full gap-8 lg:gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key} 
                className="regular-16 text-white font-medium cursor-pointer pb-1.5 transition-all hover:text-[#f1c40f] hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          {/* MASAÜSTÜ BUTON */}
          <div className="lg:flexCenter hidden">
              <Link href="/uye-ol">
                  <button 
                      type="button" 
                      className="bg-white/10 border border-white/40 text-white px-6 py-3 transition-all hover:bg-[#f1c40f] hover:text-[#002d72] hover:border-[#f1c40f] rounded-full backdrop-blur-sm animate-pulse font-semibold"
                  >
                      Üye Ol
                  </button>
              </Link>
          </div>

          {/* MOBİL MENÜ İKONU */}
          <div className="lg:hidden cursor-pointer relative z-50 p-2" onClick={toggleMenu}>
              {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
              ) : (
                  <div className="space-y-1.5">
                      <div className="w-8 h-1 bg-white rounded-full"></div>
                      <div className="w-8 h-1 bg-white rounded-full"></div>
                      <div className="w-6 h-1 bg-white rounded-full ml-auto"></div>
                  </div>
              )}
          </div>

          {/* MOBİL MENÜ İÇERİK */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-[#051120] z-40 flex flex-col items-center justify-center lg:hidden"
              >
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f1c40f] rounded-full opacity-[0.05] blur-3xl pointer-events-none"></div>

                  <ul className="flex flex-col gap-8 text-center">
                      {NAV_LINKS.map((link) => (
                          <motion.li 
                              key={link.key}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                          >
                              <Link 
                                  href={link.href} 
                                  className="text-3xl font-bold text-white hover:text-[#f1c40f] transition-colors"
                                  onClick={toggleMenu}
                              >
                                  {link.label}
                              </Link>
                          </motion.li>
                      ))}
                  </ul>

                  <Link href="/uye-ol" onClick={toggleMenu}>
                      <button className="mt-12 bg-[#f1c40f] text-[#002d72] px-10 py-4 font-bold rounded-full text-lg shadow-lg shadow-yellow-500/20">
                          Üye Ol
                      </button>
                  </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </>
  )
}

export default Navbar