import { useState } from "react";

const realizations = [
  {
    id: 1,
    title: "Hala produkcyjna",
    location: "Województwo Wielkopolskie",
    size: "1200 m²",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Wiata magazynowa",
    location: "Województwo Mazowieckie",
    size: "450 m²",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Chłodnia przemysłowa",
    location: "Województwo Śląskie",
    size: "800 m²",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
];

const Realizations = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="realizacje" className="section-padding bg-navy blueprint-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-navy font-heading mb-4">
            Nasze realizacje
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Każdy projekt to indywidualne podejście i sprawdzone rozwiązania. 
            Zrealizowaliśmy dziesiątki obiektów w całej Polsce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {realizations.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-navy/80 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-bold text-on-navy font-heading">
                  {item.title}
                </h3>
                <p className="text-cream/80 text-sm mt-1">{item.location}</p>
                <p className="text-gold font-semibold mt-2">{item.size}</p>
              </div>

              {/* Default title bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4 transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-lg font-bold text-on-navy font-heading">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
