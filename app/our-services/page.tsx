import ServicesIntro from "@/components/sections/services/ServicesIntro";
import ServicesAccordion from "@/components/sections/services/ServicesAccordion";
import WhyChoose from "@/components/sections/services/WhyChoose";

export default function OurServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesIntro />
      <ServicesAccordion />
      <WhyChoose />
    </div>
  );
}
