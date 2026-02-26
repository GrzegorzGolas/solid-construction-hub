import { Link } from "react-router-dom";
import {
  Warehouse,
  Factory,
  Tractor,
  Home,
  Snowflake,
  Car,
  FileText,
} from "lucide-react";

const offers = [
  { icon: Warehouse, title: "Hale magazynowe", href: "/hale-magazynowe" },
  { icon: Factory, title: "Hale produkcyjne", href: "/hale-produkcyjne" },
  { icon: Tractor, title: "Hale rolnicze", href: "/hale-rolnicze" },
  { icon: Home, title: "Wiaty stalowe", href: "/wiaty-stalowe" },
  { icon: Snowflake, title: "Chłodnie / obiekty izolowane", href: "/chlodnie" },
  { icon: Car, title: "Carporty / zadaszenia", href: "/carporty" },
  { icon: FileText, title: "Dokumentacja architektoniczna i techniczna", href: "/dokumentacja" },
];

const Oferta = () => {
  return (
    <section id="oferta" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Oferta
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Kompleksowa obsługa inwestycji — od dokumentacji po gotowy obiekt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.href}
              to={offer.href}
              className="service-card group flex flex-col items-center text-center p-6 hover:border-gold/40 border border-transparent"
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <offer.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-snug">
                {offer.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Oferta;
