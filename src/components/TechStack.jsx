import { motion } from 'framer-motion'

const techStack = [
  'C++', 'JavaScript', 'React', 'Tailwind CSS', 'HTML5', 'CSS3',
  'Git', 'GitHub', 'VS Code', 'Node.js', 'Framer Motion',
  'OOP', 'STL', 'Data Structures', 'Algorithms', 'REST APIs',
  'Responsive Design', 'UI/UX', 'Problem Solving', 'Competitive Programming'
]

export default function TechStack() {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {techStack.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="px-4 py-2 rounded-xl glass text-sm font-medium text-[var(--text-color)] border border-[var(--border-color)] hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
