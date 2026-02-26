import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const WiatyStalowe = () => {
  const service = services.find((s) => s.slug === "wiaty-stalowe")!;
  return <ServicePageLayout service={service} />;
};

export default WiatyStalowe;
