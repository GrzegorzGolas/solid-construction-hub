import { Phone, Mail, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Odpowiadamy na zapytania w ciągu 24 godzin. 
            Bezpłatna wycena i konsultacja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-8">
            <a
              href="tel:+48575857929"
              className="flex items-center gap-4 group"
              aria-label="Zadzwoń pod numer 575 857 929"
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-steel-light">Telefon</p>
                <p className="text-2xl font-bold text-navy font-heading group-hover:text-gold transition-colors">
                  575 857 929
                </p>
              </div>
            </a>

            <a
              href="mailto:biuro@solidnewykonawstwo.pl"
              className="flex items-center gap-4 group"
              aria-label="Wyślij email na biuro@solidnewykonawstwo.pl"
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-steel-light">E-mail</p>
                <p className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                  biuro@solidnewykonawstwo.pl
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-steel-light">Strona www</p>
                <p className="text-lg font-semibold text-navy">
                  solidnewykonawstwo.pl
                </p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center bg-card rounded-2xl p-8 shadow-lg">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <QRCodeSVG
                value="https://solidnewykonawstwo.pl"
                size={180}
                level="H"
                fgColor="#001428"
                bgColor="#ffffff"
              />
            </div>
            <p className="mt-6 text-navy font-semibold text-center">
              Zeskanuj i zobacz ofertę
            </p>
            <p className="text-steel-light text-sm mt-1">
              solidnewykonawstwo.pl
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
