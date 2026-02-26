import { Link } from "react-router-dom";
import { getPhoneFormatted, getPhoneHref, getEmail, getEmailHref } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-navy py-10 pb-24 md:pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-on-navy mb-3">Solidne Wykonawstwo</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Firma Agile Solution Grzegorz Golas
              <br />
              NIP: 814 142 12 80
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <a href={getPhoneHref()} className="block text-cream/70 hover:text-gold transition-colors">
                Tel: {getPhoneFormatted()}
              </a>
              <a href={getEmailHref()} className="block text-cream/70 hover:text-gold transition-colors">
                {getEmail()}
              </a>
            </div>
          </div>

          {/* Area */}
          <div>
            <h3 className="font-heading font-bold text-on-navy mb-3">Obszar realizacji</h3>
            <ul className="text-cream/60 text-sm space-y-1">
              <li>woj. podkarpackie</li>
              <li>woj. lubelskie</li>
              <li>woj. małopolskie</li>
              <li>woj. świętokrzyskie</li>
              <li>woj. mazowieckie</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-on-navy mb-3">Informacje</h3>
            <ul className="text-cream/60 text-sm space-y-1">
              <li>
                <Link to="/prywatnosc" className="hover:text-gold transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
            <p className="text-cream/40 text-xs mt-4">
              Strona nie używa plików cookies ani narzędzi śledzących.
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center text-cream/40 text-xs">
          © {new Date().getFullYear()} Solidne Wykonawstwo. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
