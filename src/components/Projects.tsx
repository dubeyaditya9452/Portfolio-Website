
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blog Website",
      description: "A full-stack blog application with authentication and RESTful APIs. Users can create, read, update, and delete blog posts.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      githubLink: "https://github.com/dubeyaditya9452"
    },
    {
      title: "E-Commerce Website",
      description: "A responsive shopping website using HTML, CSS, and JavaScript. Features product listings, cart functionality, and checkout.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/dubeyaditya9452"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue hover:bg-blue-dark" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a href="https://github.com/dubeyaditya9452" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
              <Github className="mr-2 h-4 w-4" />
              See More Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
