import { motion } from 'framer-motion'
import { Monitor, Moon, Trees, Waves } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { themes } from '../../constants/themes'

const themeIcons = {
  cyberpunk: Monitor,
  space: Moon,
  forest: Trees,
  ocean: Waves
}

const ThemeSelector = () => {
  const { setTheme, currentTheme } = useTheme()

  return (
    <div className="flex gap-2 bg-black/20 backdrop-blur-lg rounded-full p-2">
      {Object.entries(themes).map(([key, theme]) => {
        const Icon = themeIcons[key]
        return (
          <motion.button
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(key)}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
              currentTheme === key ? 'text-white' : 'text-white/60'
            }`}
          >
            <Icon className="w-5 h-5" />
            {currentTheme === key && (
              <motion.div
                layoutId="activeTheme"
                className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-full -z-10`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}

export default ThemeSelector