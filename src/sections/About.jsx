import { motion } from 'framer-motion'
import { FiCode, FiCoffee, FiBook, FiMapPin } from 'react-icons/fi'

export default function About() {
  const highlights = [
    {
      icon: FiCode,
      title: 'C++ Expertise',
      desc: 'Advanced proficiency in modern C++ with focus on OOP, STL, templates, and system-level programming.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiCoffee,
      title: 'Problem Solver',
      desc: 'Strong foundation in algorithms, data structures, and competitive programming with 500+ problems solved.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: FiBook,
      title: 'Full-Stack Mindset',
      desc: 'Bridging low-level C++ efficiency with modern frontend frameworks to build complete solutions.',
      color: 'from-cyan-500 to-teal-500'
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-6 border-primary/20">
            About Me
          </div>
          <h2 className="section-heading">Passion Meets Precision</h2>
          <p className="text-[var(--muted-color)] text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            A developer who believes in writing clean, efficient code and building products that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white">
                <FiCode size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-color)]">Santhosh.V</h3>
                <p className="text-sm text-[var(--muted-color)] flex items-center gap-1">
                  <FiMapPin size={14} />
                  India
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[var(--muted-color)] leading-relaxed">
              <p>
                I&apos;m a <span className="text-[var(--text-color)] font-semibold">C++ Programmer</span> and <span className="text-[var(--text-color)] font-semibold">Front-End Developer</span> with a passion for building high-performance applications and beautiful user interfaces.
              </p>
              <p>
                My journey in programming started with C++, where I developed a deep understanding of memory management, algorithms, and system design. This strong foundation has enabled me to excel in both low-level programming and high-level web development.
              </p>
              <p>
                I specialize in creating robust backend systems with C++ and stunning user experiences with React and modern CSS frameworks. I&apos;m always eager to learn new technologies and contribute to meaningful projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card group"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[var(--text-color)] mb-1.5">{item.title}</h4>
                    <p className="text-[var(--muted-color)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
