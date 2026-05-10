import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Scene3D from '../components/Scene3D';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 lg:pb-28 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label">Full Stack Developer & UI/UX Enthusiast</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#f0f0f0] leading-[0.95] tracking-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="block">I&apos;M</span>
            <span className="block text-gradient">LOREM</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg lg:text-xl text-[#a1a1aa] max-w-xl mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A Full Stack Developer passionate about building modern, responsive,
            and user-friendly web applications with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-glow hover:gap-3"
            >
              View Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 border border-white/20 hover:border-[#8b5cf6] text-[#f0f0f0] hover:text-[#8b5cf6] font-semibold rounded-full transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 glass-effect rounded-full p-3 cursor-pointer hover:border-[#8b5cf6]/50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1s' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} className="text-[#a1a1aa] scroll-indicator-arrow" />
      </button>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-4 border-t border-white/5">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-sm text-[#a1a1aa]/40 mx-4 font-mono">
                Lorem Ipsum &bull; Web Developer &bull; Full Stack &bull; React Expert &bull; Node.js &bull; TypeScript &bull; UI/UX &bull; Design Systems &bull;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
