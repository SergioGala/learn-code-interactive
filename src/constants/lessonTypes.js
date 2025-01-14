export const LESSON_TYPES = {
    THEORY: 'theory',
    PRACTICE: 'practice',
    QUIZ: 'quiz',
    PROJECT: 'project'
  }
  
  export const LESSON_STATUS = {
    LOCKED: 'locked',
    AVAILABLE: 'available',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
  }
  
  export const moduleStructure = {
    introduction: {
      id: 'intro',
      title: 'Introducción al Desarrollo Web',
      description: 'Fundamentos y conceptos básicos del desarrollo web moderno',
      lessons: [
        {
          id: 'welcome',
          type: LESSON_TYPES.THEORY,
          title: '¡Bienvenido al Desarrollo Web!',
          description: 'Conoce la plataforma y el camino que seguiremos',
          duration: '5 min',
          status: LESSON_STATUS.AVAILABLE
        },
        {
          id: 'what-is-web-dev',
          type: LESSON_TYPES.THEORY,
          title: '¿Qué es el Desarrollo Web?',
          description: 'Comprende los fundamentos y el ecosistema web',
          duration: '10 min',
          status: LESSON_STATUS.LOCKED
        },
        {
          id: 'tools-setup',
          type: LESSON_TYPES.PRACTICE,
          title: 'Configuración del Entorno',
          description: 'Prepara tus herramientas de desarrollo',
          duration: '15 min',
          status: LESSON_STATUS.LOCKED,
          requirements: ['what-is-web-dev']
        }
      ]
    },
    html: {
      id: 'html',
      title: 'HTML: La estructura de la web',
      description: 'Aprende a crear la estructura de páginas web con HTML',
      lessons: [
        {
          id: 'html-basics',
          type: LESSON_TYPES.THEORY,
          title: 'Fundamentos de HTML',
          description: 'Estructura básica y sintaxis de HTML',
          duration: '15 min',
          status: LESSON_STATUS.LOCKED,
          requirements: ['tools-setup']
        }
        // Más lecciones aquí...
      ]
    }
    // Más módulos aquí...
  }