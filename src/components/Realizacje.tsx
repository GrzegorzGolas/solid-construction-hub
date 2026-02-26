const realizations = [
  { id: 1, typ: "Hala magazynowa", wymiary: "30 × 60 m, H = 8 m", wojewodztwo: "podkarpackie" },
  { id: 2, typ: "Hala produkcyjna", wymiary: "24 × 48 m, H = 10 m", wojewodztwo: "małopolskie" },
  { id: 3, typ: "Wiata stalowa", wymiary: "15 × 30 m, H = 6 m", wojewodztwo: "lubelskie" },
  { id: 4, typ: "Chłodnia przemysłowa", wymiary: "18 × 36 m, H = 7 m", wojewodztwo: "świętokrzyskie" },
  { id: 5, typ: "Hala rolnicza", wymiary: "20 × 40 m, H = 7 m", wojewodztwo: "mazowieckie" },
  { id: 6, typ: "Carport / zadaszenie", wymiary: "12 × 24 m, H = 4 m", wojewodztwo: "podkarpackie" },
  { id: 7, typ: "Hala magazynowa", wymiary: "36 × 72 m, H = 12 m", wojewodztwo: "małopolskie" },
  { id: 8, typ: "Wiata magazynowa", wymiary: "18 × 42 m, H = 6 m", wojewodztwo: "lubelskie" },
  { id: 9, typ: "Hala produkcyjna", wymiary: "28 × 56 m, H = 10 m", wojewodztwo: "mazowieckie" },
];

const Realizacje = () => {
  return (
    <section id="realizacje" className="section-padding bg-navy blueprint-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-navy font-heading mb-4">
            Realizacje
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Każdy projekt to indywidualne podejście i sprawdzone rozwiązania.
            Zrealizowaliśmy dziesiątki obiektów w południowo-wschodniej Polsce.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((item) => (
            <div
              key={item.id}
              className="bg-navy-light/60 border border-cream/10 rounded-xl p-6 hover:border-gold/30 transition-colors duration-300"
            >
              {/* Placeholder for future photo */}
              <div className="aspect-[4/3] bg-navy/50 rounded-lg mb-4 flex items-center justify-center border border-cream/5">
                <span className="text-cream/20 text-sm font-heading">Zdjęcie wkrótce</span>
              </div>
              <h3 className="font-bold text-on-navy font-heading text-lg mb-2">
                {item.typ}
              </h3>
              <p className="text-cream/70 text-sm mb-1">Wymiary: {item.wymiary}</p>
              <p className="text-gold text-sm font-semibold">woj. {item.wojewodztwo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizacje;
