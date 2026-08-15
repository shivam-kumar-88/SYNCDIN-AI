import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HowItWorksNew from "../components/HowItWorksNew";
import TestimonialsNew from "../components/TestimonialsNew";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Team from "../components/Team";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorksNew />
      <TestimonialsNew />
      <CTA />
      <Contact />
      <Team />
      <FAQ />
      <Pricing />
      <Footer />
      
<ScrollToTop />
    </div>
  );
}