import { useLang } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-navy py-8 pb-24 md:pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream/60 text-sm">
          <p>
            © {new Date().getFullYear()} Solidne Wykonawstwo. {t.footerRights}
          </p>
          <p>
            Firma Agile Solution Grzegorz Golas • NIP: 814 142 12 80
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
