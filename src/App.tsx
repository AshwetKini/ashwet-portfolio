import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Star,
  Award,
  Briefcase,
  User
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: 'React Native', level: 95, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Android (Kotlin)', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-6 h-6" /> },
    { name: 'NestJS', level: 85, icon: <Server className="w-6 h-6" /> },
    { name: 'MongoDB', level: 82, icon: <Database className="w-6 h-6" /> },
    { name: 'JavaScript', level: 90, icon: <Code className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Truspirit.',
      description: 'Comprehensive Android application for financial consultants featuring agent onboarding, loan lead generation, and complete backend integration.',
      tech: ['Android', 'Kotlin', 'NestJS', 'MongoDB'],
      category: 'Enterprise',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Sealand Hotel POS System',
      description: 'Complete point-of-sale system for hotel management with real-time inventory tracking, billing, and reporting features.',
      tech: ['React Native', 'TypeScript', 'Node.js'],
      category: 'Freelance',
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Kunbi Identity Card Generator',
      description: 'Automated identity card generation system with template management and bulk processing capabilities.',
      tech: ['Android', 'Kotlin', 'Firebase'],
      category: 'Freelance',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Kirana Grocery Management App',
      description: 'Comprehensive grocery store management system with inventory tracking, billing, and customer management.',
      tech: ['React Native', 'TypeScript', 'MongoDB'],
      category: 'Freelance',
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'HR ID Card Generator',
      description: 'Professional ID card generation system for HR operations with customizable templates and batch processing.',
      tech: ['Android', 'Kotlin', 'SQLite'],
      category: 'Enterprise',
      color: 'from-teal-600 to-green-600'
    },
    {
      title: 'Authentication Letter Generator',
      description: 'Automated document generation system for creating authentication letters with digital signatures.',
      tech: ['Android', 'Kotlin', 'PDF Generation'],
      category: 'Enterprise',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AHK
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ashwet Hemant Kini
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-300 font-light">
              Android Developer • React Native Developer • Full Stack Engineer
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-lg text-blue-400">
                <Smartphone className="w-5 h-5" />
                <span>Mobile App Development</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2 text-lg text-purple-400">
                <Server className="w-5 h-5" />
                <span>Backend Architecture</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate mobile and full-stack developer with expertise in creating scalable applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated software developer specializing in mobile app development with React Native and Android, 
                coupled with full-stack backend development. With experience in creating enterprise-level applications 
                and freelance projects, I bring a comprehensive approach to software development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans from crafting intuitive mobile interfaces to designing robust backend architectures. 
                I'm passionate about delivering high-quality solutions that solve real-world problems and drive business growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                  <Award className="w-8 h-8 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Enterprise Solutions</h4>
                    <p className="text-sm text-gray-400">Full-stack development</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold">Freelance Projects</h4>
                    <p className="text-sm text-gray-400">Custom solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience</span>
                    <span className="font-semibold">1 Year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="font-semibold">5+</span>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technologies</span>
                    <span className="font-semibold">10+</span>
                  </div> */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Current Focus</span>
                    <span className="font-semibold">Mobile Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proficient in modern technologies for mobile and web development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative">
                  <div className="bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and key achievements
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {/* Truspirit Finserve */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-gray-700/50 p-8 rounded-xl border border-gray-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-400">Full Stack Developer</h3>
                    <span className="text-purple-400 font-semibold">Nov 2024 - May 2025</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-300">Truspirit Finserve Consultant Pvt Ltd</h4>
                  <p className="text-gray-300 mb-6">
                    Led the development of comprehensive financial technology solutions, focusing on mobile applications 
                    for agent onboarding and loan lead generation systems.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-600/30 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-400">Key Projects</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Agent Onboarding Android App</li>
                        <li>• Loan Lead Generation System</li>
                        <li>• HR ID Card Generator</li>
                        <li>• Authentication Letter Generator</li>
                      </ul>
                    </div>
                    <div className="bg-gray-600/30 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-400">Technologies</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Android (Kotlin)</li>
                        <li>• NestJS Backend</li>
                        <li>• MongoDB Database</li>
                        <li>• UI/UX Architecture</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Android', 'Kotlin', 'NestJS', 'MongoDB', 'UI/UX', 'Architecture'].map(tech => (
                      <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Freelance */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-gray-700/50 p-8 rounded-xl border border-gray-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-green-400">Freelance Developer</h3>
                    <span className="text-blue-400 font-semibold">2025 - Present</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-300">Various Clients</h4>
                  <p className="text-gray-300 mb-6">
                    Developed custom mobile and web applications for diverse industries including hospitality, 
                    retail, and identity management systems.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-600/30 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-400">Notable Projects</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Sealand Hotel POS System</li>
                        <li>• Kunbi Identity Card Generator</li>
                        <li>• Kirana Grocery Management</li>
                        <li>• Custom Business Solutions</li>
                      </ul>
                    </div>
                    <div className="bg-gray-600/30 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-400">Expertise</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• React Native</li>
                        <li>• TypeScript</li>
                        <li>• Firebase Integration</li>
                        <li>• Cross-platform Development</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'TypeScript', 'Firebase', 'Node.js', 'SQLite', 'Cross-platform'].map(tech => (
                      <span key={tech} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcase of my recent work and technical expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group relative bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.category === 'Enterprise' 
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30'
                        : 'bg-green-600/20 text-green-300 border border-green-600/30'
                    }`}>
                      {project.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm group-hover:bg-gray-600 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">ashukini3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 8329833526</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              {/* <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div> */}
            </div>
            
            <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ashwet Hemant Kini
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Building the future, one app at a time
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
              <span>© 2025 Ashwet Hemant Kini. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;