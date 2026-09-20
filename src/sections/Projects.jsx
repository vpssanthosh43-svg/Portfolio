import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiLayers, FiCalendar, FiCopy } from 'react-icons/fi'
import { useState } from 'react'

const projects = [
  {
    title: 'Mechanic Workshop Website',
    description: 'A complete web presence for a local mechanic workshop, featuring service showcase, appointment booking, vehicle history tracking, and contact management. Built for a real client with responsive design.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Client Project'],
    gradient: 'from-orange-500 to-amber-600',
    github: 'https://github.com/vpssanthosh/mechanic-workshop',
    live: 'https://velayutham-workshop-wyrb-git-master-santhosh-7da8.vercel.app/?_vercel_share=UaAoS8BFZWke5kM9mjX39yqa1eRhiayw',
    image: '/mechanic-workshop.png',
    type: 'Client Project',
    year: '2024',
    code: `const ServiceCard = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg">
      <service.icon className="h-8 w-8 text-orange-500" />
      <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.desc}</p>
      <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-white">
        Book Now
      </button>
    </div>
  );
};`
  },
  {
    title: 'Smart Parking AI',
    description: 'An AI-powered parking management system that uses computer vision to detect available parking spots in real-time, with automated slot allocation, occupancy tracking, and a mobile-friendly dashboard.',
    tags: ['React', 'Computer Vision', 'AI', 'Tailwind CSS'],
    gradient: 'from-green-500 to-emerald-600',
    github: 'https://github.com/vpssanthosh/smart-parking-ai',
    live: null,
    type: 'AI / Computer Vision',
    year: '2025',
    code: `// AI-based parking slot detection
async function detectSlots(frame) {
  const predictions = await model.predict(frame);
  const available = predictions.filter(
    p => p.class === 'empty' && p.confidence > 0.85
  );
  return mapSlotsToGrid(available);
}`
  },
  {
    title: 'Campus Navigation',
    description: 'An interactive indoor navigation system for large campuses with real-time pathfinding, building directory, class scheduling integration, and optimized multi-destination route planning.',
    tags: ['React', 'Graph Algorithms', 'Maps API', 'JavaScript'],
    gradient: 'from-blue-500 to-indigo-600',
    github: 'https://github.com/vpssanthosh/campus-navigation',
    live: null,
    type: 'Web Application',
    year: '2025',
    code: `function dijkstra(graph, start, end) {
  const distances = new Map();
  const visited = new Set();
  distances.set(start, 0);

  while (distances.size > 0) {
    const [node, dist] = getClosest(distances, visited);
    if (node === end) return dist;
    visited.add(node);
    updateNeighbors(graph, node, dist, distances);
  }
  return Infinity;
}`
  },
  {
    title: 'Life-Link: Natural Disaster Management',
    description: 'A crisis communication and resource management platform designed for natural disasters, featuring real-time SOS alerts, rescue team coordination, shelter mapping, and emergency resource distribution.',
    tags: ['React', 'WebSocket', 'Real-time', 'C++', 'System Design'],
    gradient: 'from-red-500 to-rose-600',
    github: 'https://github.com/vpssanthosh/life-link',
    live: null,
    type: 'System Design',
    year: '2026',
    code: `// Real-time SOS alert system
class EmergencyCoordinator {
  constructor() {
    this.sockets = new Map();
  }

  broadcastSOS(userLocation) {
    const nearestTeams = this.findNearestTeams(userLocation);
    nearestTeams.forEach(team => {
      this.sendAlert(team.socketId, userLocation);
    });
  }
}`
  },
]

export function CodePreview({ code, gradient }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative mt-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-[#0d1117] border border-[var(--border-color)]">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-200 dark:bg-[#161b22] border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-[var(--muted-color)] font-mono">snippet.js</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-white/10 text-[var(--muted-color)] hover:text-white transition-all duration-300"
          aria-label="Copy code"
        >
          <FiCopy size={14} />
        </button>
      </div>
      <pre className="p-4 text-xs text-slate-800 dark:text-[#e6edf3] overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium">
            Copied to clipboard!
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-5 sm:mb-6 border-primary/20">
            Work
          </div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-[var(--muted-color)] text-base sm:text-lg max-w-2xl mx-auto mt-4">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden relative"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient} group-hover:h-2 transition-all duration-300`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <FiCode size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass hover:border-primary/50 hover:text-primary transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass hover:border-cyan/50 hover:text-cyan transition-all duration-300"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--muted-color)] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-5 border-t border-[var(--border-color)]">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted-color)]">
                    <FiLayers size={14} />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted-color)]">
                    <FiCalendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {project.image ? (
                <div className="px-8 pb-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-lg">
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                  </div>
                </div>
              ) : (
                <div className="px-8 pb-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <CodePreview code={project.code} gradient={project.gradient} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
