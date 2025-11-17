import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useProjects } from "@/hooks/useAPI";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="text-center text-muted-foreground">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="text-center text-red-500">Error loading projects</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Beberapa project yang telah saya kerjakan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => project.link && window.open(project.link)}>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
