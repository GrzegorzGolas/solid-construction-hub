import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { getPhoneHref, getPhoneFormatted } from "@/lib/contact";

const navLinks = [
  { label: "Oferta", href: "/#oferta" },
  { label: "Jak pracujemy", href: "/#jak-pracujemy" },
  { label: "Realizacje", href: "/#realizacje" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#formularz" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg backdrop-blur-md"
          : "bg-navy/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-lg md:text-xl text-on-navy tracking-tight">
            Solidne<span className="text-gold">Wykonawstwo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-cream/80 hover:text-gold text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getPhoneHref()}
            className="hidden md:inline-flex items-center gap-2 text-cream/80 hover:text-gold text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            {getPhoneFormatted()}
          </a>
          <Link
            to="/#formularz"
            onClick={() => handleNavClick("/#formularz")}
            className="btn-gold !px-5 !py-2.5 !text-sm"
          >
            Szybka wycena
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cream p-1"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-navy border-t border-navy-light">
          <div className="container-custom py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-cream/80 hover:text-gold py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getPhoneHref()}
              className="inline-flex items-center gap-2 text-gold py-2 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              {getPhoneFormatted()}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
