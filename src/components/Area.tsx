import { MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

const voivodeships = [
  "Podkarpackie",
  "Lubelskie",
  "Świętokrzyskie",
  "Małopolskie",
];

const Area = () => {
  const { t } = useLang();

  return (
    <section id="obszar" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            {t.areaTitle}
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            {t.areaSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {voivodeships.map((v) => (
            <div
              key={v}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-cream border border-gold/20 hover:shadow-lg transition-shadow duration-300"
            >
              <MapPin className="w-8 h-8 text-gold" />
              <span className="font-heading font-bold text-navy text-lg text-center">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Area;
