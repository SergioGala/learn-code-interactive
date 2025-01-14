import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock,} from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import LessonSection from '../lessons/LessonSection'

const LessonViewer = ({ lesson, onNext, onPrev }) => {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = async () => {
    setIsLoading(true)
    await onNext()
    setIsLoading(false)
  }

  if (!lesson) return null

  return (
    <div className={`relative ${theme.card} rounded-2xl overflow-hidden p-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">{lesson.title}</h1>
          <div className="flex items-center gap-2 text-white/60">
            <Clock className="w-4 h-4" />
            {lesson.duration || '10 min'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 mb-8">
        {lesson.sections?.map((section, index) => (
          <LessonSection key={index} section={section} />
        ))}

        {lesson.quiz && (
          <div className="mt-12 p-6 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-4">
              Comprueba tu conocimiento
            </h3>
            <p className="text-white/80 mb-6">{lesson.quiz.question}</p>
            <div className="space-y-3">
              {lesson.quiz.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    theme.card
                  } hover:bg-white/5`}
                  onClick={() => {/* Manejar respuesta */}}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-white/10">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={onPrev}
          disabled={isLoading}
          className="flex items-center gap-2 text-white/60 hover:text-white disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </motion.button>

        <motion.button
          whileHover={{ x: 5 }}
          onClick={handleNext}
          disabled={isLoading}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${theme.primary} text-white disabled:opacity-50`}
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}

LessonViewer.propTypes = {
  lesson: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

export default LessonViewer