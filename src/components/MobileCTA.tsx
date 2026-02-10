import { Phone } from "lucide-react";
import { getPhoneFormatted, getPhoneHref } from "@/lib/contact";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 p-4 bg-gradient-to-t from-navy via-navy to-transparent">
      <a
        href="tel:+48575857929"
        className="btn-gold w-full justify-center text-center"
      >
        <Phone className="w-5 h-5" />
        <span>Zadzwoń: 575 857 929</span>
      </a>
    </div>
  );
};

export default MobileCTA;
