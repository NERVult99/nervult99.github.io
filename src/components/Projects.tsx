
import { useState } from 'react';
import { ExternalLink, Code, Bot, BarChart3, Shield, Atom } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample project data with categories - this can be easily updated or loaded from an external source later
const projectsData = [
  {
    id: 1,
    title: "NeuralVision",
    description: "Advanced computer vision system for real-time object recognition and tracking.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "AI",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    link: "#",
    icon: <Bot size={24} />
  },
  {
    id: 2,
    title: "QuantumDB",
    description: "High-performance distributed database with quantum-resistant encryption.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    tags: ["Database", "Encryption", "Distributed Systems"],
    link: "#",
    icon: <Shield size={24} />
  },
  {
    id: 3,
    title: "CodeSynth",
    description: "Auto-generative code platform that transforms natural language into efficient algorithms.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    category: "DevTools",
    tags: ["AI", "Code Generation", "Developer Tools"],
    link: "#",
    icon: <Code size={24} />
  },
  {
    id: 4,
    title: "DataViz Platform",
    description: "Interactive data visualization framework for complex dataset exploration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Analytics",
    tags: ["Visualization", "Data Science", "Interactive"],
    link: "#",
    icon: <BarChart3 size={24} />
  },
  {
    id: 5,
    title: "ReactiveCore",
    description: "Reactive programming framework for building responsive and fault-tolerant applications.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&w=800&q=80",
    category: "DevTools",
    tags: ["Framework", "Reactive", "TypeScript"],
    link: "#",
    icon: <Atom size={24} />
  },
  {
    id: 6,
    title: "InsightEngine",
    description: "Business intelligence platform with predictive analytics capabilities.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=800&q=80",
    category: "Analytics",
    tags: ["Machine Learning", "Business", "Predictions"],
    link: "#",
    icon: <BarChart3 size={24} />
  },
];

// Extract unique categories
const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative solutions across various domains, from AI to infrastructure.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-secondary/30">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                        {project.icon}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <Badge variant="outline" className="ml-2 bg-secondary/30">
                          {project.category}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-secondary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink size={16} />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
