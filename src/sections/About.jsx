import { motion } from 'framer-motion'
import { FiCode, FiCoffee, FiBook, FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function About() {
  const highlights = [
    {
      icon: FiCode,
      title: 'C++ Expertise',
      desc: 'Advanced proficiency in modern C++ with focus on OOP, STL, templates, and system-level programming.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiCoffee,
      title: 'Problem Solver',
      desc: 'Strong foundation in algorithms, data structures, and competitive programming with 500+ problems solved.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: FiBook,
      title: 'Full-Stack Mindset',
      desc: 'Bridging low-level C++ efficiency with modern frontend frameworks to build complete solutions.',
      color: 'from-cyan-500 to-teal-500',
    },
  ]

  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-cyan/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-5 border-primary/20">
            About Me
          </div>
          <h2 className="section-heading">Passion Meets Precision</h2>
          <p className="text-[var(--muted-color)] text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            A developer who believes in writing clean, efficient code and building products that make a difference.
          </p>
        </motion.div>

        {/* Main content: profile card + highlights */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* ── LEFT: Professional Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Photo + Identity */}
            <div className="glass-card relative overflow-hidden group">
              {/* Subtle animated border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Profile Photo */}
                <div className="relative flex-shrink-0">
                  {/* Glow ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-cyan to-accent opacity-60 blur-sm" />
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary via-cyan to-accent" />
                  <img
                    src="/profile.png"
                    alt="Santhosh V — C++ & Front-End Developer"
                    className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl object-cover object-top shadow-2xl"
                  />
                  {/* Available badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-cyan text-white text-xs font-semibold shadow-lg shadow-primary/40 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Available
                  </div>
                </div>

                {/* Name & quick info */}
                <div className="flex-1 text-center sm:text-left pt-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] leading-tight">
                    Santhosh<span className="text-primary">.</span>V
                  </h3>
                  <p className="text-sm font-semibold gradient-text mt-1 mb-3">
                    C++ Developer &amp; Front-End Engineer
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                    <span className="flex items-center gap-1 text-xs text-[var(--muted-color)] px-2.5 py-1 rounded-lg glass border border-[var(--border-color)]">
                      <FiMapPin size={11} /> India
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--muted-color)] px-2.5 py-1 rounded-lg glass border border-[var(--border-color)]">
                      🎓 B.Tech Student
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--muted-color)] px-2.5 py-1 rounded-lg glass border border-[var(--border-color)]">
                      💼 Open to Internships
                    </span>
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a
                      href="mailto:vpssanthosh43@gmail.com"
                      aria-label="Email"
                      className="p-2 rounded-xl glass border border-[var(--border-color)] text-[var(--muted-color)] hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-200"
                    >
                      <FiMail size={16} />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-xl glass border border-[var(--border-color)] text-[var(--muted-color)] hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-200"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-xl glass border border-[var(--border-color)] text-[var(--muted-color)] hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-200"
                    >
                      <FiLinkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="glass-card space-y-4 text-[var(--muted-color)] leading-relaxed text-sm sm:text-base">
              <p>
                I&apos;m a <span className="text-[var(--text-color)] font-semibold">C++ Programmer</span> and{' '}
                <span className="text-[var(--text-color)] font-semibold">Front-End Developer</span> with a passion for
                building high-performance applications and beautiful user interfaces.
              </p>
              <p>
                My journey in programming started with C++, where I developed a deep understanding of memory
                management, algorithms, and system design. This strong foundation has enabled me to excel in both
                low-level programming and high-level web development.
              </p>
              <p>
                I specialize in creating robust backend systems with C++ and stunning user experiences with React and
                modern CSS frameworks. I&apos;m always eager to learn new technologies and contribute to meaningful
                projects.
              </p>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[var(--border-color)]">
                {[
                  { value: '2+', label: 'Years Coding' },
                  { value: '10+', label: 'Projects Built' },
                  { value: '500+', label: 'Problems Solved' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-bold gradient-text">{value}</div>
                    <div className="text-xs text-[var(--muted-color)] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Highlight cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:pt-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="glass-card group"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[var(--text-color)] mb-1.5">{item.title}</h4>
                    <p className="text-[var(--muted-color)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* "Download Resume" CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="btn-primary w-full justify-center text-base"
              >
                Let&apos;s Work Together
                <span className="text-lg">🚀</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
