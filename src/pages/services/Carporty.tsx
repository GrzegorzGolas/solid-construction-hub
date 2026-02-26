import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const Carporty = () => {
  const service = services.find((s) => s.slug === "carporty")!;
  return <ServicePageLayout service={service} />;
};

export default Carporty;
