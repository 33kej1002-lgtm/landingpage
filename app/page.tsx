import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import CurriculumSection from "@/components/CurriculumSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <CurriculumSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
