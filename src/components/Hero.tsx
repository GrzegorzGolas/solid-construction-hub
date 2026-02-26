import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import heroHall from "@/assets/hero-hall.jpg";

const advantages = [
  { value: "450+", label: "realizacji" },
  { value: "Szybka", label: "wycena" },
  { value: "Własne", label: "ekipy montażowe" },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("formularz")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRealizations = () => {
    document.getElementById("realizacje")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHall})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 opacity-20 blueprint-bg" />

      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-navy leading-tight tracking-tight font-heading">
              Kompleksowa realizacja hal stalowych
              <span className="block text-gold mt-2">
                dokumentacja, konstrukcja, obudowa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 font-semibold tracking-wide">
              Projekt → produkcja → montaż
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToForm}
              className="btn-gold group text-lg"
            >
              Zamów wycenę
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToRealizations}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-on-navy border-2 border-cream/30 rounded-lg hover:bg-cream/10 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
              Zobacz realizacje
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 max-w-lg mx-auto">
            {advantages.map((adv) => (
              <div key={adv.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-gold font-heading">
                  {adv.value}
                </div>
                <div className="text-cream/70 text-sm mt-1">{adv.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
