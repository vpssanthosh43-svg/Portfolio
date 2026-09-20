import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const socials = [
    { icon: FiGithub, label: 'GitHub', subtitle: 'github.com/vpssanthosh', href: 'https://github.com/vpssanthosh', color: 'hover:text-gray-400' },
    { icon: FiLinkedin, label: 'LinkedIn', subtitle: 'linkedin.com/in/santhosh-v-5319a3379', href: 'https://www.linkedin.com/in/santhosh-v-5319a3379', color: 'hover:text-blue-400' },
    { icon: FiMail, label: 'Email', subtitle: 'vpssanthosh43@gmail.com', href: 'mailto:vpssanthosh43@gmail.com', color: 'hover:text-cyan' },
  ]

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <div className="inline-block px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-4 sm:mb-6 border-primary/20">
            Contact
          </div>
          <h2 className="section-heading">Let&apos;s Work Together</h2>
          <p className="text-[var(--muted-color)] text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-color)] mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary to-cyan text-white flex-shrink-0">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-color)] uppercase tracking-wider mb-0.5">Email</p>
                      <a href="mailto:vpssanthosh43@gmail.com" className="text-[var(--text-color)] hover:text-primary transition-colors duration-300 font-medium text-xs sm:text-sm break-words">
                        vpssanthosh43@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-cyan to-primary text-white flex-shrink-0">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-color)] uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-[var(--text-color)] font-medium text-xs sm:text-sm">7200815106</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary to-cyan text-white flex-shrink-0">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-color)] uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-[var(--text-color)] font-medium text-xs sm:text-sm">India</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-bold text-[var(--text-color)] mb-5">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="p-2 rounded-lg bg-[var(--border-color)] group-hover:bg-primary/10 transition-colors duration-300">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-color)]">{social.label}</p>
                      <p className="text-xs text-[var(--muted-color)]">{social.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-color)] mb-4 sm:mb-6">Send Me a Message</h3>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-color)] mb-2">Message Sent!</h4>
                  <p className="text-[var(--muted-color)]">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-color)] mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder-[var(--muted-color)] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-color)] mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder-[var(--muted-color)] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-color)] mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder-[var(--muted-color)] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-color)] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder-[var(--muted-color)] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <FiSend />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
