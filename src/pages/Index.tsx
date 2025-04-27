import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      <section className="py-20 bg-magic-purple/10 relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Сделайте ваше мероприятие незабываемым
            </h2>
            <p className="text-xl mb-10 text-muted-foreground">
              Приглашая фокусника на ваше мероприятие, вы гарантированно создаете атмосферу восторга и удивления, которая запомнится надолго.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-magic-dark text-white font-medium">
              <Phone className="w-5 h-5" />
              <span>Позвоните сейчас: +7 (999) 123-45-67</span>
            </div>
          </div>
        </div>
        <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-magic-purple/20 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-magic-purple/20 blur-3xl"></div>
      </section>
      
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
