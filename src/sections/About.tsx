import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-3xl blur-xl" />

              {/* Image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
<img
                    src="https://placehold.co/400x400/1a1a1a/8b5cf6?text=Lorem"
                    alt="Lorem Ipsum"
                    className="w-full h-full object-cover"
                  />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-effect rounded-2xl px-4 py-3 animate-float">
                <span className="text-[#8b5cf6] font-semibold text-sm">Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="section-label mb-4 block">About Me</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#f0f0f0] mb-6 leading-tight">
              Hey! I&apos;m Lorem.
            </h2>
            <div className="space-y-4 text-[#a1a1aa] leading-relaxed mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center lg:text-left transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#8b5cf6] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[#a1a1aa] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group inline-flex items-center gap-2 text-[#f0f0f0] hover:text-[#8b5cf6] font-semibold transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <span className="border-b border-current pb-1">
                Got a project in mind? Let&apos;s talk!
              </span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden py-4 border-y border-white/5">
        <div className="marquee-container">
          <div className="marquee-content-reverse">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-4xl lg:text-6xl font-bold text-white/[0.03] mx-8 whitespace-nowrap">
                LOREM IPSUM &bull; WEB DEVELOPER &bull; FULL STACK &bull; UI/UX DESIGNER &bull; JAVASCRIPT &bull; REACT EXPERT &bull;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
