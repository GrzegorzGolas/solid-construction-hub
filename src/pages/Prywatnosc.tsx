import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Prywatnosc = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-cream">
        <div className="container-custom py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-8">
            Polityka prywatności
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-steel">
            <section>
              <h2 className="text-xl font-bold text-navy font-heading">Pliki cookies</h2>
              <p>
                Strona nie używa plików cookies ani narzędzi śledzących. Nie zbieramy
                danych o aktywności użytkowników na stronie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy font-heading">Formularz kontaktowy</h2>
              <p>
                Dane wprowadzone w formularzu wyceny (typ obiektu, wymiary, lokalizacja,
                dane kontaktowe) są wykorzystywane wyłącznie w celu przygotowania oferty
                i kontaktu z osobą zainteresowaną. Nie udostępniamy tych danych osobom
                trzecim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy font-heading">Administrator danych</h2>
              <p>
                Administratorem danych osobowych jest firma Agile Solution Grzegorz Golas,
                NIP: 814 142 12 80. W sprawach dotyczących danych osobowych prosimy
                o kontakt mailowy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy font-heading">Prawa użytkownika</h2>
              <p>
                Każda osoba, której dane dotyczą, ma prawo do dostępu do swoich danych,
                ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo
                do wniesienia sprzeciwu wobec przetwarzania.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Prywatnosc;
