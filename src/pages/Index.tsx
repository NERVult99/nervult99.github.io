
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // This effect will add the dark class to the html element to ensure dark mode is applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Handle smooth scrolling for internal anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
