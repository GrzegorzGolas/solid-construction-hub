import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Area from "@/components/Area";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Area />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
};

export default Index;
