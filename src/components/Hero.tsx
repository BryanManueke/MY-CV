import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Hi, Saya Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-delay">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
            Saya membuat aplikasi web modern yang indah dan fungsional dengan teknologi terkini
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-3">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 shadow-glow-primary transition-all hover:scale-105"
            >
              Lihat Projects
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              className="transition-all hover:scale-105"
            >
              Hubungi Saya
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
