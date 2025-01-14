import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Boxes } from 'lucide-react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useTheme } from '../../hooks/useTheme'

const Hero = () => {
  const { theme } = useTheme()
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.floating-symbol', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-20, 20)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'none',
        stagger: {
          amount: 2,
          from: 'random'
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        {/* Floating symbols */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-symbol absolute text-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? <Code className="w-8 h-8" /> : <Boxes className="w-8 h-8" />}
          </div>
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
        style={{ y }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-8"
        >
          <Sparkles className={`w-4 h-4 ${theme.text}`} />
          <span className="text-sm text-white/80">La nueva forma de aprender código</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
            Aprende a programar
          </span>
          <br />
          <span className={`bg-gradient-to-r ${theme.primary} text-transparent bg-clip-text`}>
            del futuro
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
        >
          Domina el desarrollo web con nuestra plataforma interactiva.
          Aprende HTML, CSS, JavaScript y más con proyectos prácticos y
          feedback en tiempo real.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full bg-gradient-to-r ${theme.primary} text-white font-medium flex items-center gap-2 group`}
          >
            Empezar ahora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors"
          >
            Ver demo
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero