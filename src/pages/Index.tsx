import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesOverview />
    </div>
  );
};

export default Index;
