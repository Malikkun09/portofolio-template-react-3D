import { useEffect, useRef, useState } from 'react';

const skillsRow1 = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Sass', 'Three.js', 'GSAP', 'Node.js', 'Express',
];

const skillsRow2 = [
  'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Git',
  'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'Linux',
];

const allSkills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Sass', 'Three.js', 'GSAP', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Git',
  'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'Linux',
];

export default function Skills() {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="section-label mb-4 block">My Skills</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f0f0f0]">
            Technologies I Work With
          </h2>
        </div>

        {/* Desktop: Marquee rows */}
        <div className="hidden md:block space-y-4">
          {/* Row 1 - scrolling left */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex gap-4 animate-marquee">
                {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                  <span
                    key={`r1-${i}`}
                    className="glass-effect px-6 py-3 rounded-full text-[#f0f0f0] text-sm font-medium whitespace-nowrap hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - scrolling right */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-4 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex gap-4 animate-marquee-reverse">
                {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                  <span
                    key={`r2-${i}`}
                    className="glass-effect px-6 py-3 rounded-full text-[#f0f0f0] text-sm font-medium whitespace-nowrap hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Grid layout */}
        <div className="md:hidden">
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {allSkills.map((skill, i) => (
              <span
                key={i}
                className="glass-effect px-4 py-2 rounded-full text-[#f0f0f0] text-sm font-medium hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
