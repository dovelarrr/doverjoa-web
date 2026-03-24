import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CtaSection from "@/components/CtaSection";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Demo />
      <Benefits />
      <Process />
      <CtaSection />
      <FinalSection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
