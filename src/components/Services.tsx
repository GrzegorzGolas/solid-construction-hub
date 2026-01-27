import { Compass, Hammer, Eye } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Projektowanie",
    description:
      "Kompleksowe projekty konstrukcji stalowych dostosowane do indywidualnych potrzeb klienta. Nowoczesne rozwiązania techniczne.",
  },
  {
    icon: Hammer,
    title: "Wykonawstwo",
    description:
      "Profesjonalna realizacja inwestycji od fundamentów po dach. Terminowość i najwyższa jakość wykonania.",
  },
  {
    icon: Eye,
    title: "Nadzór",
    description:
      "Pełny nadzór inwestorski i kontrola jakości na każdym etapie budowy. Bezpieczeństwo Twojej inwestycji.",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Zakres usług
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Oferujemy kompleksową obsługę od projektu po realizację. 
            Specjalizujemy się w halach stalowych, wiatach, chłodniach i carportach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-3">
                {service.title}
              </h3>
              <p className="text-steel-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
