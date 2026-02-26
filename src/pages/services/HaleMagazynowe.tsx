import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const HaleMagazynowe = () => {
  const service = services.find((s) => s.slug === "hale-magazynowe")!;
  return <ServicePageLayout service={service} />;
};

export default HaleMagazynowe;
