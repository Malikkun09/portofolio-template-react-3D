import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with payment integration, inventory management, and admin dashboard.',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=E-Commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-[#8b5cf6]/30 to-[#7c3aed]/30',
    letter: 'E',
    link: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, kanban boards, and team features.',
    image: 'https://placehold.co/600x400/1a1a1a/3b82f6?text=Task+App',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    color: 'from-[#3b82f6]/30 to-[#2563eb]/30',
    letter: 'T',
    link: '#',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for tracking social media metrics with beautiful data visualizations.',
    image: 'https://placehold.co/600x400/1a1a1a/f59e0b?text=Dashboard',
    tags: ['React', 'D3.js', 'REST API', 'TailwindCSS'],
    color: 'from-[#f59e0b]/30 to-[#d97706]/30',
    letter: 'S',
    link: '#',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Beautiful weather application with location-based forecasts and interactive maps.',
    image: 'https://placehold.co/600x400/1a1a1a/ec4899?text=Weather',
    tags: ['Vue.js', 'OpenWeather API', 'Leaflet', 'CSS'],
    color: 'from-[#ec4899]/30 to-[#db2777]/30',
    letter: 'W',
    link: '#',
  },
  {
    title: 'Blog CMS',
    description:
      'Content management system for bloggers with markdown support and SEO optimization.',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Blog+CMS',
    tags: ['Next.js', 'Sanity', 'Vercel', 'SEO'],
    color: 'from-[#8b5cf6]/30 to-[#a855f7]/30',
    letter: 'B',
    link: '#',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time messaging app with group chats, file sharing, and end-to-end encryption.',
    image: 'https://placehold.co/600x400/1a1a1a/06b6d4?text=Chat+App',
    tags: ['Node.js', 'Socket.io', 'Redis', 'WebSockets'],
    color: 'from-[#06b6d4]/30 to-[#0891b2]/30',
    letter: 'C',
    link: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="section-label mb-4 block">Projects</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f0f0f0]">
            Featured Work
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#8b5cf6]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                {/* Image or colored header */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                  {/* Letter badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-lg font-bold text-white/60">
                      {project.letter}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2 group-hover:text-[#8b5cf6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-md border border-[#8b5cf6]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <button
                      onClick={() => alert('Coming soon!')}
                      className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-[#8b5cf6] transition-colors"
                    >
                      <Code2 size={14} />
                      <span>Code</span>
                    </button>
                    <button
                      onClick={() => alert('Coming soon!')}
                      className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-[#8b5cf6] transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
