import { Phone } from "lucide-react";
import { getPhoneFormatted, getPhoneHref } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

const MobileCTA = () => {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 p-4 bg-gradient-to-t from-navy via-navy to-transparent">
      <a href={getPhoneHref()} className="btn-gold w-full justify-center text-center">
        <Phone className="w-5 h-5" />
        <span>{t.mobileCta} {getPhoneFormatted()}</span>
      </a>
    </div>
  );
};

export default MobileCTA;
