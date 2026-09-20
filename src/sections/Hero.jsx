import { useState, useEffect } from 'react'
import { FiArrowRight, FiTerminal } from 'react-icons/fi'
import { useTheme } from '../components/ThemeContext'
import { useCounter } from '../hooks/useCounter'

const titles = ['C++ Developer', 'Front-End Developer', 'Problem Solver', 'Open Source Enthusiast']

export default function Hero() {
  const { theme } = useTheme()
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [yearsCount, yearsRef] = useCounter(2, 1500)
  const [projectsCount, projectsRef] = useCounter(10, 1500)
  const [techCount, techRef] = useCounter(5, 1500)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedTitle === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      } else {
        setDisplayedTitle((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          }
          return currentTitle.slice(0, prev.length + 1)
        })
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedTitle, isDeleting, titleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30">
          <FiTerminal className="text-primary" size={18} />
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Available for Internships
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
          Santhosh<span className="text-primary">.</span>V
        </h1>

        <div className="h-16 md:h-20 mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
            {displayedTitle}
            <span className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse align-middle" />
          </h2>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-[var(--muted-color)] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Crafting high-performance systems with C++ and building elegant user experiences with modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-primary">
            View Projects
            <FiArrowRight />
          </a>
          <a
            href="#contact"
            className="btn-outline"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-12 text-[var(--muted-color)]">
          <div className="text-center" ref={yearsRef}>
            <div className="text-3xl font-bold text-primary mb-1">{yearsCount}+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Years Exp.</div>
          </div>
          <div className="w-px h-12 bg-[var(--border-color)]" />
          <div className="text-center" ref={projectsRef}>
            <div className="text-3xl font-bold text-cyan mb-1">{projectsCount}+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Projects</div>
          </div>
          <div className="w-px h-12 bg-[var(--border-color)]" />
          <div className="text-center" ref={techRef}>
            <div className="text-3xl font-bold text-accent mb-1">{techCount}+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Technologies</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
