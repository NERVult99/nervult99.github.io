
import { Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      title: "Innovation",
      description: "We're constantly exploring new technologies and methodologies to stay ahead of the curve."
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: "Precision",
      description: "Our solutions are meticulously crafted with attention to detail and quality control."
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication in all our projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nervult is a forward-thinking organization dedicated to creating innovative solutions 
            that make a difference in the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              At Nervult, our mission is to develop cutting-edge technologies that solve complex problems 
              and enhance the digital experience for users worldwide. We're committed to excellence, 
              innovation, and making a positive impact through our work.
            </p>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              We envision a future where technology seamlessly integrates with everyday life, 
              empowering individuals and organizations to achieve more. Our team is driven by the 
              belief that great software can transform industries and improve lives.
            </p>
            <h3 className="text-2xl font-semibold">Our Team</h3>
            <p className="text-muted-foreground">
              We're a diverse group of developers, designers, and technologists united by our passion 
              for building exceptional digital products. Each team member brings unique expertise and 
              perspective to our collaborative process.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-md"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
