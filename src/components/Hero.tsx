import { Phone, Mail } from "lucide-react";
import heroHall from "@/assets/hero-hall.jpg";
import { getPhoneFormatted, getPhoneHref, getEmail, getEmailHref } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHall})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-30 blueprint-bg" />
      
      {/* Content */}
      <div className="relative container-custom py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-on-navy leading-tight tracking-tight font-heading">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gold font-semibold tracking-wide">
              {t.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={getPhoneHref()}
              className="btn-gold group whitespace-nowrap text-xl"
              aria-label="Zadzwoń pod numer 575 857 929"
            >
              <Phone className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">{getPhoneFormatted()}</span>
            </a>
            <a
              href={getEmailHref()}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-on-navy border-2 border-cream/30 rounded-lg hover:bg-cream/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="hidden sm:inline">{getEmail()}</span>
              <span className="sm:hidden">{t.heroEmailCta}</span>
            </a>
          </div>

          <p className="text-cream/70 text-sm pt-4">
            {t.heroCta}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
