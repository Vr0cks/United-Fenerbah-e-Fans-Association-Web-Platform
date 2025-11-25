"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MembershipPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Sanki sunucuya veri gönderiyormuşuz gibi 1.5 saniye bekletiyoruz
    setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <main className="bg-[#051120] min-h-screen text-white relative">
      <div className="bg-[#000d21] relative z-50">
          <Navbar />
      </div>

      {/* Arka Plan Dekoru */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[#002d72] opacity-10 blur-[120px] pointer-events-none"></div>

      <div className="max-container padding-container py-24 relative z-10">
        
        {/* BAŞLIK */}
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 pt-10">
                Büyük Aileye Katılın.
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                BİRFED üyeliği, sadece bir kayıt işlemi değil; Fenerbahçe değerlerini yaşatmak için atılmış bir imzadır.
            </p>
        </div>

        {/* FORM ALANI */}
        <div className="max-w-3xl mx-auto bg-[#0a1a2f] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
            
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Kişisel Bilgiler */}
                    <div>
                        <h3 className="text-[#f1c40f] text-sm font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                            Kişisel Bilgiler
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Adınız" placeholder="Örn: Ahmet" required />
                            <InputGroup label="Soyadınız" placeholder="Örn: Yılmaz" required />
                            <InputGroup label="TC Kimlik No" placeholder="11 Haneli TC Kimlik No" required />
                            <InputGroup label="Doğum Tarihi" type="date" required />
                        </div>
                    </div>

                    {/* İletişim & Meslek */}
                    <div>
                        <h3 className="text-[#f1c40f] text-sm font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                            İletişim & Meslek
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Cep Telefonu" placeholder="05XX XXX XX XX" required />
                            <InputGroup label="E-Posta Adresi" type="email" placeholder="ornek@email.com" required />
                            <InputGroup label="Meslek / Ünvan" placeholder="Örn: Avukat, Mühendis" className="md:col-span-2" required />
                            <InputGroup label="Çalıştığı Kurum" placeholder="Firma veya Kurum Adı" className="md:col-span-2" />
                        </div>
                    </div>

                    {/* Onay Kutuları */}
                    <div className="space-y-4 pt-4">
                        <Checkbox label="Dernek tüzüğünü okudum ve kabul ediyorum." required />
                        <Checkbox label="KVKK aydınlatma metnini okudum, kişisel verilerimin işlenmesine onay veriyorum." required />
                    </div>

                    {/* Buton */}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-[#f1c40f] text-[#002d72] font-bold py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-[#002d72] border-t-transparent rounded-full animate-spin"></div>
                                İşleniyor...
                            </>
                        ) : (
                            "BAŞVURUYU TAMAMLA"
                        )}
                    </button>
                </form>
            ) : (
                // BAŞARILI EKRANI (Animasyonlu)
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                >
                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Başvurunuz Alındı!</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Üyelik ön başvurunuz başarıyla sistemimize ulaşmıştır. <br />
                        Yönetim kurulumuzun değerlendirmesi sonrası, belirttiğiniz iletişim kanalları üzerinden sizinle irtibata geçilecektir.
                    </p>
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="text-[#f1c40f] border-b border-[#f1c40f] pb-1 hover:text-white hover:border-white transition-all"
                    >
                        Anasayfaya Dön
                    </button>
                </motion.div>
            )}

        </div>
      </div>
      
      <Footer />
    </main>
  );
}

// YARDIMCI BİLEŞENLER (Input ve Checkbox)
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputGroup = ({ label, className, ...props }: InputProps) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-xs text-gray-400 uppercase font-bold tracking-wide pl-1">{label}</label>
        <input 
            {...props}
            className="bg-[#051120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f1c40f] transition-colors placeholder:text-gray-600"
        />
    </div>
);

const Checkbox = ({ label, required }: { label: string, required?: boolean }) => (
    <label className="flex items-start gap-3 cursor-pointer group">
        <input type="checkbox" required={required} className="w-5 h-5 mt-0.5 accent-[#f1c40f] cursor-pointer" />
        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</span>
    </label>
);