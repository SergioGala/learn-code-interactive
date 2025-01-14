import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const CourseCard = ({ 
  title, 
  description, 
  icon: Icon,
  progress = 0,
  difficulty,
  duration,
  students,
  tags = []
}) => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Card background with gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`} />
      
      <div className={`relative ${theme.card} backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden`}>
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`h-full bg-gradient-to-r ${theme.primary}`}
          />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.primary} p-0.5`}
            >
              <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10">
              {difficulty}
            </span>
          </div>

          {/* Content */}
          <h3 className={`text-xl font-semibold text-white mb-2 group-hover:${theme.text} transition-colors`}>
            {title}
          </h3>
          <p className="text-white/60 text-sm mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {students} estudiantes
            </div>
          </div>

          {/* Action button */}
          <motion.button
            whileHover={{ gap: '0.875rem' }}
            className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${theme.primary} text-white font-medium flex items-center justify-center gap-2 group/button`}
          >
            Comenzar curso
            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Hover effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl`} />
    </motion.div>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  progress: PropTypes.number,
  difficulty: PropTypes.string,
  duration: PropTypes.string,
  students: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default CourseCard