
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background with animated gradient */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            NERVULT
          </span>
        </h1>
        <p className="animate-fade-in mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Pushing the boundaries of technology innovation with
          cutting-edge solutions for tomorrow's challenges.
        </p>
        <div className="animate-fade-in mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground" asChild>
            <a href="#about">Learn More</a>
          </Button>
          <Button variant="outline" className="border-primary text-foreground hover:bg-primary/10" asChild>
            <a href="#projects">Our Projects</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
