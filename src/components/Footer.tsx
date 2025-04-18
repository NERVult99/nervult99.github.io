
import { Github, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/nervult', icon: <Github size={18} /> },
    { name: 'Instagram', href: 'https://instagram.com/nervult', icon: <Instagram size={18} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/nervult', icon: <Linkedin size={18} /> },
    { name: 'Discord', href: 'https://discord.gg/nervult', icon: <MessageSquare size={18} /> }
  ];
  
  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">NERVULT</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Pushing the boundaries of technology innovation with
                cutting-edge solutions for tomorrow's challenges.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-muted-foreground space-y-3">
                <p>1234 Tech Avenue</p>
                <p>San Francisco, CA 94105</p>
                <p className="mt-4">
                  <a href="mailto:contact@nervult.com" className="hover:text-primary transition-colors">
                    contact@nervult.com
                  </a>
                </p>
                <p>
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Nervult. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
