import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const Dokumentacja = () => {
  const service = services.find((s) => s.slug === "dokumentacja")!;
  return <ServicePageLayout service={service} />;
};

export default Dokumentacja;
