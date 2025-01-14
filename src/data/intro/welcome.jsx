import { Code, Coffee, Brain } from 'lucide-react'

export const welcomeLesson = {
  id: 'welcome',
  title: '¡Bienvenido al Desarrollo Web!',
  sections: [
    {
      type: 'introduction',
      title: '¡Hola Futuro Desarrollador!',
      content: `
        Estás a punto de comenzar un emocionante viaje en el mundo del desarrollo web. 
        En este curso, aprenderás desde los conceptos básicos hasta técnicas avanzadas 
        de manera práctica e interactiva.
      `,
      highlights: [
        {
          icon: Code,
          title: 'Aprendizaje Práctico',
          description: 'Aprende haciendo con ejercicios interactivos'
        },
        {
          icon: Coffee,
          title: 'A tu ritmo',
          description: 'Avanza según tu tiempo y necesidades'
        },
        {
          icon: Brain,
          title: 'Proyectos Reales',
          description: 'Aplica lo aprendido en proyectos prácticos'
        }
      ]
    },
    {
      type: 'concept',
      title: '¿Qué aprenderás?',
      content: `
        Durante este curso cubriremos:
        - HTML: La estructura de las páginas web
        - CSS: El diseño y estilo visual
        - JavaScript: Interactividad y lógica
        - Herramientas modernas de desarrollo
        - Mejores prácticas y técnicas profesionales
      `
    },
    {
      type: 'practice',
      title: 'Tu primer ejercicio',
      description: 'Vamos a escribir nuestro primer código HTML',
      code: {
        initial: '<h1>¡Hola Mundo!</h1>',
        solution: '<h1>¡Hola Mundo!</h1>',
        language: 'html'
      }
    }
  ],
  quiz: {
    question: '¿Cuál es el propósito principal de HTML en el desarrollo web?',
    options: [
      'Dar estilo visual a la página',
      'Estructurar el contenido de la página',
      'Manejar la interactividad del usuario',
      'Procesar datos en el servidor'
    ],
    correctIndex: 1
  }
}