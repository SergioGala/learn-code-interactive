import Hero from '../components/ui/Hero'
import CourseCard from '../components/ui/CourseCard'
import { Layout, Code, Rocket } from 'lucide-react'

const HomePage = () => {
  const courses = [
    {
      title: 'HTML & CSS Masterclass',
      description: 'Domina los fundamentos del desarrollo web moderno. Aprende a crear interfaces responsivas y atractivas.',
      icon: Layout,
      progress: 75,
      difficulty: 'Principiante',
      duration: '6 horas',
      students: 1234,
      tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive']
    },
    {
      title: 'JavaScript Avanzado',
      description: 'Lleva tus habilidades de JavaScript al siguiente nivel con conceptos avanzados y patrones modernos.',
      icon: Code,
      progress: 45,
      difficulty: 'Intermedio',
      duration: '8 horas',
      students: 856,
      tags: ['ES6+', 'Async/Await', 'DOM', 'API Rest']
    },
    {
      title: 'Proyectos Full Stack',
      description: 'Construye aplicaciones web completas desde cero utilizando las últimas tecnologías.',
      icon: Rocket,
      progress: 10,
      difficulty: 'Avanzado',
      duration: '12 horas',
      students: 432,
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  ]

  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-16 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </main>
    </>
  )
}

export default HomePage