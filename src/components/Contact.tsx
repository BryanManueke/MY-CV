import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", link: "manuekebryan06@gmail.com" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "https://github.com/BryanManueke" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", link: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>

          <Card className="p-8 bg-card border-border">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socials.map((social, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  className="h-auto py-4 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  asChild
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                    <span className="text-sm">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow-primary transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Kirim Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
