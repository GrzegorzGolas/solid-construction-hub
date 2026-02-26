import { useLang } from "@/lib/i18n";
import {
  PodkarpackieMap,
  LubelskieMap,
  SwietokrzyskieMap,
  MalopolskieMap,
  MazowieckieMap,
} from "./VoivodeshipMaps";

const Area = () => {
  const { t } = useLang();

  const voivodeships = [
    { name: "Podkarpackie", Map: PodkarpackieMap },
    { name: "Lubelskie", Map: LubelskieMap },
    { name: "Świętokrzyskie", Map: SwietokrzyskieMap },
    { name: "Małopolskie", Map: MalopolskieMap },
    { name: "Mazowieckie", Map: MazowieckieMap },
  ];

  return (
    <section id="obszar" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Obszar działalności
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Realizujemy inwestycje na terenie 5 województw w centralnej i południowo-wschodniej Polsce.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {voivodeships.map(({ name, Map }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 p-3 pt-4 rounded-xl bg-cream border border-gold/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-40 sm:h-48">
                <Map />
              </div>
              <span className="font-heading font-bold text-navy text-sm text-center">
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
