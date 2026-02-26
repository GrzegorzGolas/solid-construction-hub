import { useMemo } from "react";

// GeoJSON coordinates [lon, lat] for each voivodeship (simplified)
const podkarpackieCoords: [number, number][] = [
  [22.006,50.767],[22.117,50.800],[22.200,50.790],[22.266,50.754],[22.200,50.679],
  [22.209,50.664],[22.483,50.617],[22.621,50.565],[22.629,50.516],[22.664,50.485],
  [22.637,50.468],[22.560,50.463],[22.521,50.422],[22.541,50.386],[22.580,50.363],
  [22.717,50.382],[22.765,50.362],[22.707,50.346],[22.855,50.317],[23.111,50.315],
  [23.180,50.331],[23.313,50.422],[23.384,50.427],[23.510,50.414],[23.561,50.359],
  [23.661,50.326],[23.625,50.310],[23.601,50.275],[23.456,50.208],[23.410,50.160],
  [23.294,50.100],[23.278,50.069],[23.228,50.052],[23.219,50.026],[22.911,49.782],
  [22.895,49.746],[22.794,49.690],[22.763,49.633],[22.677,49.567],[22.667,49.527],
  [22.700,49.494],[22.697,49.445],[22.813,49.315],[22.790,49.271],[22.733,49.232],
  [22.753,49.213],[22.731,49.205],[22.716,49.169],[22.758,49.186],[22.756,49.154],
  [22.797,49.158],[22.796,49.140],[22.836,49.112],[22.863,49.115],[22.869,49.097],
  [22.896,49.096],[22.875,49.079],[22.885,49.024],[22.898,49.019],[22.891,49.006],
  [22.784,49.054],[22.674,49.044],[22.602,49.095],[22.493,49.089],[22.418,49.104],
  [22.379,49.146],[22.317,49.134],[22.236,49.149],[22.244,49.176],[22.231,49.185],
  [22.196,49.172],[22.149,49.200],[22.054,49.216],[22.041,49.225],[22.036,49.284],
  [21.990,49.312],[21.977,49.344],[21.902,49.354],[21.848,49.391],[21.807,49.383],
  [21.785,49.356],[21.726,49.416],[21.664,49.417],[21.637,49.449],[21.513,49.420],
  [21.470,49.503],[21.459,49.556],[21.468,49.607],[21.423,49.705],[21.387,49.731],
  [21.229,49.789],[21.255,49.819],[21.349,49.869],[21.299,49.905],[21.258,49.906],
  [21.226,49.949],[21.238,50.052],[21.208,50.193],[21.210,50.230],[21.325,50.383],
  [21.375,50.412],[21.451,50.420],[21.498,50.460],[21.654,50.524],[21.843,50.668],
  [21.899,50.803],[22.006,50.767]
];

const lubelskieCoords: [number, number][] = [
  [23.200,52.297],[23.192,52.286],[23.220,52.278],[23.219,52.226],[23.383,52.210],
  [23.435,52.174],[23.509,52.183],[23.519,52.175],[23.499,52.155],[23.526,52.151],
  [23.559,52.113],[23.602,52.126],[23.656,52.083],[23.663,52.052],[23.657,52.030],
  [23.690,52.008],[23.665,51.992],[23.671,51.978],[23.629,51.963],[23.649,51.945],
  [23.617,51.925],[23.641,51.902],[23.624,51.892],[23.634,51.881],[23.612,51.886],
  [23.623,51.863],[23.603,51.848],[23.627,51.837],[23.648,51.795],[23.538,51.732],
  [23.564,51.727],[23.571,51.717],[23.558,51.711],[23.577,51.703],[23.557,51.689],
  [23.568,51.670],[23.546,51.661],[23.556,51.643],[23.545,51.607],[23.585,51.564],
  [23.568,51.542],[23.620,51.535],[23.635,51.519],[23.621,51.501],[23.677,51.481],
  [23.653,51.451],[23.688,51.444],[23.707,51.408],[23.684,51.395],[23.689,51.373],
  [23.660,51.360],[23.641,51.311],[23.657,51.283],[23.724,51.268],[23.748,51.213],
  [23.871,51.150],[23.874,51.134],[23.853,51.127],[23.859,51.099],[23.872,51.082],
  [23.912,51.080],[23.939,51.021],[23.923,51.008],[23.958,51.002],[23.996,50.938],
  [24.056,50.895],[24.153,50.873],[24.152,50.860],[24.107,50.839],[23.994,50.843],
  [23.962,50.804],[23.974,50.776],[24.023,50.770],[24.019,50.725],[24.076,50.723],
  [24.052,50.696],[24.092,50.663],[24.089,50.636],[24.110,50.636],[24.059,50.457],
  [24.029,50.436],[23.942,50.412],[23.767,50.414],[23.715,50.384],[23.690,50.335],
  [23.661,50.326],[23.561,50.359],[23.510,50.414],[23.384,50.427],[23.313,50.422],
  [23.180,50.331],[23.111,50.315],[22.855,50.317],[22.707,50.346],[22.714,50.362],
  [22.765,50.362],[22.717,50.382],[22.580,50.363],[22.541,50.386],[22.521,50.422],
  [22.560,50.463],[22.637,50.468],[22.664,50.485],[22.629,50.516],[22.621,50.565],
  [22.483,50.617],[22.209,50.664],[22.200,50.679],[22.262,50.760],[22.155,50.802],
  [22.031,50.767],[21.984,50.771],[21.910,50.808],[21.868,50.868],[21.852,50.942],
  [21.858,51.036],[21.806,51.179],[21.854,51.344],[21.807,51.386],[21.822,51.415],
  [21.859,51.425],[21.861,51.495],[21.841,51.540],[21.685,51.568],[21.657,51.583],
  [21.645,51.620],[21.679,51.645],[21.820,51.629],[21.903,51.663],[21.907,51.677],
  [21.852,51.734],[21.947,51.782],[21.888,51.840],[21.888,51.870],[21.838,51.956],
  [21.944,52.002],[22.193,52.003],[22.276,52.022],[22.333,52.012],[22.462,52.070],
  [22.624,52.064],[22.651,52.078],[22.660,52.115],[22.705,52.137],[22.800,52.105],
  [22.891,52.095],[23.091,52.304],[23.200,52.297]
];

const malopolskieCoords: [number, number][] = [
  [20.159,50.435],[20.212,50.433],[20.281,50.403],[20.368,50.267],[20.472,50.181],
  [20.683,50.173],[20.719,50.183],[20.828,50.273],[21.284,50.327],[21.210,50.230],
  [21.238,50.052],[21.226,49.949],[21.258,49.906],[21.299,49.905],[21.349,49.869],
  [21.226,49.796],[21.423,49.705],[21.468,49.607],[21.459,49.556],[21.470,49.503],
  [21.513,49.420],[21.491,49.431],[21.475,49.415],[21.432,49.416],[21.404,49.435],
  [21.279,49.461],[21.206,49.405],[21.122,49.437],[21.072,49.427],[21.050,49.410],
  [21.101,49.376],[21.046,49.367],[20.993,49.332],[20.987,49.311],[20.929,49.299],
  [20.900,49.325],[20.871,49.321],[20.881,49.333],[20.864,49.347],[20.827,49.336],
  [20.797,49.349],[20.808,49.361],[20.758,49.375],[20.755,49.401],[20.724,49.420],
  [20.653,49.403],[20.616,49.422],[20.575,49.380],[20.432,49.421],[20.434,49.400],
  [20.417,49.409],[20.387,49.392],[20.374,49.411],[20.326,49.408],[20.312,49.344],
  [20.199,49.344],[20.165,49.308],[20.147,49.323],[20.102,49.252],[20.092,49.181],
  [20.022,49.202],[19.984,49.233],[19.934,49.237],[19.902,49.231],[19.863,49.191],
  [19.767,49.200],[19.774,49.241],[19.822,49.272],[19.801,49.290],[19.808,49.358],
  [19.794,49.403],[19.753,49.407],[19.718,49.385],[19.705,49.398],[19.636,49.403],
  [19.649,49.421],[19.642,49.448],[19.615,49.443],[19.573,49.470],[19.531,49.569],
  [19.469,49.600],[19.478,49.609],[19.429,49.612],[19.404,49.639],[19.436,49.712],
  [19.312,49.735],[19.270,49.802],[19.189,49.827],[19.170,49.902],[19.141,49.898],
  [19.112,49.920],[19.120,49.951],[19.157,49.998],[19.405,50.175],[19.305,50.251],
  [19.343,50.268],[19.409,50.258],[19.497,50.362],[19.580,50.341],[19.632,50.350],
  [19.716,50.395],[19.842,50.392],[19.968,50.446],[19.956,50.485],[20.076,50.480],
  [20.159,50.435]
];

const swietokrzyskieCoords: [number, number][] = [
  [20.707,51.146],[20.746,51.117],[20.881,51.101],[21.005,51.110],[21.063,51.136],
  [21.088,51.169],[21.140,51.171],[21.144,51.131],[21.209,51.059],[21.364,51.044],
  [21.501,51.009],[21.614,51.034],[21.855,51.046],[21.852,50.942],[21.868,50.868],
  [21.910,50.808],[21.893,50.794],[21.868,50.706],[21.820,50.647],[21.654,50.524],
  [21.498,50.460],[21.451,50.420],[21.354,50.402],[21.284,50.327],[20.828,50.273],
  [20.719,50.183],[20.683,50.173],[20.456,50.185],[20.368,50.267],[20.318,50.359],
  [20.250,50.420],[20.134,50.442],[20.076,50.480],[19.825,50.510],[19.903,50.576],
  [19.954,50.578],[19.855,50.671],[19.748,50.691],[19.750,50.735],[19.852,50.758],
  [19.853,50.775],[19.839,50.793],[19.751,50.804],[19.855,50.879],[19.847,50.936],
  [19.866,50.993],[19.920,50.987],[20.043,50.927],[20.060,50.963],[20.058,51.010],
  [19.990,51.043],[19.973,51.079],[20.025,51.157],[20.188,51.150],[20.283,51.203],
  [20.367,51.215],[20.406,51.283],[20.452,51.292],[20.482,51.287],[20.520,51.226],
  [20.671,51.174],[20.707,51.146]
];

// City data: [name, lon, lat, isCapital]
const podkarpackieCities: [string, number, number, boolean][] = [
  ["Rzeszów", 21.999, 50.042, true],
  ["Przemyśl", 22.768, 49.784, false],
  ["Krosno", 21.770, 49.689, false],
  ["Stalowa Wola", 22.054, 50.583, false],
  ["Mielec", 21.427, 50.287, false],
  ["Tarnobrzeg", 21.679, 50.573, false],
  ["Jarosław", 22.678, 49.969, false],
  ["Sanok", 22.209, 49.557, false],
  ["Dębica", 21.411, 50.050, false],
  ["Łańcut", 22.230, 50.068, false],
  ["Lesko", 22.332, 49.470, false],
  ["Nisko", 22.139, 50.520, false],
];

const lubelskieCities: [string, number, number, boolean][] = [
  ["Lublin", 22.568, 51.247, true],
  ["Zamość", 23.252, 50.723, false],
  ["Chełm", 23.472, 51.133, false],
  ["Puławy", 21.970, 51.417, false],
  ["Biała Podlaska", 23.116, 52.032, false],
  ["Świdnik", 22.697, 51.222, false],
  ["Kraśnik", 22.226, 50.924, false],
  ["Łuków", 22.383, 51.933, false],
  ["Hrubieszów", 23.890, 50.805, false],
  ["Tomaszów Lub.", 23.416, 50.448, false],
  ["Radzyń Podl.", 22.619, 51.783, false],
];

const malopolskieCities: [string, number, number, boolean][] = [
  ["Kraków", 19.945, 50.062, true],
  ["Tarnów", 20.986, 50.013, false],
  ["Nowy Sącz", 20.693, 49.625, false],
  ["Oświęcim", 19.244, 50.034, false],
  ["Nowy Targ", 20.033, 49.477, false],
  ["Chrzanów", 19.402, 50.136, false],
  ["Bochnia", 20.430, 49.969, false],
  ["Zakopane", 19.949, 49.299, false],
  ["Wieliczka", 20.065, 49.987, false],
  ["Gorlice", 21.160, 49.655, false],
  ["Olkusz", 19.564, 50.281, false],
  ["Myślenice", 19.938, 49.832, false],
];

const swietokrzyskieCities: [string, number, number, boolean][] = [
  ["Kielce", 20.629, 50.870, true],
  ["Ostrowiec Św.", 21.385, 50.930, false],
  ["Starachowice", 21.072, 51.038, false],
  ["Skarżysko-K.", 20.861, 51.114, false],
  ["Sandomierz", 21.749, 50.682, false],
  ["Jędrzejów", 20.305, 50.641, false],
  ["Końskie", 20.413, 51.191, false],
  ["Busko-Zdrój", 20.720, 50.471, false],
  ["Pińczów", 20.527, 50.520, false],
  ["Staszów", 21.167, 50.563, false],
];

interface VoivodeshipMapProps {
  coords: [number, number][];
  cities: [string, number, number, boolean][];
}

const VoivodeshipSVG = ({ coords, cities }: VoivodeshipMapProps) => {
  const { path, cityPositions, viewBox } = useMemo(() => {
    // Find bounding box
    let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
    for (const [lon, lat] of coords) {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }

    const padding = 0.05;
    const lonRange = maxLon - minLon;
    const latRange = maxLat - minLat;
    minLon -= lonRange * padding;
    maxLon += lonRange * padding;
    minLat -= latRange * padding;
    maxLat += latRange * padding;

    // Apply Mercator-like correction for Polish latitudes (~50°N)
    const midLat = (minLat + maxLat) / 2;
    const cosLat = Math.cos((midLat * Math.PI) / 180);
    const correctedLonRange = (maxLon - minLon) * cosLat;
    const correctedLatRange = maxLat - minLat;

    const size = 200;
    const width = correctedLonRange >= correctedLatRange
      ? size
      : size * (correctedLonRange / correctedLatRange);
    const height = correctedLatRange >= correctedLonRange
      ? size
      : size * (correctedLatRange / correctedLonRange);

    const toX = (lon: number) => ((lon - minLon) * cosLat / correctedLonRange) * width;
    const toY = (lat: number) => ((maxLat - lat) / correctedLatRange) * height;

    // Build path - sample every 2nd point for smoothness
    const points = coords.map(([lon, lat]) => `${toX(lon).toFixed(1)},${toY(lat).toFixed(1)}`);
    const pathD = `M ${points.join(" L ")} Z`;

    // Map cities with label collision avoidance
    const mapped = cities.map(([name, lon, lat, isCapital]) => ({
      name,
      x: toX(lon),
      y: toY(lat),
      isCapital,
      labelX: toX(lon),
      labelY: toY(lat) - (isCapital ? 7 : 5),
      anchor: "middle" as "middle" | "start" | "end",
    }));

    // Sort: capitals first so they get priority placement
    mapped.sort((a, b) => (b.isCapital ? 1 : 0) - (a.isCapital ? 1 : 0));

    // Simple collision resolution
    const labelH = 6;
    const charW = 3.2;
    
    const getRect = (c: typeof mapped[0]) => {
      const w = c.name.length * charW * (c.isCapital ? 1.2 : 1);
      let left = c.labelX - w / 2;
      if (c.anchor === "start") left = c.labelX;
      if (c.anchor === "end") left = c.labelX - w;
      return { left, right: left + w, top: c.labelY - labelH, bottom: c.labelY };
    };

    const overlaps = (a: ReturnType<typeof getRect>, b: ReturnType<typeof getRect>) =>
      a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

    // Try different positions for each label to avoid overlaps
    for (let i = 0; i < mapped.length; i++) {
      const ci = mapped[i];
      const offsets = [
        { dy: -(ci.isCapital ? 7 : 5), anchor: "middle" as const },
        { dy: (ci.isCapital ? 12 : 10), anchor: "middle" as const },
        { dy: -1, anchor: "start" as const },
        { dy: -1, anchor: "end" as const },
        { dy: -(ci.isCapital ? 11 : 9), anchor: "start" as const },
        { dy: -(ci.isCapital ? 11 : 9), anchor: "end" as const },
        { dy: (ci.isCapital ? 12 : 10), anchor: "start" as const },
        { dy: (ci.isCapital ? 12 : 10), anchor: "end" as const },
      ];

      for (const off of offsets) {
        ci.labelY = ci.y + off.dy;
        ci.labelX = ci.x + (off.anchor === "start" ? 4 : off.anchor === "end" ? -4 : 0);
        ci.anchor = off.anchor;
        const rect = getRect(ci);
        let hasCollision = false;
        for (let j = 0; j < i; j++) {
          if (overlaps(rect, getRect(mapped[j]))) {
            hasCollision = true;
            break;
          }
        }
        if (!hasCollision) break;
      }
    }

    return {
      path: pathD,
      cityPositions: mapped,
      viewBox: `0 0 ${width.toFixed(0)} ${height.toFixed(0)}`,
    };
  }, [coords, cities]);

  return (
    <svg viewBox={viewBox} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Voivodeship outline */}
      <path
        d={path}
        className="fill-cream-dark stroke-gold"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Cities */}
      {cityPositions.map(({ name, x, y, isCapital, labelX, labelY, anchor }) => (
        <g key={name}>
          <circle
            cx={x}
            cy={y}
            r={isCapital ? 4 : 2.5}
            className="fill-gold"
            stroke="hsl(var(--navy))"
            strokeWidth={isCapital ? 1 : 0.5}
          />
          <text
            x={labelX}
            y={labelY}
            textAnchor={anchor}
            className="fill-navy"
            style={{ fontSize: isCapital ? "7px" : "5.5px", fontWeight: isCapital ? 700 : 500, fontFamily: "Montserrat, sans-serif" }}
          >
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export const PodkarpackieMap = () => (
  <VoivodeshipSVG coords={podkarpackieCoords} cities={podkarpackieCities} />
);

export const LubelskieMap = () => (
  <VoivodeshipSVG coords={lubelskieCoords} cities={lubelskieCities} />
);

export const SwietokrzyskieMap = () => (
  <VoivodeshipSVG coords={swietokrzyskieCoords} cities={swietokrzyskieCities} />
);

export const MalopolskieMap = () => (
  <VoivodeshipSVG coords={malopolskieCoords} cities={malopolskieCities} />
);
