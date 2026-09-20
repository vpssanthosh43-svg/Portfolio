import { motion } from 'framer-motion'
import { FiBook, FiAward, FiCalendar, FiStar } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Dhanalakshmi Srinivasan College of Engineering, Coimbatore',
    year: '2024 - 2028',
    gpa: '8.5/10',
    description: 'Specialized in Data Structures, Algorithms, and Software Engineering. Active member of the coding club and competitive programming team.',
    highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Engineering'],
    status: 'In Progress'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'SRV Innovative Senior Secondary School, Rasipuram',
    year: '2022 - 2024',
    gpa: '92%',
    description: 'Focused on Mathematics, Physics, and Computer Science. Achieved state-level rank in competitive examinations.',
    highlights: ['Mathematics', 'Computer Science', 'Physics'],
    status: 'Completed'
  },
]

const certifications = [
  {
    title: 'C++ Programming Certification', 
    issuer: 'Example Institute', 
    year: '2024',
    icon: FiStar,
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    title: 'React Developer Certification', 
    issuer: 'Example Academy', 
    year: '2024',
    icon: FiAward,
    color: 'from-cyan-400 to-blue-500'
  },
  { 
    title: 'Data Structures & Algorithms', 
    issuer: 'Example Platform', 
    year: '2023',
    icon: FiBook,
    color: 'from-purple-400 to-pink-500'
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-6 border-primary/20">
            Education
          </div>
          <h2 className="section-heading">Academic Journey</h2>
          <p className="text-[var(--muted-color)] text-lg max-w-2xl mx-auto mt-4">
            My academic background and professional certifications that shaped my career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-8 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-cyan text-white">
                <FiBook size={24} />
              </div>
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-cyan" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-cyan border-4 border-[var(--bg-color)]" />

                  <div className="glass-card">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-[var(--text-color)] leading-tight">{edu.degree}</h4>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 flex-shrink-0 ml-3">
                        {edu.gpa}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-[var(--muted-color)] text-sm mb-3">
                      <FiCalendar size={14} />
                      {edu.year}
                    </div>
                    <p className="text-[var(--muted-color)] text-sm mb-4 leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span key={h} className="px-2.5 py-1 text-xs font-medium rounded-md bg-cyan/10 text-cyan border border-cyan/20">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-8 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan to-primary text-white">
                <FiAward size={24} />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[var(--text-color)] mb-0.5 truncate">{cert.title}</h4>
                      <p className="text-xs text-[var(--muted-color)]">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 flex-shrink-0">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
