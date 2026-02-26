import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center pt-20 bg-cream">
        <div className="container-custom text-center py-20">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Dziękujemy za zapytanie!
          </h1>
          <p className="text-steel-light max-w-xl mx-auto mb-4 leading-relaxed">
            Twoje zapytanie zostało przygotowane. Odpowiemy w ciągu 48 godzin.
          </p>
          <p className="text-steel max-w-xl mx-auto mb-8 text-sm bg-card border border-border rounded-xl p-4">
            Jeśli posiadasz szkic lub dokumentację, prześlij je w odpowiedzi na wiadomość e-mail.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć na stronę główną
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
