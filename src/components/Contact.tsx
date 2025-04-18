
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or interested in working with us? Reach out, and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-md p-4 text-center animate-fade-in">
                <p className="text-green-500 font-medium">Your message has been sent successfully!</p>
                <p className="text-muted-foreground mt-2">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="John Doe"
                    className="bg-secondary/20 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com"
                    className="bg-secondary/20 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    placeholder="How can we help you?"
                    className="bg-secondary/20 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="Write your message here..."
                    className="min-h-[150px] bg-secondary/20 border-border focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">◌</span> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you! Whether you have a question about our projects, 
                services, or just want to say hello, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@nervult.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@nervult.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <address className="text-muted-foreground not-italic">
                      1234 Tech Avenue<br />
                      San Francisco, CA 94105
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-3">Connect with us</h4>
              <p className="text-muted-foreground mb-4">
                Follow us on social media for the latest updates on our projects and technologies.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/nervult" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/30 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://instagram.com/nervult" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/30 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://linkedin.com/company/nervult" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/30 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://discord.gg/nervult" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/30 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  aria-label="Discord"
                >
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
