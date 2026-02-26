import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeatureCards from "@/components/feature-cards";
import AppShowcase from "@/components/showcase-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <FeatureCards />
      <Footer />
    </>
  );
}
