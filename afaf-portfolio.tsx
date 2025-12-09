import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  year: string;
  type: string;
  location: string;
  description: string;
  concept: string;
  color: string;
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // CSS para animación de scroll infinito
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 40s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['inicio', 'manifiesto', 'experiencia', 'proyectos', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'manifiesto', label: 'Manifiesto' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const experiences = [
    {
      title: 'Consultora Regulatoria Municipal',
      period: 'Mar 2024 - Actualidad',
      location: 'Independiente',
      story: 'Liderazgo en tramitación de expedientes complejos, asegurando conformidad normativa y articulando soluciones técnicas entre clientes y municipalidades.',
      achievements: [
        'Especialización en regularizaciones, modificaciones y deslindes',
        'Elaboración de respuestas técnicas a observaciones DOM',
        'Desarrollo de levantamientos planimétricos para saneamiento'
      ]
    },
    {
      title: 'Arquitecta Municipal',
      period: 'Ago 2022 - Feb 2024',
      location: 'I. Municipalidad de Paihuano',
      story: 'Gestión socio-regulatoria en territorio rural, combinando rigor normativo con sensibilidad comunitaria para proyectos de desarrollo local.',
      achievements: [
        'Aseguramiento normativo LGUC y OGUC',
        'Articulación entre necesidades ciudadanas y marco regulatorio',
        'Coordinación de proyectos con financiamiento MINVU/SECPLAN'
      ]
    },
    {
      title: 'Arquitecta Junior - Proyectos MEP',
      period: '2021',
      location: 'Almon SPA',
      story: 'Desarrollo técnico de especialidades mecánicas, eléctricas y sanitarias, asegurando coherencia entre diseño y ejecución.',
      achievements: [
        'Elaboración de planos MEP para proyectos residenciales',
        'Control de calidad en inspecciones de obra',
        'Coordinación interdisciplinaria desde anteproyecto hasta ejecución'
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Centro de Extensión Cultural Efímero',
      year: '2019',
      type: 'Proyecto de Título',
      location: 'Viña del Mar',
      description: 'Ágora marítima de suelos fragmentados para la integración social a través de actividades culturales itinerantes',
      concept: 'Espacios flexibles que dialogan con el territorio costero, promoviendo encuentros ciudadanos espontáneos y programados.',
      color: 'from-amber-100 to-orange-50'
    },
    {
      id: 2,
      title: 'Casa Belmar',
      year: '2021',
      type: 'Proyecto Residencial',
      location: 'Casablanca, Valparaíso',
      description: 'Vivienda unifamiliar integrada al paisaje del valle',
      concept: 'Diseño que respeta la topografía natural, con espacios que capturan la luz y el viento característicos del territorio vitivinícola.',
      color: 'from-green-100 to-emerald-50'
    },
    {
      id: 3,
      title: 'Casa Ramírez-Vega',
      year: '2021',
      type: 'Proyecto Residencial',
      location: 'Colina, Santiago',
      description: 'Vivienda familiar con énfasis en espacios de convivencia',
      concept: 'Arquitectura que privilegia la conexión entre interior y exterior, generando flujos naturales y áreas de encuentro familiar.',
      color: 'from-stone-100 to-neutral-50'
    }
  ];

  const education = [
    {
      title: 'Diplomado en Modelamiento BIM',
      institution: 'Instituto Euskadi',
      year: 'En curso - 2025',
      focus: 'Coordinación MEP y optimización de proyectos de infraestructura'
    },
    {
      title: 'Diplomado en Desarrollo Local Inclusivo',
      institution: 'Universidad Alberto Hurtado',
      year: '2023',
      focus: 'Políticas Públicas, Planificación Urbana Sostenible y Participación Ciudadana'
    },
    {
      title: 'Arquitectura',
      institution: 'Universidad de Viña del Mar',
      year: '2019',
      focus: 'Título Profesional de Arquitecta'
    }
  ];

  // Film strip images - Placeholders que serán reemplazados con imágenes reales
  interface FilmStripImage {
    id: number;
    title: string;
    subtitle: string;
    color: string;
    imagePath?: string;
  }

  const filmStripImages: FilmStripImage[] = [
    {
      id: 1,
      title: 'PLAZA URBANA',
      subtitle: 'Espacios públicos',
      color: 'from-stone-600 to-stone-800',
      imagePath: '/images/1.jpg'
    },
    {
      id: 2,
      title: 'ANFITEATRO',
      subtitle: 'Integración territorial',
      color: 'from-slate-600 to-slate-800',
      imagePath: '/images/2.png'
    },
    {
      id: 3,
      title: 'INTERIOR',
      subtitle: 'Diseño de detalle',
      color: 'from-zinc-600 to-zinc-800',
      imagePath: '/images/3.jpg'
    },
    {
      id: 4,
      title: 'CENTRO CULTURAL',
      subtitle: 'Proyecto de título',
      color: 'from-neutral-600 to-neutral-800',
      imagePath: '/images/4.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Film Strip Header */}
      <div className="relative w-full bg-black overflow-hidden py-4 border-y-4 border-stone-800">
        {/* Perforaciones superiores */}
        <div className="absolute top-0 left-0 right-0 h-3 flex justify-around">
          {[...Array(40)].map((_, i) => (
            <div key={`top-${i}`} className="w-2 h-2 bg-stone-800 rounded-sm"></div>
          ))}
        </div>
        
        {/* Imágenes en carrusel */}
        <div className="flex gap-3 px-6 animate-scroll">
          {[...filmStripImages, ...filmStripImages].map((item, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 transition-all duration-500 ease-in-out"
              style={{ width: '280px', height: '180px' }}
            >
              <div className="w-full h-full overflow-hidden rounded-sm border-2 border-stone-700 bg-stone-900 shadow-lg group-hover:scale-110 group-hover:h-[240px] group-hover:z-10 transition-all duration-500">
                {/* Cargar imagen o mostrar placeholder */}
                {item.imagePath ? (
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center p-6 group-hover:scale-105 transition-all duration-500`}>
                    <div className="text-center">
                      <div className="text-white/90 font-light text-lg mb-1 tracking-wider">
                        {item.title}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-widest">
                        {item.subtitle}
                      </div>
                      <div className="mt-4 text-amber-400/50 text-xs">
                        [ Imagen próximamente ]
                      </div>
                    </div>
                  </div>
                )}
                {/* Overlay vintage */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              
              {/* Número de frame tipo película */}
              <div className="absolute bottom-1 right-2 text-amber-400 text-xs font-mono opacity-70">
                {String((index % 4) + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
        
        {/* Perforaciones inferiores */}
        <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-around">
          {[...Array(40)].map((_, i) => (
            <div key={`bottom-${i}`} className="w-2 h-2 bg-stone-800 rounded-sm"></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-light tracking-wide">
              <span className="font-semibold text-amber-800">AFAF</span>
              <span className="text-stone-600 ml-2">BADAWY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors ${
                    activeSection === item.id 
                      ? 'text-amber-700 font-medium' 
                      : 'text-stone-600 hover:text-amber-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-green-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 text-sm font-light tracking-widest text-amber-700 uppercase">
            Arquitecta
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            <span className="font-semibold text-amber-900">Afaf Badawy</span>
            <br />
            <span className="text-stone-700">Fernández</span>
          </h1>
          <p className="text-xl sm:text-2xl text-stone-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Donde lo técnico encuentra lo humano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="px-8 py-4 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Ver Proyectos
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-white text-amber-700 rounded-full hover:bg-stone-50 transition-all duration-300 border-2 border-amber-700"
            >
              Contacto
            </button>
          </div>
        </div>
      </section>

      {/* Manifiesto Section */}
      <section id="manifiesto" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-12 text-center text-amber-900">
            Manifiesto
          </h2>
          <div className="space-y-8 text-lg leading-relaxed text-stone-700">
            <p className="font-light border-l-4 border-amber-600 pl-6 italic">
              "La arquitectura nace del territorio y se completa con las personas que lo habitan."
            </p>
            <p>
              Mi práctica profesional se sostiene en la convicción de que <span className="font-medium text-amber-800">el espacio construido debe servir al bienestar colectivo</span>, articulando rigor técnico con profunda sensibilidad social.
            </p>
            <p>
              Combino cuatro años de experiencia en gestión pública y privada, donde he aprendido que la mejor arquitectura surge del <span className="font-medium text-amber-800">diálogo entre normativa, territorio y comunidad</span>.
            </p>
            <p>
              Desde la planificación municipal en territorios rurales hasta la asesoría regulatoria especializada, mi trabajo busca <span className="font-medium text-amber-800">traducir necesidades humanas en soluciones espaciales sostenibles</span>, siempre desde la ética, la colaboración y el compromiso con el desarrollo equitativo.
            </p>
            <p className="text-xl font-light text-center pt-8 text-amber-800">
              Creo en una arquitectura que respira, que se adapta, que escucha.
            </p>
          </div>
        </div>
      </section>

      {/* Experiencia Section */}
      <section id="experiencia" className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-16 text-center text-amber-900">
            Trayectoria Profesional
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-amber-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className="text-amber-700 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-stone-700 mb-6 leading-relaxed">
                  {exp.story}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-stone-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Formación */}
          <div className="mt-20">
            <h3 className="text-3xl font-light mb-10 text-center text-amber-900">
              Formación Continua
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl p-6 border border-amber-100">
                  <div className="text-sm text-amber-700 font-medium mb-2">
                    {edu.year}
                  </div>
                  <h4 className="text-lg font-medium text-stone-900 mb-2">
                    {edu.title}
                  </h4>
                  <div className="text-sm text-stone-600 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-16 text-center text-amber-900">
            Proyectos Seleccionados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center overflow-hidden relative transition-transform duration-300 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl font-light text-stone-400 mb-2">
                        {project.year}
                      </div>
                      <div className="text-sm uppercase tracking-widest text-stone-600">
                        {project.type}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-600 mb-2">
                  {project.location}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className={`h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="text-center text-white">
                <div className="text-7xl font-light mb-2 text-stone-700">
                  {selectedProject.year}
                </div>
                <div className="text-sm uppercase tracking-widest text-stone-600">
                  {selectedProject.type}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-medium text-amber-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-stone-600 mb-6 flex items-center gap-2">
                <MapPin size={18} />
                {selectedProject.location}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-amber-800 mb-2">
                    Descripción
                  </h4>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-amber-800 mb-2">
                    Concepto
                  </h4>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedProject.concept}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-sm text-stone-500 italic">
                    * Las imágenes del proyecto se integrarán próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proceso Creativo */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-12 text-center text-amber-900">
            Más Allá de la Arquitectura
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-amber-800 mb-4">
                  Arte en Resina Ecológica
                </h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Mi práctica creativa se extiende al trabajo con resina ecológica, donde reutilizo materiales para crear piezas artísticas únicas. Esta disciplina paralela refuerza mi compromiso con la <span className="font-medium text-amber-800">sostenibilidad</span> y la capacidad de <span className="font-medium text-amber-800">transformar lo cotidiano en expresión</span>.
                </p>
                <p className="text-stone-600 text-sm italic">
                  La misma filosofía que aplico en arquitectura: respeto por los materiales, atención al detalle, y búsqueda de belleza en lo funcional.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-amber-200 via-green-200 to-stone-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🎨</div>
                  <p className="text-sm text-stone-600">
                    Portfolio de resina disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-12 text-center text-amber-900">
            Conversemos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6 text-stone-800">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:abadawyf@gmail.com"
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                >
                  <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>abadawyf@gmail.com</span>
                </a>
                
                <a
                  href="tel:+56930639918"
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                >
                  <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span>+56 9 3063 9918</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/afaf-balawy-fernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group"
                >
                  <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                <h4 className="font-medium text-amber-900 mb-2">
                  Áreas de Interés
                </h4>
                <ul className="text-sm text-stone-700 space-y-1">
                  <li>• Gestión y tramitación municipal</li>
                  <li>• Desarrollo local inclusivo</li>
                  <li>• Coordinación BIM</li>
                  <li>• Proyectos con impacto social</li>
                  <li>• Asesoría regulatoria</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6 text-stone-800">
                Envíame un Mensaje
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
                >
                  Enviar Mensaje
                </button>
                
                <p className="text-xs text-stone-500 text-center">
                  * Este formulario será funcional una vez configurado el backend
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-xl font-light mb-2">
                <span className="font-semibold text-amber-400">AFAF</span>
                <span className="ml-2">BADAWY FERNÁNDEZ</span>
              </div>
              <p className="text-sm text-stone-400">
                Arquitecta · Desarrollo Territorial · Gestión Municipal
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="mailto:abadawyf@gmail.com"
                className="p-3 bg-stone-800 rounded-full hover:bg-amber-700 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/afaf-balawy-fernandez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 rounded-full hover:bg-amber-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
            <p>© 2024 Afaf Badawy Fernández · Todos los derechos reservados</p>
            <p className="mt-2">Diseñado con propósito y narrativa</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;