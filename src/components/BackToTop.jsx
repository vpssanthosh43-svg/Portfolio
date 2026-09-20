import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8
      }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg"
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </motion.button>
  )
}
