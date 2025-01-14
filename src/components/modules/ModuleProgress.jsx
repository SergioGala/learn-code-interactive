import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Check, Lock, PlayCircle } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { LESSON_STATUS, LESSON_TYPES } from '../../constants/lessonTypes'

const ModuleProgress = ({ module, currentLessonId, onSelectLesson }) => {
  const { theme } = useTheme()

  const getStatusIcon = (status, type) => {
    if (status === LESSON_STATUS.COMPLETED) return Check
    if (status === LESSON_STATUS.LOCKED) return Lock
    if (type === LESSON_TYPES.PRACTICE) return PlayCircle
    return null
  }

  return (
    <div className={`${theme.card} rounded-xl p-4`}>
      <h3 className="text-lg font-semibold text-white mb-4">{module.title}</h3>
      
      <div className="space-y-2">
        {module.lessons.map((lesson, index) => {
          const Icon = getStatusIcon(lesson.status, lesson.type)
          const isActive = lesson.id === currentLessonId
          
          return (
            <motion.button
              key={lesson.id}
              whileHover={{ x: 4 }}
              onClick={() => lesson.status !== LESSON_STATUS.LOCKED && onSelectLesson(lesson.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                isActive ? `bg-gradient-to-r ${theme.primary} text-white` : 'hover:bg-white/5'
              } ${lesson.status === LESSON_STATUS.LOCKED ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${
                  isActive ? 'bg-white/20' : 'bg-white/5'
                } flex items-center justify-center`}>
                  {Icon && <Icon className="w-4 h-4 text-white" />}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white truncate">
                      {lesson.title}
                    </span>
                    <span className="text-xs text-white/60 ml-2">
                      {lesson.duration}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 truncate">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

ModuleProgress.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  currentLessonId: PropTypes.string.isRequired,
  onSelectLesson: PropTypes.func.isRequired
}

export default ModuleProgress