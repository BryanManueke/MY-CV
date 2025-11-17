import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, GraduationCap, Code, MessageCircle, Heart, Book, Music, Camera, Sparkles, Terminal } from 'lucide-react';
import { useAbout } from "@/hooks/useAPI";
import { Skeleton } from "@/components/ui/skeleton";

// Simulated JSON Server data
const portfolioData = {
  profile: {
    name: "Bryan Miracles Manueke",
    title: "Information Systems Student",
    university: "Klabat University",
    location: "Manado, North Sulawesi",
    bio: "Computer Science student passionate about building digital solutions and analyzing data to solve real-world problems.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan",
    email: "bryan.manueke@example.com",
    whatsapp: "https://wa.me/6281234567890",
    github: "https://github.com/bryanmanueke",
    linkedin: "https://linkedin.com/in/bryanmanueke"
  },
  education: {
    degree: "Bachelor of Computer Science",
    major: "Information Systems",
    university: "Klabat University",
    year: "2022 - Present"
  },
  skills: [
    { name: "Frontend Development", level: 85, icon: "💻", color: "from-cyan-500 to-blue-600" },
    { name: "System Analysis", level: 80, icon: "📊", color: "from-slate-600 to-slate-800" },
    { name: "Data Analysis", level: 75, icon: "📈", color: "from-emerald-600 to-teal-700" },
    { name: "E-Commerce Analysis", level: 70, icon: "🛒", color: "from-orange-600 to-amber-700" }
  ],
  projects: [
    {
      id: 1,
      title: "Restaurant POS System",
      description: "Point of Sale system for local restaurant with order and inventory management",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      link: "#",
      gradient: "from-cyan-600 to-blue-700"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Analytics dashboard for tracking sales and customer behavior",
      tech: ["Next.js", "Chart.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#",
      gradient: "from-slate-700 to-slate-900"
    },
    {
      id: 3,
      title: "Student Portal",
      description: "University course registration and grade management system",
      tech: ["React", "Express.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      link: "#",
      gradient: "from-emerald-600 to-teal-700"
    }
  ],
  hobbies: [
    { name: "Coding", icon: "💻", color: "bg-cyan-600" },
    { name: "Reading", icon: "📚", color: "bg-emerald-600" },
    { name: "Music", icon: "🎵", color: "bg-slate-700" },
    { name: "Photography", icon: "📸", color: "bg-orange-600" }
  ]
};

function Portfolio() {
  const { data: aboutData, isLoading: isLoadingAbout } = useAbout();
  const [data] = useState(portfolioData);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [particles, setParticles] = useState([]);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'projects', ref: projectsRef },
        { name: 'contact', ref: contactRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef
    };
    
    refs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionName);
  };

  const handleButtonClick = (buttonId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setClickedButton(buttonId);
    
    // Create particle effect
    const rect = event.currentTarget.getBoundingClientRect();
    const newParticles = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        angle: (Math.PI * 2 * i) / 8
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setClickedButton(null);
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 600);
  };

  const profileImage = aboutData && aboutData.length > 0 ? aboutData[0].image : data.profile.image;

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">

      {/* Click Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `translate(${Math.cos(particle.angle) * 50}px, ${Math.sin(particle.angle) * 50}px)`
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2 font-bold text-xl text-slate-800 hover:text-blue-700 hover:scale-105 transition-all"
            >
              <Terminal className="w-6 h-6 text-blue-700 group-hover:rotate-12 transition-transform" />
              {data.profile.name}
            </button>
            
            <div className="flex gap-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-semibold transition-all hover:scale-105 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-700' 
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-700 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Profile Image with Animation */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative group">
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-slate-200 group-hover:ring-blue-200 transition-all group-hover:scale-105">
                {isLoadingAbout ? (
                  <Skeleton className="w-full h-full" />
                ) : (
                  <img
                    src={profileImage}
                    alt={data.profile.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className={`space-y-5 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
              🎓 Student Developer
            </div>
            
            <h1 className="text-6xl font-bold text-slate-900">
              {data.profile.name}
            </h1>
            <p className="text-2xl text-blue-700 font-semibold">{data.profile.title}</p>
            
            <div className="flex items-center justify-center gap-8 text-slate-700">
              <div className="flex items-center gap-2 group hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-blue-700 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">{data.profile.university}</span>
              </div>
              <div className="flex items-center gap-2 group hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-slate-600 group-hover:bounce transition-transform" />
                <span className="font-medium">{data.profile.location}</span>
              </div>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {data.profile.bio}
            </p>

            {/* Social Links with Animations */}
            <div className="flex justify-center gap-4 pt-6">
              {[
                { href: data.profile.github, icon: Github, color: 'bg-slate-800 hover:bg-slate-700', label: 'GitHub' },
                { href: data.profile.linkedin, icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700', label: 'LinkedIn' },
                { href: `mailto:${data.profile.email}`, icon: Mail, color: 'bg-red-600 hover:bg-red-700', label: 'Email' },
                { href: data.profile.whatsapp, icon: MessageCircle, color: 'bg-green-600 hover:bg-green-700', label: 'WhatsApp' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => handleButtonClick(`social-${idx}`, e)}
                  className={`group relative p-4 ${social.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 ${
                    clickedButton === `social-${idx}` ? 'scale-95' : ''
                  }`}
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-900 mb-3">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Education Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <p className="font-bold text-slate-900 text-lg">{data.education.degree}</p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Major: <span className="font-semibold text-blue-700">{data.education.major}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                  {data.education.university}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  {data.education.year}
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Skills</h3>
              </div>
              <div className="space-y-5">
                {data.skills.map((skill, idx) => (
                  <div key={skill.name} className={`transition-all duration-500 delay-${idx * 100}`}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-slate-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-blue-700">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-blue-600 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ 
                          width: isLoaded ? `${skill.level}%` : '0%',
                          transitionDelay: `${idx * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Hobbies & Interests</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {data.hobbies.map((hobby, idx) => (
                <div
                  key={hobby.name}
                  className={`group flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-slate-200 hover:border-blue-400 cursor-pointer`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform">{hobby.icon}</span>
                  <span className="font-semibold text-slate-700">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6 bg-slate-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-900 mb-3">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg">Projects I've worked on during my studies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-2 border-slate-200 hover:border-blue-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-3 bg-blue-600`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-2xl text-slate-900 group-hover:text-blue-700 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-50 transition-all group-hover:rotate-12">
                      <ExternalLink className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-200 hover:scale-105 transition-transform cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:rotate-12 transition-transform">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-4">
                Let's Connect!
              </h2>
              <p className="text-slate-600 text-lg">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: `mailto:${data.profile.email}`, icon: Mail, label: 'Email Me', color: 'bg-red-600 hover:bg-red-700' },
                { href: data.profile.whatsapp, icon: MessageCircle, label: 'WhatsApp', color: 'bg-green-600 hover:bg-green-700' },
                { href: data.profile.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-600 hover:bg-blue-700' },
                { href: data.profile.github, icon: Github, label: 'GitHub', color: 'bg-slate-800 hover:bg-slate-700' }
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => handleButtonClick(`contact-${idx}`, e)}
                  className={`group flex items-center justify-center gap-3 px-6 py-5 ${contact.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                    clickedButton === `contact-${idx}` ? 'scale-95' : ''
                  }`}
                >
                  <contact.icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold text-lg">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-slate-900 text-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 mb-2">
            © 2025 {data.profile.name}
          </p>
          <p className="text-slate-400 text-sm">
            Student at {data.profile.university} • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;
