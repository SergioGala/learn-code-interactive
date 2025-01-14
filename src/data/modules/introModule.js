import { Code, Coffee, Brain, Rocket } from 'lucide-react'

export const introModule = {
  id: 'intro',
  title: 'Introducción al Desarrollo Web',
  description: 'Fundamentos y conceptos básicos del desarrollo web moderno',
  lessons: [
    {
      id: 'welcome',
      title: '¡Bienvenido al Desarrollo Web!',
      duration: '5 min',
      sections: [
        {
          type: 'introduction',
          title: '¡Comienza tu viaje!',
          content: `¡Bienvenido al emocionante mundo del desarrollo web! En este curso, 
          aprenderás todo lo necesario para crear tus propias páginas web desde cero. 
          El desarrollo web es una de las habilidades más demandadas en la actualidad, 
          y estás a punto de dar tus primeros pasos en este fascinante campo.`,
          highlights: [
            {
              icon: Code,
              title: 'Código Real',
              description: 'Aprenderás escribiendo código real desde el primer día'
            },
            {
              icon: Coffee,
              title: 'A tu ritmo',
              description: 'Avanza según tu propio horario y necesidades'
            },
            {
              icon: Rocket,
              title: 'Proyectos Prácticos',
              description: 'Crea proyectos reales mientras aprendes'
            }
          ]
        },
        {
          type: 'concept',
          title: '¿Qué aprenderás?',
          content: `En este curso cubriremos:
          
          • HTML - El lenguaje que da estructura a las páginas web
          • CSS - El lenguaje que da estilo y diseño visual
          • JavaScript - El lenguaje que hace las páginas interactivas
          • Herramientas profesionales de desarrollo
          • Mejores prácticas de la industria
          
          Al final del curso, serás capaz de crear tus propias páginas web profesionales.`
        },
        {
          type: 'practice',
          title: 'Tu primer código',
          description: 'Vamos a escribir nuestra primera línea de código HTML',
          code: {
            initial: '<h1>¡Hola Mundo!</h1>',
            solution: '<h1>¡Hola Mundo!</h1>',
            language: 'html'
          }
        }
      ]
    },
    {
      id: 'what-is-web-dev',
      title: '¿Qué es el Desarrollo Web?',
      duration: '10 min',
      // ... (contenido de la siguiente lección)
    },
    {
      id: 'tools-setup',
      title: 'Configuración del Entorno',
      duration: '15 min',
      // ... (contenido de la siguiente lección)
    }
  ]
}