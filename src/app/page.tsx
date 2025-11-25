import Hero from "@/components/hero";
import Features from "@/components/Features";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer"; // <--- IMPORT

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Leadership />
      <Projects />
      <Footer /> {/* <--- EKLE */}
    </>
  );
}