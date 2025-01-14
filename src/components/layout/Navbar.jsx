import { motion } from 'framer-motion'
import { Code, BookOpen, Award, User } from 'lucide-react'
import ThemeSelector from '../ui/ThemeSelector'
import { useTheme } from '../../hooks/useTheme'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme } = useTheme()

  const menuItems = [
    { 
      icon: Code, 
      label: 'Lecciones',
      path: '/module/intro'
    },
    { 
      icon: BookOpen, 
      label: 'Recursos',
      path: '/resources'
    },
    { 
      icon: Award, 
      label: 'Logros',
      path: '/achievements'
    },
    { 
      icon: User, 
      label: 'Perfil',
      path: '/profile'
    }
  ]

  const activeIndex = menuItems.findIndex(item => item.path === location.pathname)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-4 py-3`}
    >
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-md border-b border-white/10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10">
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-xl rotate-6 group-hover:rotate-12 transition-transform`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-xl blur-lg opacity-50`} />
                <div className="relative w-full h-full flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                LearnCode
              </span>
            </motion.div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <div className="flex bg-black/10 backdrop-blur-md rounded-full p-1 mr-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = index === activeIndex
                return (
                  <motion.button
                    key={index}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                    onClick={() => navigate(item.path)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-full`}
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            <ThemeSelector />
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <motion.div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${theme.primary} background-animate`}
        initial={{ width: "0%" }}
        animate={{ width: "35%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.nav>
  )
}

export default Navbar