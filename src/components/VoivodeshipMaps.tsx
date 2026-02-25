const cityDot = "fill-gold";
const cityLabel = "fill-navy text-[3px] font-bold";
const outline = "fill-cream stroke-navy stroke-[0.8] hover:fill-gold/20 transition-colors duration-300";

export const PodkarpackieMap = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full">
    <path
      className={outline}
      d="M10,10 L30,5 L55,8 L75,3 L90,12 L95,30 L88,45 L92,60 L80,72 L60,75 L40,70 L25,65 L15,55 L5,40 L8,25 Z"
    />
    {/* Rzeszów */}
    <circle cx="50" cy="35" r="2.5" className={cityDot} />
    <text x="50" y="30" textAnchor="middle" className={cityLabel}>Rzeszów</text>
    {/* Przemyśl */}
    <circle cx="78" cy="45" r="1.8" className={cityDot} />
    <text x="78" y="41" textAnchor="middle" className={cityLabel}>Przemyśl</text>
    {/* Krosno */}
    <circle cx="40" cy="55" r="1.8" className={cityDot} />
    <text x="40" y="51" textAnchor="middle" className={cityLabel}>Krosno</text>
    {/* Stalowa Wola */}
    <circle cx="35" cy="15" r="1.8" className={cityDot} />
    <text x="35" y="11" textAnchor="middle" className={cityLabel}>Stalowa Wola</text>
    {/* Mielec */}
    <circle cx="28" cy="28" r="1.5" className={cityDot} />
    <text x="28" y="24.5" textAnchor="middle" className={cityLabel}>Mielec</text>
  </svg>
);

export const LubelskieMap = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path
      className={outline}
      d="M25,5 L50,3 L70,8 L85,5 L95,20 L90,40 L95,55 L88,70 L80,85 L65,95 L45,90 L30,80 L20,65 L10,50 L15,30 L20,15 Z"
    />
    {/* Lublin */}
    <circle cx="55" cy="40" r="2.5" className={cityDot} />
    <text x="55" y="36" textAnchor="middle" className={cityLabel}>Lublin</text>
    {/* Zamość */}
    <circle cx="72" cy="60" r="1.8" className={cityDot} />
    <text x="72" y="56" textAnchor="middle" className={cityLabel}>Zamość</text>
    {/* Chełm */}
    <circle cx="80" cy="42" r="1.8" className={cityDot} />
    <text x="80" y="38" textAnchor="middle" className={cityLabel}>Chełm</text>
    {/* Puławy */}
    <circle cx="35" cy="30" r="1.5" className={cityDot} />
    <text x="35" y="26" textAnchor="middle" className={cityLabel}>Puławy</text>
    {/* Biała Podlaska */}
    <circle cx="75" cy="18" r="1.5" className={cityDot} />
    <text x="75" y="14" textAnchor="middle" className={cityLabel}>Biała Podlaska</text>
  </svg>
);

export const SwietokrzyskieMap = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full">
    <path
      className={outline}
      d="M15,10 L40,5 L65,8 L85,12 L90,30 L85,48 L75,60 L55,68 L35,72 L18,62 L8,45 L5,28 L10,15 Z"
    />
    {/* Kielce */}
    <circle cx="45" cy="35" r="2.5" className={cityDot} />
    <text x="45" y="31" textAnchor="middle" className={cityLabel}>Kielce</text>
    {/* Ostrowiec Św. */}
    <circle cx="70" cy="22" r="1.8" className={cityDot} />
    <text x="70" y="18" textAnchor="middle" className={cityLabel}>Ostrowiec Św.</text>
    {/* Starachowice */}
    <circle cx="55" cy="18" r="1.5" className={cityDot} />
    <text x="55" y="14" textAnchor="middle" className={cityLabel}>Starachowice</text>
    {/* Skarżysko-K. */}
    <circle cx="30" cy="20" r="1.5" className={cityDot} />
    <text x="30" y="16" textAnchor="middle" className={cityLabel}>Skarżysko-K.</text>
    {/* Sandomierz */}
    <circle cx="72" cy="38" r="1.5" className={cityDot} />
    <text x="72" y="34" textAnchor="middle" className={cityLabel}>Sandomierz</text>
  </svg>
);

export const MalopolskieMap = () => (
  <svg viewBox="0 0 120 70" className="w-full h-full">
    <path
      className={outline}
      d="M5,20 L20,10 L45,5 L70,8 L95,5 L115,15 L110,35 L105,50 L90,60 L70,65 L50,62 L30,58 L15,50 L5,35 Z"
    />
    {/* Kraków */}
    <circle cx="45" cy="30" r="2.5" className={cityDot} />
    <text x="45" y="26" textAnchor="middle" className={cityLabel}>Kraków</text>
    {/* Tarnów */}
    <circle cx="82" cy="30" r="1.8" className={cityDot} />
    <text x="82" y="26" textAnchor="middle" className={cityLabel}>Tarnów</text>
    {/* Nowy Sącz */}
    <circle cx="78" cy="50" r="1.8" className={cityDot} />
    <text x="78" y="46" textAnchor="middle" className={cityLabel}>Nowy Sącz</text>
    {/* Oświęcim */}
    <circle cx="18" cy="28" r="1.5" className={cityDot} />
    <text x="18" y="24" textAnchor="middle" className={cityLabel}>Oświęcim</text>
    {/* Nowy Targ */}
    <circle cx="55" cy="50" r="1.5" className={cityDot} />
    <text x="55" y="46" textAnchor="middle" className={cityLabel}>Nowy Targ</text>
  </svg>
);
