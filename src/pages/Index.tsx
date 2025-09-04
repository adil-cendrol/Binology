import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ProductShowcase from "@/components/ProductShowcase"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
