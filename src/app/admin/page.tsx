"use client";
import Image from "next/image";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(email === "admin" && password === "1907") {
        window.location.href = "/admin/dashboard"; // Doğruysa Dashboard'a at
    } else {
        alert("Hatalı giriş! (Kullanıcı: admin, Şifre: 1907)");
    }
  };

  return (
    <div className="min-h-screen bg-[#02060b] flex items-center justify-center p-4">
      <div className="bg-[#0a1a2f] p-8 rounded-2xl border border-white/10 w-full max-w-md shadow-2xl">
        
        <div className="text-center mb-8">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-[#f1c40f]">
                <Image src="/birfed.jpg" alt="Logo" width={80} height={80} className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white">Yönetim Paneli</h1>
            <p className="text-gray-400 text-sm mt-2">Lütfen yetkili bilgilerinizi giriniz.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
            <div>
                <label className="block text-xs text-[#f1c40f] uppercase font-bold mb-2">Kullanıcı Adı</label>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#051120] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#f1c40f] outline-none"
                    placeholder="admin"
                />
            </div>
            <div>
                <label className="block text-xs text-[#f1c40f] uppercase font-bold mb-2">Şifre</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#051120] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#f1c40f] outline-none"
                    placeholder="••••"
                />
            </div>
            <button className="w-full bg-[#f1c40f] text-[#002d72] font-bold py-4 rounded-xl hover:bg-white transition-all">
                GİRİŞ YAP
            </button>
        </form>

      </div>
    </div>
  )
}