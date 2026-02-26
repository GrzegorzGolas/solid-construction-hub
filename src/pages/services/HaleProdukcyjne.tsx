import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const HaleProdukcyjne = () => {
  const service = services.find((s) => s.slug === "hale-produkcyjne")!;
  return <ServicePageLayout service={service} />;
};

export default HaleProdukcyjne;
