import { useLang } from "@/lib/i18n";
import {
  PodkarpackieMap,
  LubelskieMap,
  SwietokrzyskieMap,
  MalopolskieMap,
} from "./VoivodeshipMaps";

const Area = () => {
  const { t } = useLang();

  const voivodeships = [
    { name: t.areaPodkarpackie, Map: PodkarpackieMap },
    { name: t.areaLubelskie, Map: LubelskieMap },
    { name: t.areaSwietokrzyskie, Map: SwietokrzyskieMap },
    { name: t.areaMalopolskie, Map: MalopolskieMap },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {voivodeships.map(({ name, Map }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-cream border border-gold/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-32">
                <Map />
              </div>
              <span className="font-heading font-bold text-navy text-lg text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Area;
