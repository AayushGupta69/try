import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
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
      <Contact />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={true}
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}
