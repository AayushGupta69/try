import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import FeatureCards from "@/components/feature-cards";
import AppShowcase from "@/components/showcase-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <FeatureCards />
      <Testimonials />
      <Footer />
    </>
  );
}
