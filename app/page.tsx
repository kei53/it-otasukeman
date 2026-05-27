import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problems />
      <Services />
      <Pricing />
      <Flow />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
