import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Oferta from "@/components/Oferta";
import JakPracujemy from "@/components/JakPracujemy";
import Realizacje from "@/components/Realizacje";
import FAQ from "@/components/FAQ";
import FormularzWyceny from "@/components/FormularzWyceny";
import Area from "@/components/Area";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Oferta />
        <JakPracujemy />
        <Realizacje />
        <Area />
        <FAQ />
        <FormularzWyceny />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
};

export default Index;
