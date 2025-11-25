# BİRFED - Birleşik Fenerbahçeliler Derneği Web Platformu

Bu proje, Ankara Birleşik Fenerbahçeliler Derneği (BİRFED) için geliştirilmiş modern, kurumsal ve prestij odaklı bir web arayüzü çalışmasıdır. 

Proje, **Yönetim Bilişim Sistemleri** vizyonuyla; kullanıcı deneyimi (UX), modern tasarım trendleri (Dark Luxury) ve performans optimizasyonları gözetilerek tasarlanmıştır.

🔗 **Canlı Demo:** [Buraya Vercel Linki Gelecek]

![Project Screenshot](/public/bg-stadium.jpg)

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Dil:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animasyon:** [Framer Motion](https://www.framer.com/motion/)
* **İkon Seti:** Heroicons & Custom SVG
* **Deployment:** Vercel

## ✨ Öne Çıkan Özellikler

### 1. Modern & Kurumsal Arayüz
* "Dark Luxury" tasarım dili ile prestijli görünüm.
* Fenerbahçe kurumsal renk paleti (Lacivert & Altın Sarısı) entegrasyonu.
* Camomorphism (Buzlu Cam) efektleri ve modern kart yapıları.

### 2. Dinamik Yapı & Routing
* **Dinamik Haber Detay Sayfaları:** `/faaliyetler/[id]` yapısı ile tek bir şablon üzerinden sınırsız içerik gösterimi.
* **Youtube Tarzı Loading Bar:** Sayfa geçişlerinde üstte beliren ilerleme çubuğu (`nextjs-toploader`).

### 3. Mock (Simüle) Sistemler
* **Yönetim Paneli (Dashboard):** `/admin` rotasında çalışan, giriş korumalı (Auth simulation) modern dashboard arayüzü.
    * *Kullanıcı Adı:* admin
    * *Şifre:* 1907
* **Üyelik Başvuru Formu:** Validasyonlu (doğrulamalı), yükleniyor durumu ve başarı mesajı içeren interaktif form.

### 4. Performans & Güvenlik
* **SEO Optimizasyonu:** Meta etiketleri, Open Graph (WhatsApp/Twitter paylaşım kartları) ve Favicon yapılandırması.
* **Security Headers:** X-Frame-Options, X-Content-Type-Options gibi HTTP güvenlik başlıkları `next.config.ts` üzerinden yapılandırıldı.
* **Responsive Design:** Mobil, tablet ve masaüstü için %100 uyumlu ızgara (grid) sistemi.

## 📂 Proje Yapısı

```bash
├── src/
│   ├── app/              # App Router Sayfaları
│   │   ├── admin/        # Yönetim Paneli (Dashboard)
│   │   ├── faaliyetler/  # Dinamik Haber Sayfaları
│   │   ├── uye-ol/       # Başvuru Formu
│   │   └── layout.tsx    # Ana Şablon (SEO & Fontlar)
│   ├── components/       # Tekrar Kullanılabilir Bileşenler
│   │   ├── Hero.tsx      # Ana Vitrin
│   │   ├── Navbar.tsx    # Responsive Menü
│   │   └── ...
│   └── constants/        # Sabit Veriler
├── public/               # Görseller ve Favicon
└── next.config.ts        # Güvenlik Ayarları
🚀 Kurulum (Local)
Projeyi kendi bilgisayarınızda çalıştırmak için:

Repoyu klonlayın:

Bash

git clone [https://github.com/kullaniciadi/birfed-web.git](https://github.com/kullaniciadi/birfed-web.git)
Bağımlılıkları yükleyin:

Bash

npm install
Geliştirme sunucusunu başlatın:

Bash

npm run dev
Tarayıcıda açın: http://localhost:3000

👨‍💻 Geliştirici
Designed & Developed by vr0cks

/EN/

BİRFED - United Fenerbahçe Fans Association Web Platform

This project is a modern, corporate, and prestige-oriented web interface developed for the Ankara United Fenerbahçe Fans Association (BİRFED).

Designed with a Management Information Systems (MIS) perspective, the project prioritizes user experience (UX), modern design trends (Dark Luxury), and performance optimization.

🔗 Live Demo: [Insert Vercel Link Here]

🛠️ Tech Stack

Framework: Next.js 15 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Animation: Framer Motion

Icon Set: Heroicons & Custom SVG

Deployment: Vercel

✨ Key Features

1. Modern & Corporate Interface

Prestigious look with "Dark Luxury" design language.

Integration of Fenerbahçe corporate color palette (Navy Blue & Gold).

Glassmorphism effects and modern card structures.

2. Dynamic Structure & Routing

Dynamic News Detail Pages: Unlimited content display via a single template using /faaliyetler/[id] structure.

YouTube-Style Loading Bar: Progress bar appearing at the top during page transitions (nextjs-toploader).

3. Mock (Simulated) Systems

Admin Dashboard: A modern dashboard interface running on the /admin route with simulated authentication protection.

Username: admin

Password: 1907

Membership Application Form: An interactive form including validation, loading states, and success messages.

4. Performance & Security

SEO Optimization: Configuration of Meta tags, Open Graph (WhatsApp/Twitter sharing cards), and Favicon.

Security Headers: Implementation of HTTP security headers like X-Frame-Options and X-Content-Type-Options via next.config.ts.

Responsive Design: 100% compatible grid system for mobile, tablet, and desktop.

📂 Project Structure

src/
├── app/              # App Router Pages
│   ├── admin/        # Admin Panel (Dashboard)
│   ├── faaliyetler/  # Dynamic News Pages
│   ├── uye-ol/       # Application Form
│   └── layout.tsx    # Main Layout (SEO & Fonts)
├── components/       # Reusable Components
│   ├── Hero.tsx      # Main Showcase
│   ├── Navbar.tsx    # Responsive Menu
│   └── ...
├── constants/        # Static Data
├── public/           # Images and Favicon
└── next.config.ts    # Security Settings


🚀 Installation (Local)

To run the project on your local machine:

Clone the repository:

git clone [https://github.com/username/birfed-web.git](https://github.com/username/birfed-web.git)


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:
http://localhost:3000

👨‍💻 Developer

Designed & Developed by vr0cks