import { motion } from 'framer-motion'
import { FiBook, FiAward, FiCalendar, FiStar, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi'

/* ─────────── DATA ─────────── */
const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Dhanalakshmi Srinivasan College of Engineering, Coimbatore',
    year: '2024 – 2028',
    gpa: '8.5 / 10',
    description:
      'Specialising in Data Structures, Algorithms, and Software Engineering. Active member of the coding club and competitive programming team.',
    highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Engineering'],
    status: 'In Progress',
    icon: FiClock,
    color: 'from-primary to-cyan',
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'SRV Innovative Senior Secondary School, Rasipuram',
    year: '2022 – 2024',
    gpa: '92 %',
    description:
      'Focused on Mathematics, Physics, and Computer Science. Achieved state-level rank in competitive examinations.',
    highlights: ['Mathematics', 'Computer Science', 'Physics'],
    status: 'Completed',
    icon: FiCheckCircle,
    color: 'from-cyan to-teal-400',
  },
]

const certifications = [
  {
    title: 'C++ Programming Certification',
    issuer: 'Example Institute',
    year: '2024',
    icon: FiZap,
    color: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-orange-500/20',
  },
  {
    title: 'React Developer Certification',
    issuer: 'Example Academy',
    year: '2024',
    icon: FiAward,
    color: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-cyan-500/20',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Example Platform',
    year: '2023',
    icon: FiBook,
    color: 'from-purple-400 to-pink-500',
    shadow: 'shadow-purple-500/20',
  },
]

/* ─────────── COMPONENT ─────────── */
export default function Education() {
  return (
    <section id="education" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-24 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
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
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-6 border-primary/20">
            My Journey
          </div>
          <h2 className="section-heading">Education &amp; Certifications</h2>
          <p className="text-[var(--muted-color)] text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            The academic milestones and professional credentials that have shaped my expertise.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">

          {/* LEFT — Education vertical timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold text-[var(--text-color)] mb-10 flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-cyan text-white shadow-lg shadow-primary/30">
                <FiBook size={22} />
              </div>
              Academic Timeline
            </motion.h3>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-cyan to-teal-400 opacity-40" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.15 }}
                  className="relative pl-16 pb-10 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan shadow-lg shadow-primary/40 border-4 border-[var(--bg-color)] group-hover:scale-110 transition-transform duration-300">
                    <edu.icon size={14} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="glass-card relative overflow-hidden">
                    {/* Top-border accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.color}`} />

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-color)] leading-snug flex-1 pr-2">
                        {edu.degree}
                      </h4>
                      <span
                        className={`flex-shrink-0 px-2.5 py-0.5 text-xs font-bold rounded-full border ${
                          edu.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-primary/10 text-primary border-primary/30'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    {/* Institution */}
                    <p className="text-primary font-semibold text-xs sm:text-sm mb-2 leading-snug">
                      {edu.institution}
                    </p>

                    {/* Year & GPA row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-[var(--muted-color)] text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} className="text-primary" />
                        {edu.year}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
                      <span className="flex items-center gap-1.5">
                        <FiStar size={12} className="text-amber-400" />
                        <span className="font-semibold text-[var(--text-color)]">{edu.gpa}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--muted-color)] text-xs sm:text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Subject tags */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20 transition-colors duration-200"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold text-[var(--text-color)] mb-10 flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan to-primary text-white shadow-lg shadow-cyan/30">
                <FiAward size={22} />
              </div>
              Certifications
            </motion.h3>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`glass-card group hover:shadow-xl ${cert.shadow} transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${cert.color}`} />

                  <div className="flex items-center gap-4 pl-4">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white flex-shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <cert.icon size={20} />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-color)] mb-0.5 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[var(--muted-color)]">{cert.issuer}</p>
                    </div>

                    {/* Year badge */}
                    <span className="flex-shrink-0 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card mt-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan/5 pointer-events-none rounded-2xl" />

              <h4 className="text-sm font-bold text-[var(--text-color)] mb-5 flex items-center gap-2">
                <FiZap size={16} className="text-amber-400" />
                Key Achievements
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Problems Solved', color: 'text-primary' },
                  { value: '8.5', label: 'Current GPA', color: 'text-cyan' },
                  { value: '3+', label: 'Certifications', color: 'text-amber-400' },
                ].map(({ value, label, color }) => (
                  <div
                    key={label}
                    className="text-center p-3 rounded-xl bg-[var(--border-color)]/30 hover:bg-[var(--border-color)]/60 transition-colors duration-200"
                  >
                    <div className={`text-2xl font-extrabold ${color} mb-0.5`}>{value}</div>
                    <div className="text-xs text-[var(--muted-color)]">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
