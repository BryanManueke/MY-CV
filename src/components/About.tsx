import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Menulis kode yang bersih, maintainable, dan mengikuti best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Modern Design",
      description: "Menciptakan UI/UX yang menarik dan user-friendly"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimasi performa untuk pengalaman pengguna terbaik"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tentang Saya
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Saya adalah seorang developer yang passionate dalam menciptakan aplikasi web yang tidak hanya 
            fungsional tetapi juga memiliki tampilan yang menarik dan user experience yang optimal.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 cursor-default"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
