import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useTheme } from '../../hooks/useTheme'

const LessonSection = ({ section }) => {
  const { theme } = useTheme()

  const renderContent = () => {
    switch (section.type) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <p className="text-lg text-white/80">{section.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {section.highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl ${theme.card} backdrop-blur-sm`}
                  >
                    <Icon className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-white/60">
                      {highlight.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )

      case 'concept':
        return (
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-white/80">
              {section.content}
            </div>
          </div>
        )

      case 'practice':
        return (
          <div className="space-y-4">
            <p className="text-white/80">{section.description}</p>
            <div className={`p-4 rounded-lg ${theme.card}`}>
              <pre className="text-white/90">
                <code>{section.code.initial}</code>
              </pre>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
      {renderContent()}
    </div>
  )
}

LessonSection.propTypes = {
  section: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    description: PropTypes.string,
    highlights: PropTypes.array,
    code: PropTypes.object
  }).isRequired
}

export default LessonSection