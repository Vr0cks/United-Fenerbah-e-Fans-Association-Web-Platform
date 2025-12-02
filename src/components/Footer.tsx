import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/Motion";

const Footer = () => {
    // İKONLAR burada tanımlanmalı, yoksa hata verir
    const IconTwitter = <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    const IconInstagram = <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>;
    const IconLinkedin = <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.226 0z"/></svg>;
    const IconMap = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>;
    const IconPhone = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>;
    const IconMail = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>;
    
    // Yardımcı Bileşenler
    const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
        <li>
            <Link href={href} className="hover:text-[#f1c40f] hover:translate-x-1 transition-all duration-300 inline-block">
                {children}
            </Link>
        </li>
    );
    const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
        <Link href={href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f1c40f] hover:text-[#002d72] hover:border-[#f1c40f] transition-all duration-300">
            {icon}
        </Link>
    );

    return (
        <footer className="bg-[#02060b] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden font-light">
            
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#002d72] rounded-full opacity-[0.05] blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-container padding-container relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* 1. KOLON: MARKA & VİZYON */}
                    <FadeIn>
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
                                <Image src="/birfed.jpg" alt="BİRFED" fill sizes="40px" className="object-contain" />
                            </div>
                            <span className="font-bold text-2xl text-white group-hover:text-[#f1c40f] transition-colors">
                                BİRFED
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-7 mb-8 max-w-xs">
                            Fenerbahçe Spor Kulübü'nün değerlerini Ankara'da temsil eden, 
                            toplumsal fayda odaklı sivil toplum kuruluşu.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={IconTwitter} href="#" />
                            <SocialIcon icon={IconInstagram} href="#" />
                            <SocialIcon icon={IconLinkedin} href="#" />
                        </div>
                    </FadeIn>

                    {/* 2. KOLON: KURUMSAL */}
                    <FadeIn delay={0.2}>
                        <h4 className="text-lg font-bold mb-6 text-white">Kurumsal</h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
                            <FooterLink href="/#leadership">Yönetim Kurulu</FooterLink> 
                            <FooterLink href="/tuzuk">Dernek Tüzüğü</FooterLink>
                            <FooterLink href="/baskanin-mesaji">Başkanın Mesajı</FooterLink>
                        </ul>
                    </FadeIn>

                    {/* 3. KOLON: FAALİYETLER */}
                    <FadeIn delay={0.3}>
                        <h4 className="text-lg font-bold mb-6 text-white">Faaliyetler</h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <FooterLink href="/faaliyetler">Güncel Projeler</FooterLink>
                            <FooterLink href="/faaliyetler">Etkinlik Takvimi</FooterLink>
                            <FooterLink href="/faaliyetler">Basında Biz</FooterLink>
                            <FooterLink href="/uye-ol">Üyelik Başvurusu</FooterLink>
                        </ul>
                    </FadeIn>

                    {/* 4. KOLON: İLETİŞİM */}
                    <FadeIn delay={0.4}>
                        <h4 className="text-lg font-bold mb-6 text-white">İletişim</h4>
                        <ul className="flex flex-col gap-6 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-[#f1c40f] mt-1">{IconMap}</span>
                                <span>Mustafa Kemal Mahallesi,<br />Dumlupınar Bulvarı No:274<br />Çankaya / ANKARA</span>
                            </li>
                            <li>
                                <a href="tel:+903124441907" className="flex items-center gap-3 hover:text-[#f1c40f] transition-colors">
                                    <span className="text-[#f1c40f]">{IconPhone}</span>
                                    <span>+90 (312) 444 19 07</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@birfed.org" className="flex items-center gap-3 hover:text-[#f1c40f] transition-colors">
                                    <span className="text-[#f1c40f]">{IconMail}</span>
                                    <span>info@birfed.org</span>
                                </a>
                            </li>
                        </ul>
                    </FadeIn>

                </div>

                {/* ALT ÇİZGİ & TELİF HAKKI */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2024 Birleşik Fenerbahçeliler Derneği. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
                    </div>
                    
                    {/* İmzam */}
                    <p className="text-xs text-gray-500">
                        Designed & Developed by 
                        <Link 
                            href="https://my-portfolio-ochre-ten-83.vercel.app/tr" 
                            target="_blank"
                            className="font-bold text-[#f1c40f] ml-1 hover:text-white transition-colors cursor-pointer"
                        >
                            vr0cks
                        </Link>
                    </p>
                </div>

            </div>
        </footer>
    )
}

// export'un altındaki yardımcı bileşenler kaldırıldı, hepsi yukarı taşındı.
export default Footer;
