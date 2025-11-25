"use client"; // Animasyonlar tarayıcıda çalışır, bu satır şart.

import { motion } from "framer-motion";

// 1. Tekil Öğeler İçin (Yazı, Resim, Buton)
export const FadeIn = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number,
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Başlangıç: Görünmez ve 30px aşağıda
      whileInView={{ opacity: 1, y: 0 }} // Görününce: Görünür ve yerine oturur
      viewport={{ once: true }} // Sadece bir kere çalışsın (aşağı yukarı yapınca tekrar etmesin)
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Süre ve gecikme
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. Sıralı Gelen Kartlar İçin (Features kısmı için)
export const StaggerContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2, // Her bir çocuk 0.2sn arayla gelsin
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};