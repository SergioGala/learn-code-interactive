import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { introModule } from '../data/modules/introModule'
import LessonViewer from '../components/modules/LessonViewer'
import ModuleProgress from '../components/modules/ModuleProgress'

const ModulePage = () => {
  const { moduleId } = useParams()
  
  // Por ahora solo tenemos el módulo de introducción
  const currentModule = introModule
  
  const [currentLessonId, setCurrentLessonId] = useState(currentModule.lessons[0].id)

  const currentLesson = currentModule.lessons.find(lesson => lesson.id === currentLessonId)
  const currentIndex = currentModule.lessons.findIndex(lesson => lesson.id === currentLessonId)

  const handleNext = () => {
    if (currentIndex < currentModule.lessons.length - 1) {
      setCurrentLessonId(currentModule.lessons[currentIndex + 1].id)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentLessonId(currentModule.lessons[currentIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentModule.title}
          </h1>
          <p className="text-white/60">
            {currentModule.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ModuleProgress
              module={currentModule}
              currentLessonId={currentLessonId}
              onSelectLesson={setCurrentLessonId}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <LessonViewer
              lesson={currentLesson}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModulePage