import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Experience {
  title: string;
  story: string;
  subtitle?: string;
  achievements: string[];
  functionsSubtitle?: string;
  functions?: string[];
}

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  year: string;
  type: string;
  location?: string;
  description: string;
  concept: string;
  color: string;
  detailedConcept?: string;
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resinCarouselIndex, setResinCarouselIndex] = useState(0);
  const [resinHoveredImage, setResinHoveredImage] = useState<string | null>(null);

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
      title: 'Planificación Urbana y Desarrollo Local',
      story: 'Desarrollo proyectos urbanos, integrando diagnósticos, análisis urbano y estrategias de activación territorial. Mi experiencia se centra en la regeneración de espacios públicos, la planificación y desarrollo de infraestructura comunitaria y la articulación con comunidades e instituciones públicas para el desarrollo sostenible de los territorios.',
      subtitle: 'Áreas de dominio',
      achievements: [
        'Análisis y diagnóstico urbano–territorial',
        'Diseño de espacios públicos y equipamiento',
        'Participación ciudadana y metodologías colaborativas',
        'Planificación local, coordinación institucional y gestión de proyectos públicos',
        'Enfoque inclusivo y perspectiva comunitaria'
      ],
      functionsSubtitle: 'Funciones desempeñadas',
      functions: [
        'Formulación y desarrollo de proyectos de mejoramiento urbano, espacios públicos e infraestructura',
        'Desarrollo e implementación de plan de intervención territorial, levantamiento socio-territorial y desarrollo de metodologías participativas',
        'Gestión y articulación entre actores locales, organizaciones comunitarias, equipos multisectoriales',
        'Presentación de proyectos ante equipos técnicos y autoridades gubernamentales',
        'Elaboración de memorias técnicas, planos y presupuestos para proyectos con financiamento público'
      ]
    },
    {
      title: 'Coordinación de Expedientes Municipales',
      story: 'Desarrollo y coordino expedientes municipales de diversa complejidad, integrando normativa urbana, levantamientos arquitectónicos, documentación técnica y tramitación municipal. Mi trabajo aborda permisos de edificación, obras menores, regularizaciones y análisis normativos, asegurando eficiencia en los procesos y cumplimiento de cada requerimiento de la Dirección de Obras Municipales.',
      subtitle: 'Áreas de dominio',
      achievements: [
        'Análisis normativo OGUC, LGUC y ordenanzas locales',
        'Formularios INE, antecedentes técnicos y levantamientos planimétricos',
        'Regularización de viviendas y locales comerciales'
      ],
      functionsSubtitle: 'Funciones desempeñadas',
      functions: [
        'Elaboración de documentación técnica, planos, memorias y formularios',
        'Tramitación de expedientes en DOM, presencial y en línea',
        'Revisión normativa y verificación de cumplimiento normativo',
        'Coordinación con clientes, revisores y unidades municipales',
        'Consultas técnicas y resolución de observaciones'
      ]
    },
    {
      title: 'Mantención de Infraestructura en Contextos Mineros',
      story: 'Desarrollo de planos constructivos, detalles técnicos y documentación en entornos mineros de alta exigencia bajo estándares BHP. Asistir en la planificación y mantención de infraestructura de obras, remodelaciones de espacios de trabajo y actualización de cartografía para asegurar continuidad operativa y eficiencia en la gestión de activos.',
      subtitle: 'Áreas de dominio',
      achievements: [
        'Coordinación con equipos multidisciplinarios tales como ingenierías civiles, sanitarias y eléctricas',
        'Levantamientos de infraestructura operativa, desarrollo técnico de estructuras, redes sanitarias y agua potable y remodelación funcional en espacios de trabajo',
        'Estándares de faena BHP, normativa sectorial y seguridad industrial'
      ],
      functionsSubtitle: 'Funciones principales',
      functions: [
        'Actualización y desarrollo de planos, sistemas de redes, detalles técnicos y constructivos',
        'Desarrollo de propuestas de mejora de instalaciones',
        'Levantamiento de información técnica y documentación en terreno',
        'Soporte en planificación de mantenciones y mejoras'
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Centro de Extensión Cultural Efímero — Ágora Marítima',
      year: '2019',
      type: 'Proyecto de Título',
      location: 'Viña del Mar',
      description: 'El proyecto aborda la degradación y desfragmentación del borde costero de Viña del Mar, proponiendo un equipamiento cultural efímero capaz de activar temporalmente sectores subutilizados y desconectados de la vida urbana. Se plantea un Ágora Marítima como espacio de encuentro abierto, flexible y móvil, diseñado para fomentar la integración social mediante actividades culturales itinerantes.',
      concept: 'El enfoque parte de un diagnóstico territorial que identifica zonas residuales, vacíos urbanos y discontinuidades en la relación ciudad–mar (modelo de ciudad balneario). A partir de ello, el proyecto introduce una intervención que permite recuperar suelos fragmentados, facilitar el acceso comunitario y generar nuevas dinámicas culturales y recreativas. El diseño incorpora plataformas, recorridos, espacios multiuso y estructuras desmontables, configuradas para responder a distintos usos: talleres, presentaciones, ferias y eventos comunitarios. Su carácter efímero permite ocupar transitoriamente áreas en conflicto, promoviendo apropiación social, reconocimiento del paisaje costero y activación urbana sin alterar de manera permanente el territorio.',
      color: 'from-amber-100 to-orange-50',
      detailedConcept: 'En síntesis, el proyecto plantea una estrategia urbana y social, más que una obra edificada, orientada a reimaginar el borde costero como un espacio integrador, accesible y culturalmente activo, demostrando la capacidad de la arquitectura para transformar usos urbanos a través de intervenciones temporales y participativas.'
    },
    {
      id: 2,
      title: 'Mejoramiento Villa Los Cántaros',
      year: '2024',
      type: 'Mejoramiento Urbano',
      location: 'Comuna de Paihuano',
      description: 'El proyecto de mejoramiento de la Plaza Villa Los Cántaros surge a partir del deterioro y abandono del espacio público, caracterizado por la ausencia de áreas verdes, sombreaderos, accesos adecuados y equipamiento recreativo, lo que ha impedido su uso por parte de la comunidad y ha debilitado la convivencia barrial.',
      concept: 'A través de un diagnóstico participativo con los vecinos, se identifica la necesidad de recuperar este espacio como un lugar seguro, accesible y de encuentro, incorporando sombra, áreas verdes, mobiliario, juegos y accesibilidad universal.',
      color: 'from-emerald-100 to-teal-50',
      detailedConcept: 'La intervención busca no solo mejorar las condiciones físicas del lugar, sino también fortalecer la identidad comunitaria, el sentido de pertenencia y la cohesión social, transformando la plazuela en un punto activo de recreación y vida comunitaria para la Villa Los Cántaros.'
    },
    {
      id: 3,
      title: 'Mejoramiento Plaza Miguel Apey',
      year: '2024',
      type: 'Mejoramiento Urbano',
      location: 'Comuna de Paihuano',
      description: 'El proyecto de mejoramiento de la Plaza Miguel Apey surge para renovar y optimizar un espacio público central para la comunidad de Paihuano, ya que la plaza presenta infraestructura deteriorada, luminarias en mal estado, áreas verdes desorganizadas y equipamiento insuficiente.',
      concept: 'La intervención busca modernizar el espacio, haciéndolo más seguro, accesible y funcional, mediante la incorporación de rutas accesibles, reorganización de áreas verdes, nuevo mobiliario urbano, recambio de luminarias y la instalación de juegos infantiles y equipamiento recreativo.',
      color: 'from-green-100 to-emerald-50',
      detailedConcept: 'Además, se pretende mejorar la calidad de vida de los habitantes, ofreciendo un espacio público adecuado para el encuentro comunitario, actividades familiares y recreación. El proyecto también considera un cierre perimetral y obras de nivelación, necesarias para asegurar condiciones óptimas de uso y seguridad. En síntesis, se realiza este proyecto para recuperar y potenciar un espacio urbano clave, garantizando accesibilidad universal, mejor iluminación, áreas verdes ordenadas y equipamiento moderno que responda a las necesidades actuales del barrio Chanchoqui en la comuna de Paihuano.'
    }
  ];

  const education = [
    {
      title: 'Arquitecta',
      institution: 'Universidad de Viña del Mar',
      year: '2019',
      description: 'Título Profesional de Arquitecta'
    },
    {
      title: 'Diplomado en Modelamiento BIM',
      institution: 'Instituto de Capacitación Euskadi',
      year: '2025',
      description: 'Diplomado orientado al modelamiento digital de proyectos de edificación mediante metodología BIM, integrando arquitectura, estructuras y especialidades MEP para la gestión eficiente de obras. La formación permite desarrollar modelos integrales en Revit, generar información técnica, reportes de coordinación y apoyar procesos de planificación y control de proyectos constructivos.',
      competencies: [
        'Modelación BIM en Revit: arquitectura, estructuras y MEP',
        'Elaboración de planos, detalles técnicos y documentación desde modelos BIM',
        'Generación de reportes: ITO, gerenciales, coordinación y control de obra',
        'Procesamiento de datos IFC y flujos colaborativos',
        'Dominio de AutoCAD a nivel medio para complementar modelación'
      ],
      certifications: [
        'AutoCAD',
        'BIM Arquitectura',
        'BIM Estructuras',
        'BIM MEP'
      ]
    },
    {
      title: 'Diplomado en Desarrollo Local Inclusivo',
      institution: 'Universidad Alberto Hurtado',
      year: '2023',
      description: 'Diplomado orientado a comprender y gestionar procesos de desarrollo territorial desde un enfoque inclusivo, participativo y sostenible. La formación integra herramientas de diagnóstico socio–territorial, formulación de proyectos públicos, políticas urbanas, participación ciudadana y planificación local, fortaleciendo la capacidad de articular soluciones contextualizadas para comunidades y gobiernos locales.',
      competencies: [
        'Diagnóstico territorial y análisis socio–espacial',
        'Formulación de proyectos de inversión pública (PMU, FRIL, MINVU, entre otros)',
        'Diseño y ejecución de metodologías participativas y co-diseño comunitario',
        'Gestión local: instrumentos de planificación, gobernanza municipal y políticas públicas',
        'Enfoque inclusivo y sostenible aplicado al desarrollo urbano y rural'
      ],
      applications: [
        'Planificación urbana y desarrollo local',
        'Proyectos comunitarios y de infraestructura pública',
        'Procesos participativos y levantamiento de necesidades territoriales',
        'Coordinación institucional con municipios, ministerios y fundaciones'
      ]
    },
    {
      title: 'Diplomado en Coaching en Programación Neurolingüística (PNL)',
      institution: 'Dharti, Escuela de crecimiento personal',
      year: '2021',
      description: 'Diplomado orientado al desarrollo de habilidades comunicacionales, liderazgo personal y acompañamiento orientado al cambio. La formación entrega herramientas de Programación Neurolingüística aplicadas a la gestión de equipos, la resolución de conflictos, la comunicación efectiva y la facilitación de procesos de desarrollo personal y profesional.',
      competencies: [
        'Técnicas de PNL para comunicación efectiva y mediación',
        'Herramientas de coaching para acompañar procesos de cambio y toma de decisiones',
        'Gestión emocional y estrategias de liderazgo personal',
        'Facilidades para trabajo colaborativo, escucha activa y construcción de acuerdos',
        'Aplicación de PNL en contextos laborales, comunitarios y de resolución de conflictos'
      ],
      applications: [
        'Trabajo comunitario y facilitación de procesos participativos',
        'Coordinación de equipos multidisciplinarios',
        'Atención ciudadana, mediación y orientación técnica',
        'Gestión de proyectos con enfoque relacional y liderazgo colaborativo',
        'Comunicación interpersonal en contextos públicos, privados y territoriales'
      ]
    },
    {
      title: 'Curso Capacitación Todo sobre la subdivisión de predios rústicos (SPR)',
      institution: 'Impartido por SAG',
      year: '2025',
      description: 'Capacitación especializada en subdivisión de predios rústicos'
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
              “La arquitectura es realmente sobre bienestar. Creo que la gente quiere sentir que pertenece a un espacio. (Zaha Hadid)"
            </p>
            <p>
              A lo largo de mi formación y trayectoria en contextos diversos  <span className="font-medium text-amber-800">—comunitarios, rurales, mineros e independientes— </span>, 
              comprendí que, aunque cada uno responde a dinámicas, realidades y lenguajes completamente distintos, todos convergen en un punto esencial: 
              <span className="font-medium text-amber-800"> el diseño no comienza con una línea, sino con una conversación. </span>
              Nace de observar la identidad del territorio, reconocer sus particularidades y conectar con las necesidades reales de las personas que lo habitan.
            </p>
            <p>
              Concibo la arquitectura como <span className="font-medium text-amber-800"> un ente articulador entre las personas y su entorno; </span>
              un puente entre las necesidades colectivas y la capacidad creativa para transformarlas en soluciones pertinentes y significativas. 
              Me motivan los procesos colectivos y la posibilidad de generar cambios concretos mediante intervenciones con enfoque socio‑territorial, orientadas hacia un desarrollo local sostenible en el tiempo.               
            </p>
            <p>
              Creo en una arquitectura cercana y consciente; <span className="font-medium text-amber-800"> una arquitectura que dialogue con quienes la habitan y contribuya al bienestar, </span> 
              al encuentro y al fortalecimiento de la identidad de los territorios, siempre desde la ética, la colaboración y el compromiso con el desarrollo equitativo.
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
                <h3 className="text-2xl font-medium text-amber-900 mb-6">
                  {index === 0 ? `${index + 1}. ${exp.title}` : `${index + 1}. ${exp.title}`}
                </h3>
                
                <p className="text-stone-700 mb-8 leading-relaxed">
                  {exp.story}
                </p>
                
                {exp.subtitle && (
                  <>
                    <h4 className="text-xl font-medium text-amber-800 mb-4">
                      {exp.subtitle}
                    </h4>
                    <div className="space-y-2 ml-4 mb-8">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-amber-600 font-bold mt-0.5">•</span>
                          <span className="text-stone-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {exp.functionsSubtitle && exp.functions && (
                  <>
                    <h4 className="text-xl font-medium text-amber-800 mb-4">
                      {exp.functionsSubtitle}
                    </h4>
                    <div className="space-y-2 ml-4">
                      {exp.functions.map((func, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-amber-600 font-bold mt-0.5">•</span>
                          <span className="text-stone-600">{func}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Formación */}
          <div className="mt-20">
            <h3 className="text-3xl font-light mb-10 text-center text-amber-900">
              Formación Académica
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-amber-900 mb-2">
                        {index + 1}. {edu.title}
                      </h4>
                      <p className="text-stone-600 text-sm mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-amber-700 font-medium text-sm">
                        {edu.year}
                      </p>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-stone-700 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.competencies && edu.competencies.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-amber-800 mb-3">
                        Competencias adquiridas
                      </h5>
                      <div className="space-y-2 ml-4">
                        {edu.competencies.map((comp, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold mt-0.5">•</span>
                            <span className="text-stone-600">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.certifications && edu.certifications.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-amber-800 mb-3">
                        Certificaciones obtenidas
                      </h5>
                      <div className="space-y-2 ml-4">
                        {edu.certifications.map((cert, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold mt-0.5">•</span>
                            <span className="text-stone-600">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.applications && edu.applications.length > 0 && (
                    <div>
                      <h5 className="text-lg font-medium text-amber-800 mb-3">
                        Ámbitos de aplicación profesional
                      </h5>
                      <div className="space-y-2 ml-4">
                        {edu.applications.map((app, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold mt-0.5">•</span>
                            <span className="text-stone-600">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                className="group cursor-pointer flex flex-col h-full"
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
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 mb-4 flex items-center gap-2 mt-auto">
                    <MapPin size={16} className="text-amber-600 flex-shrink-0" />
                    {project.location}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
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
                <MapPin size={18} className="text-amber-600 flex-shrink-0" />
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

                {selectedProject.detailedConcept && (
                  <div>
                    <h4 className="text-lg font-medium text-amber-800 mb-2">
                      Síntesis
                    </h4>
                    <p className="text-stone-700 leading-relaxed">
                      {selectedProject.detailedConcept}
                    </p>
                  </div>
                )}
                
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-12 text-center text-amber-900">
            Más Allá de la Arquitectura
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-amber-800 mb-4">
                  Arte en Resina Ecológica
                </h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Mi práctica creativa se extiende al trabajo con resina ecológica, donde reutilizo materiales para crear piezas artísticas únicas. Esta disciplina paralela refuerza mi compromiso con la <span className="font-medium text-amber-800">sostenibilidad</span> y la capacidad de <span className="font-medium text-amber-800">transformar lo cotidiano en expresión</span>.
                </p>
                <p className="text-stone-600 text-sm italic mb-6">
                  La misma filosofía que aplico en arquitectura: respeto por los materiales, atención al detalle, y búsqueda de belleza en lo funcional.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Aquí irá la lógica de descarga de PDF
                    alert('Función de descarga de PDF disponible próximamente');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
                >
                  <span>📥</span>
                  Descargar Portfolio de Resina (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Carrusel de Resina */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-medium text-amber-800 mb-6 text-center">
              Galería de Piezas
            </h3>
            
            <div className="relative">
              {/* Carrusel Principal */}
              <div className="relative w-full bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl overflow-hidden flex items-center justify-center mb-6 cursor-pointer group"
                style={{ height: '600px' }}
                onMouseEnter={() => setResinHoveredImage(
                  [
                    '/images/resin/BOWTIE_PHOTO_02.png',
                    '/images/resin/CENICERO_PHOTO_01.png',
                    '/images/resin/CENICERO_PHOTO_02.png',
                    '/images/resin/CORAZON_PHOTO_01.jpeg',
                    '/images/resin/CUADRO_PHOTO_01.png',
                    '/images/resin/CUADRO_PHOTO_03.png',
                    '/images/resin/ME_PHOTO_02.jpeg',
                  ][resinCarouselIndex]
                )}
                onMouseLeave={() => setResinHoveredImage(null)}
              >
                <img
                  src={[
                    '/images/resin/BOWTIE_PHOTO_02.png',
                    '/images/resin/CENICERO_PHOTO_01.png',
                    '/images/resin/CENICERO_PHOTO_02.png',
                    '/images/resin/CORAZON_PHOTO_01.jpeg',
                    '/images/resin/CUADRO_PHOTO_01.png',
                    '/images/resin/CUADRO_PHOTO_03.png',
                    '/images/resin/ME_PHOTO_02.jpeg',
                  ][resinCarouselIndex]}
                  alt={`Pieza de resina ${resinCarouselIndex + 1}`}
                  className="w-full h-full object-contain group-hover:opacity-75 transition-opacity p-4"
                />
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
                  {resinCarouselIndex + 1} / 7
                </div>
                
                {/* Botón anterior */}
                <button
                  onClick={() => setResinCarouselIndex((prev) => (prev - 1 + 7) % 7)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Anterior"
                >
                  <ChevronRight size={24} className="transform rotate-180" />
                </button>
                
                {/* Botón siguiente */}
                <button
                  onClick={() => setResinCarouselIndex((prev) => (prev + 1) % 7)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Preview Modal al pasar el mouse */}
              {resinHoveredImage && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
                  onClick={() => setResinHoveredImage(null)}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-2xl max-h-[80vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative flex-1 flex items-center justify-center">
                      <img
                        src={resinHoveredImage}
                        alt="Vista ampliada"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <button
                      onClick={() => setResinHoveredImage(null)}
                      className="mt-4 w-full py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}

              {/* Indicadores */}
              <div className="flex justify-center gap-2">
                {[...Array(7)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setResinCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === resinCarouselIndex
                        ? 'bg-amber-700 w-8'
                        : 'bg-stone-300 w-2 hover:bg-stone-400'
                    }`}
                    aria-label={`Ir a pieza ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-center text-stone-600 text-sm mt-6">
              Pasa el mouse sobre la imagen para ver una vista ampliada. Usa los botones de navegación para explorar la galería completa de piezas en resina ecológica.
            </p>
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