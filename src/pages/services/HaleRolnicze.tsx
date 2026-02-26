import ServicePageLayout from "@/components/ServicePageLayout";
import { services } from "@/lib/serviceData";

const HaleRolnicze = () => {
  const service = services.find((s) => s.slug === "hale-rolnicze")!;
  return <ServicePageLayout service={service} />;
};

export default HaleRolnicze;
