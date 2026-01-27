import { Phone, Mail } from "lucide-react";
import heroHall from "@/assets/hero-hall.jpg";

const Hero = () => {
  return (
    <section className="relative">
      {/* Navy background with blueprint grid */}
      <div className="absolute inset-0 blueprint-bg" />
      
      <div className="relative container-custom py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-navy leading-tight tracking-tight font-heading">
                HALE STALOWE • WIATY • CHŁODNIE • CARPORTY
              </h1>
              <p className="text-lg md:text-xl text-gold font-semibold tracking-wide">
                PROJEKTOWANIE • WYKONAWSTWO • NADZÓR
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+48575857929"
                className="btn-gold group whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="whitespace-nowrap">575&nbsp;857&nbsp;929</span>
              </a>
              <a
                href="mailto:biuro@solidnewykonawstwo.pl"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-on-navy border-2 border-cream/30 rounded-lg hover:bg-cream/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="hidden sm:inline">biuro@solidnewykonawstwo.pl</span>
                <span className="sm:hidden">Napisz do nas</span>
              </a>
            </div>

            <p className="text-cream/70 text-sm">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę
            </p>
          </div>

          {/* Right image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroHall}
              alt="Konstrukcja hali stalowej w trakcie budowy"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
