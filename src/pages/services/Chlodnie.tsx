import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const Chlodnie = () => {
  const service = services.find((s) => s.slug === "chlodnie")!;
  return <ServicePageLayout service={service} />;
};

export default Chlodnie;
