import { motion } from 'framer-motion'
import TechStack from '../components/TechStack'
import {
  FiCpu,
  FiCode,
  FiLayers,
  FiWind,
  FiFileText,
} from 'react-icons/fi'

const skills = [
  {
    icon: FiCpu,
    name: 'C++',
    level: 90,
    color: 'from-blue-500 to-cyan-500',
    description: 'Advanced C++ programming with focus on OOP, STL, templates, and system design.',
    features: ['OOP & Design Patterns', 'STL & Templates', 'Memory Management']
  },
  {
    icon: FiCode,
    name: 'JavaScript',
    level: 85,
    color: 'from-yellow-400 to-orange-500',
    description: 'Modern ES6+ JavaScript for dynamic and interactive web applications.',
    features: ['ES6+ Features', 'Async Programming', 'DOM Manipulation']
  },
  {
    icon: FiLayers,
    name: 'React',
    level: 88,
    color: 'from-cyan-400 to-blue-500',
    description: 'Building scalable SPAs with hooks, context API, and modern patterns.',
    features: ['Hooks & State', 'Context API', 'Component Architecture']
  },
  {
    icon: FiWind,
    name: 'Tailwind CSS',
    level: 92,
    color: 'from-teal-400 to-cyan-500',
    description: 'Utility-first CSS for rapid UI development with responsive design.',
    features: ['Utility Classes', 'Responsive Design', 'Custom Components']
  },
  {
    icon: FiFileText,
    name: 'HTML/CSS',
    level: 95,
    color: 'from-orange-500 to-red-500',
    description: 'Semantic HTML5 and advanced CSS3 with animations and layouts.',
    features: ['Semantic HTML', 'CSS Grid & Flexbox', 'Animations']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <div className="inline-block px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-5 border-primary/20">
            Technical Skills
          </div>
          <h2 className="section-heading">Technologies I Work With</h2>
          <p className="text-[var(--muted-color)] text-base sm:text-lg max-w-2xl mx-auto mt-4">
            A comprehensive toolkit for building robust, scalable, and performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white w-fit mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={28} />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-xl font-bold text-[var(--text-color)]">{skill.name}</h3>
                  <span className="text-xl sm:text-2xl font-bold gradient-text">{skill.level}%</span>
                </div>

                <p className="text-[var(--muted-color)] text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{skill.description}</p>

                <div className="w-full h-2 bg-[var(--border-color)] rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>

                <div className="space-y-2">
                  {skill.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-[var(--muted-color)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-cyan" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20">
          <h3 className="text-base sm:text-xl font-bold text-[var(--text-color)] mb-6 text-center">Tech Stack</h3>
          <TechStack />
        </div>
      </div>
    </section>
  )
}
