import { Search, Calculator, FileText, Wrench, HardHat, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Search, title: "Analiza potrzeb", desc: "Szczegółowe rozpoznanie wymagań inwestora i warunków lokalizacji." },
  { icon: Calculator, title: "Wstępna wycena", desc: "Szybka, bezpłatna wycena na podstawie zebranych informacji." },
  { icon: FileText, title: "Dokumentacja", desc: "Projekt architektoniczny i techniczny dostosowany do obiektu." },
  { icon: Wrench, title: "Produkcja konstrukcji", desc: "Wykonanie elementów stalowych zgodnie z dokumentacją." },
  { icon: HardHat, title: "Montaż", desc: "Profesjonalny montaż przez własne ekipy na terenie inwestycji." },
  { icon: ShieldCheck, title: "Odbiór i gwarancja", desc: "Kontrola jakości, protokół odbioru i wieloletnia gwarancja." },
];

const JakPracujemy = () => {
  return (
    <section id="jak-pracujemy" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Jak pracujemy
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Sprawdzony proces realizacji — od pierwszego kontaktu po odbiór gotowego obiektu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center relative">
                <step.icon className="w-6 h-6 text-gold" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center font-heading">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy font-heading mb-1">{step.title}</h3>
                <p className="text-steel-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JakPracujemy;
