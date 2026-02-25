import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Lang = "pl" | "en";

const translations = {
  pl: {
    // Hero
    heroTitle: "HALE STALOWE • WIATY • CHŁODNIE • CARPORTY",
    heroSubtitle: "PROJEKTOWANIE • WYKONAWSTWO • NADZÓR",
    heroEmailCta: "Napisz do nas",
    heroCta: "Skontaktuj się z nami i otrzymaj bezpłatną wycenę",

    // Services
    servicesTitle: "Zakres usług",
    servicesSubtitle: "Oferujemy kompleksową obsługę od projektu po realizację. Specjalizujemy się w halach stalowych, wiatach, chłodniach i carportach.",
    serviceDesignTitle: "Projektowanie",
    serviceDesignDesc: "Kompleksowe projekty konstrukcji stalowych dostosowane do indywidualnych potrzeb klienta. Nowoczesne rozwiązania techniczne.",
    serviceBuildTitle: "Wykonawstwo",
    serviceBuildDesc: "Profesjonalna realizacja inwestycji od fundamentów po dach. Terminowość i najwyższa jakość wykonania.",
    serviceSupervisionTitle: "Nadzór",
    serviceSupervisionDesc: "Pełny nadzór inwestorski i kontrola jakości na każdym etapie budowy. Bezpieczeństwo Twojej inwestycji.",

    // Area
    areaTitle: "Obszar działalności",
    areaSubtitle: "Realizujemy inwestycje na terenie południowo-wschodniej Polski.",
    areaPodkarpackie: "Podkarpackie",
    areaLubelskie: "Lubelskie",
    areaSwietokrzyskie: "Świętokrzyskie",
    areaMalopolskie: "Małopolskie",

    // Contact
    contactTitle: "Skontaktuj się z nami",
    contactSubtitle: "Odpowiadamy na zapytania w ciągu 24 godzin. Bezpłatna wycena i konsultacja.",
    contactPhone: "Telefon",
    contactEmail: "E-mail",
    contactWebsite: "Strona www",
    contactQrText: "Zeskanuj i zobacz ofertę",

    // Mobile CTA
    mobileCta: "Zadzwoń:",

    // Footer
    footerRights: "Wszystkie prawa zastrzeżone.",
  },
  en: {
    // Hero
    heroTitle: "STEEL HALLS • SHELTERS • COLD STORAGE • CARPORTS",
    heroSubtitle: "DESIGN • CONSTRUCTION • SUPERVISION",
    heroEmailCta: "Write to us",
    heroCta: "Contact us for a free quote",

    // Services
    servicesTitle: "Our services",
    servicesSubtitle: "We offer comprehensive service from design to construction. We specialize in steel halls, canopies, cold stores and carports.",
    serviceDesignTitle: "Design",
    serviceDesignDesc: "Comprehensive steel structure designs tailored to individual client needs. Modern technical solutions.",
    serviceBuildTitle: "Construction",
    serviceBuildDesc: "Professional project execution from foundations to roof. Timeliness and highest quality workmanship.",
    serviceSupervisionTitle: "Supervision",
    serviceSupervisionDesc: "Full investor supervision and quality control at every stage of construction. Security for your investment.",

    // Area
    areaTitle: "Area of operations",
    areaSubtitle: "We carry out projects in south-eastern Poland.",
    areaPodkarpackie: "Podkarpackie",
    areaLubelskie: "Lublin",
    areaSwietokrzyskie: "Świętokrzyskie",
    areaMalopolskie: "Lesser Poland",

    // Contact
    contactTitle: "Get in touch",
    contactSubtitle: "We respond to inquiries within 24 hours. Free quote and consultation.",
    contactPhone: "Phone",
    contactEmail: "E-mail",
    contactWebsite: "Website",
    contactQrText: "Scan to see our offer",

    // Mobile CTA
    mobileCta: "Call:",

    // Footer
    footerRights: "All rights reserved.",
  },
} as const;

type Translations = Record<keyof typeof translations.pl, string>;

interface LangContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pl");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "pl" ? "en" : "pl"));
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
