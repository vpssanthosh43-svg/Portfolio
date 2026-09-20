import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/vpssanthosh' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/santhosh-v-5319a3379' },
  { icon: FiMail, label: 'Email', href: 'mailto:vpssanthosh43@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="glass border-t border-[var(--border-color)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Santhosh.V</h3>
            <p className="text-[var(--muted-color)] text-sm">
              C++ Programmer & Front-End Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110 min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-color)]">
            © {new Date().getFullYear()} Santhosh.V. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted-color)]">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
