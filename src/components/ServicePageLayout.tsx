import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ServiceData } from "@/lib/serviceData";

interface Props {
  service: ServiceData;
}

const ServicePageLayout = ({ service }: Props) => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy blueprint-bg py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-navy font-heading mb-4 leading-tight">
              {service.h1}
            </h1>
            <p className="text-cream/70 max-w-2xl mx-auto text-lg mb-8">
              {service.description}
            </p>
            <Link
              to="/#formularz"
              className="btn-gold group text-lg"
            >
              Zamów wycenę
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Dla kogo */}
        <section className="section-padding bg-cream">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy font-heading mb-4">
              Dla kogo?
            </h2>
            <p className="text-steel leading-relaxed text-lg">
              {service.dlaKogo}
            </p>
          </div>
        </section>

        {/* Co obejmuje */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy font-heading mb-6">
              Co obejmuje realizacja?
            </h2>
            <ul className="space-y-3">
              {service.coObejmuje.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-cream">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy font-heading mb-6">
              Najczęstsze pytania
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-navy font-heading font-bold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-steel-light leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy blueprint-bg">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-navy font-heading mb-4">
              Zainteresowany? Zamów bezpłatną wycenę
            </h2>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">
              Wypełnij formularz, a przygotujemy indywidualną ofertę w ciągu 48 godzin.
            </p>
            <Link to="/#formularz" className="btn-gold group text-lg">
              Zamów wycenę
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePageLayout;
