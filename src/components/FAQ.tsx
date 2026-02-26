import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Ile kosztuje budowa hali stalowej?",
    a: "Koszt zależy od wielu czynników: wymiarów, lokalizacji, zakresu prac i wyposażenia. Wstępną wycenę przygotowujemy bezpłatnie w ciągu 48 godzin od otrzymania zapytania. Skontaktuj się z nami, aby uzyskać indywidualną ofertę.",
  },
  {
    q: "Jaki jest czas realizacji hali stalowej?",
    a: "Standardowy czas realizacji to od 8 do 16 tygodni, w zależności od wielkości obiektu i zakresu prac. Na czas ten składa się: dokumentacja (2-4 tyg.), produkcja konstrukcji (4-6 tyg.) oraz montaż (2-6 tyg.).",
  },
  {
    q: "Jaki jest zakres prac, które realizujecie?",
    a: "Oferujemy kompleksową obsługę: dokumentację architektoniczną i techniczną, produkcję konstrukcji stalowej, obudowę (ściany i dach), montaż oraz nadzór. Możemy zrealizować pełny zakres lub wybrany etap.",
  },
  {
    q: "Czy wykonujecie dokumentację architektoniczną?",
    a: "Tak. Przygotowujemy pełną dokumentację architektoniczną i techniczną niezbędną do uzyskania pozwolenia na budowę, w tym projekty branżowe: konstrukcyjny, instalacyjny i zagospodarowania terenu.",
  },
  {
    q: "Jakie są warunki płatności?",
    a: "Stosujemy system płatności etapowych powiązanych z postępem prac. Szczegółowy harmonogram płatności jest uzgadniany indywidualnie i stanowi część umowy.",
  },
  {
    q: "Jaka gwarancja jest udzielana?",
    a: "Udzielamy wieloletniej gwarancji na konstrukcję stalową oraz wykonane prace montażowe. Szczegółowy zakres gwarancji określamy w umowie dla każdego projektu indywidualnie.",
  },
  {
    q: "W jakim regionie realizujecie inwestycje?",
    a: "Działamy na terenie województw: podkarpackiego, lubelskiego, małopolskiego, świętokrzyskiego i mazowieckiego. W przypadku większych projektów jesteśmy otwarci na realizacje w całej Polsce.",
  },
  {
    q: "Jakie rodzaje obudowy oferujecie?",
    a: "Stosujemy płyty warstwowe (PIR/PUR), blachy trapezowe, systemy świetlików dachowych oraz bramy przemysłowe. Dobór materiałów zależy od przeznaczenia obiektu i wymagań izolacyjnych.",
  },
  {
    q: "Czy wykonujecie fundamenty?",
    a: "Tak, w ramach realizacji kompleksowej wykonujemy fundamenty pod konstrukcję stalową. Zakres prac fundamentowych jest ustalany na podstawie dokumentacji geotechnicznej i projektowej.",
  },
  {
    q: "Jakie warianty oferty proponujecie?",
    a: 'Oferujemy trzy warianty: samą konstrukcję stalową, konstrukcję z obudową lub realizację kompleksową „pod klucz" obejmującą dokumentację, fundamenty, konstrukcję, obudowę i montaż.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Odpowiedzi na najczęściej pojawiające się pytania dotyczące realizacji hal stalowych.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-heading font-bold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-steel-light leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
