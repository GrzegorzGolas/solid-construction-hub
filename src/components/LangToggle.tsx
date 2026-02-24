import { useLang } from "@/lib/i18n";

const LangToggle = () => {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-1 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border shadow-md hover:shadow-lg transition-all duration-300 font-heading font-bold text-sm text-navy"
      aria-label="Switch language"
    >
      <span className={lang === "pl" ? "text-gold" : "text-steel-light"}>PL</span>
      <span className="text-steel-light">/</span>
      <span className={lang === "en" ? "text-gold" : "text-steel-light"}>EN</span>
    </button>
  );
};

export default LangToggle;
