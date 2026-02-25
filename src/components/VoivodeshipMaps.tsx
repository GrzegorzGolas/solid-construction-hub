const cityDot = "fill-gold";
const cityDotMain = "fill-gold";
const cityLabel = "fill-navy text-[3px] font-bold";
const cityLabelSm = "fill-navy text-[2.5px]";

export const PodkarpackieMap = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full">
    {/* Rzeszów - capital */}
    <circle cx="50" cy="35" r="2.5" className={cityDotMain} />
    <text x="50" y="31" textAnchor="middle" className={cityLabel}>Rzeszów</text>
    {/* Przemyśl */}
    <circle cx="78" cy="40" r="1.8" className={cityDot} />
    <text x="78" y="36.5" textAnchor="middle" className={cityLabelSm}>Przemyśl</text>
    {/* Krosno */}
    <circle cx="38" cy="55" r="1.8" className={cityDot} />
    <text x="38" y="51.5" textAnchor="middle" className={cityLabelSm}>Krosno</text>
    {/* Stalowa Wola */}
    <circle cx="30" cy="12" r="1.5" className={cityDot} />
    <text x="30" y="8.5" textAnchor="middle" className={cityLabelSm}>Stalowa Wola</text>
    {/* Mielec */}
    <circle cx="25" cy="28" r="1.5" className={cityDot} />
    <text x="25" y="24.5" textAnchor="middle" className={cityLabelSm}>Mielec</text>
    {/* Tarnobrzeg */}
    <circle cx="18" cy="18" r="1.5" className={cityDot} />
    <text x="18" y="14.5" textAnchor="middle" className={cityLabelSm}>Tarnobrzeg</text>
    {/* Jarosław */}
    <circle cx="72" cy="25" r="1.3" className={cityDot} />
    <text x="72" y="22" textAnchor="middle" className={cityLabelSm}>Jarosław</text>
    {/* Sanok */}
    <circle cx="58" cy="60" r="1.3" className={cityDot} />
    <text x="58" y="57" textAnchor="middle" className={cityLabelSm}>Sanok</text>
    {/* Dębica */}
    <circle cx="15" cy="38" r="1.3" className={cityDot} />
    <text x="15" y="35" textAnchor="middle" className={cityLabelSm}>Dębica</text>
    {/* Łańcut */}
    <circle cx="60" cy="30" r="1.2" className={cityDot} />
    <text x="60" y="27" textAnchor="middle" className={cityLabelSm}>Łańcut</text>
    {/* Lesko */}
    <circle cx="72" cy="62" r="1.2" className={cityDot} />
    <text x="72" y="59" textAnchor="middle" className={cityLabelSm}>Lesko</text>
    {/* Nisko */}
    <circle cx="42" cy="15" r="1.2" className={cityDot} />
    <text x="42" y="12" textAnchor="middle" className={cityLabelSm}>Nisko</text>
  </svg>
);

export const LubelskieMap = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Lublin - capital */}
    <circle cx="50" cy="42" r="2.5" className={cityDotMain} />
    <text x="50" y="38" textAnchor="middle" className={cityLabel}>Lublin</text>
    {/* Zamość */}
    <circle cx="72" cy="62" r="1.8" className={cityDot} />
    <text x="72" y="58.5" textAnchor="middle" className={cityLabelSm}>Zamość</text>
    {/* Chełm */}
    <circle cx="78" cy="45" r="1.8" className={cityDot} />
    <text x="78" y="41.5" textAnchor="middle" className={cityLabelSm}>Chełm</text>
    {/* Puławy */}
    <circle cx="35" cy="35" r="1.5" className={cityDot} />
    <text x="35" y="31.5" textAnchor="middle" className={cityLabelSm}>Puławy</text>
    {/* Biała Podlaska */}
    <circle cx="75" cy="20" r="1.5" className={cityDot} />
    <text x="75" y="16.5" textAnchor="middle" className={cityLabelSm}>Biała Podlaska</text>
    {/* Świdnik */}
    <circle cx="55" cy="48" r="1.3" className={cityDot} />
    <text x="55" y="52" textAnchor="middle" className={cityLabelSm}>Świdnik</text>
    {/* Kraśnik */}
    <circle cx="40" cy="55" r="1.3" className={cityDot} />
    <text x="40" y="52" textAnchor="middle" className={cityLabelSm}>Kraśnik</text>
    {/* Łuków */}
    <circle cx="55" cy="18" r="1.3" className={cityDot} />
    <text x="55" y="15" textAnchor="middle" className={cityLabelSm}>Łuków</text>
    {/* Hrubieszów */}
    <circle cx="88" cy="58" r="1.2" className={cityDot} />
    <text x="88" y="55" textAnchor="middle" className={cityLabelSm}>Hrubieszów</text>
    {/* Tomaszów Lub. */}
    <circle cx="80" cy="72" r="1.2" className={cityDot} />
    <text x="80" y="69" textAnchor="middle" className={cityLabelSm}>Tomaszów Lub.</text>
    {/* Radzyń Podlaski */}
    <circle cx="62" cy="22" r="1.2" className={cityDot} />
    <text x="62" y="26" textAnchor="middle" className={cityLabelSm}>Radzyń Podl.</text>
  </svg>
);

export const SwietokrzyskieMap = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full">
    {/* Kielce - capital */}
    <circle cx="45" cy="35" r="2.5" className={cityDotMain} />
    <text x="45" y="31" textAnchor="middle" className={cityLabel}>Kielce</text>
    {/* Ostrowiec Św. */}
    <circle cx="72" cy="20" r="1.8" className={cityDot} />
    <text x="72" y="16.5" textAnchor="middle" className={cityLabelSm}>Ostrowiec Św.</text>
    {/* Starachowice */}
    <circle cx="55" cy="18" r="1.5" className={cityDot} />
    <text x="55" y="14.5" textAnchor="middle" className={cityLabelSm}>Starachowice</text>
    {/* Skarżysko-K. */}
    <circle cx="30" cy="20" r="1.5" className={cityDot} />
    <text x="30" y="16.5" textAnchor="middle" className={cityLabelSm}>Skarżysko-K.</text>
    {/* Sandomierz */}
    <circle cx="78" cy="35" r="1.5" className={cityDot} />
    <text x="78" y="31.5" textAnchor="middle" className={cityLabelSm}>Sandomierz</text>
    {/* Jędrzejów */}
    <circle cx="25" cy="48" r="1.3" className={cityDot} />
    <text x="25" y="45" textAnchor="middle" className={cityLabelSm}>Jędrzejów</text>
    {/* Końskie */}
    <circle cx="28" cy="12" r="1.3" className={cityDot} />
    <text x="28" y="9" textAnchor="middle" className={cityLabelSm}>Końskie</text>
    {/* Busko-Zdrój */}
    <circle cx="50" cy="52" r="1.3" className={cityDot} />
    <text x="50" y="56" textAnchor="middle" className={cityLabelSm}>Busko-Zdrój</text>
    {/* Pińczów */}
    <circle cx="35" cy="55" r="1.2" className={cityDot} />
    <text x="35" y="59" textAnchor="middle" className={cityLabelSm}>Pińczów</text>
    {/* Staszów */}
    <circle cx="65" cy="42" r="1.2" className={cityDot} />
    <text x="65" y="46" textAnchor="middle" className={cityLabelSm}>Staszów</text>
  </svg>
);

export const MalopolskieMap = () => (
  <svg viewBox="0 0 120 70" className="w-full h-full">
    {/* Kraków - capital */}
    <circle cx="42" cy="28" r="2.5" className={cityDotMain} />
    <text x="42" y="24" textAnchor="middle" className={cityLabel}>Kraków</text>
    {/* Tarnów */}
    <circle cx="82" cy="28" r="1.8" className={cityDot} />
    <text x="82" y="24.5" textAnchor="middle" className={cityLabelSm}>Tarnów</text>
    {/* Nowy Sącz */}
    <circle cx="80" cy="50" r="1.8" className={cityDot} />
    <text x="80" y="46.5" textAnchor="middle" className={cityLabelSm}>Nowy Sącz</text>
    {/* Oświęcim */}
    <circle cx="15" cy="25" r="1.5" className={cityDot} />
    <text x="15" y="21.5" textAnchor="middle" className={cityLabelSm}>Oświęcim</text>
    {/* Nowy Targ */}
    <circle cx="55" cy="52" r="1.5" className={cityDot} />
    <text x="55" y="48.5" textAnchor="middle" className={cityLabelSm}>Nowy Targ</text>
    {/* Chrzanów */}
    <circle cx="22" cy="20" r="1.3" className={cityDot} />
    <text x="22" y="17" textAnchor="middle" className={cityLabelSm}>Chrzanów</text>
    {/* Bochnia */}
    <circle cx="62" cy="30" r="1.3" className={cityDot} />
    <text x="62" y="34" textAnchor="middle" className={cityLabelSm}>Bochnia</text>
    {/* Zakopane */}
    <circle cx="55" cy="62" r="1.3" className={cityDot} />
    <text x="55" y="59" textAnchor="middle" className={cityLabelSm}>Zakopane</text>
    {/* Wieliczka */}
    <circle cx="50" cy="32" r="1.2" className={cityDot} />
    <text x="50" y="36" textAnchor="middle" className={cityLabelSm}>Wieliczka</text>
    {/* Gorlice */}
    <circle cx="100" cy="45" r="1.2" className={cityDot} />
    <text x="100" y="42" textAnchor="middle" className={cityLabelSm}>Gorlice</text>
    {/* Olkusz */}
    <circle cx="28" cy="12" r="1.2" className={cityDot} />
    <text x="28" y="9" textAnchor="middle" className={cityLabelSm}>Olkusz</text>
    {/* Myślenice */}
    <circle cx="42" cy="42" r="1.2" className={cityDot} />
    <text x="42" y="46" textAnchor="middle" className={cityLabelSm}>Myślenice</text>
  </svg>
);
