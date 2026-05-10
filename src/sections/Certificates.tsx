import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  {
    title: 'Advanced React Patterns',
    image: 'https://placehold.co/400x300/1a1a1a/8b5cf6?text=React+Advanced',
    description:
      'Certificate demonstrating advanced knowledge of React patterns, hooks, and performance optimization techniques.',
  },
  {
    title: 'Full Stack Web Development',
    image: 'https://placehold.co/400x300/1a1a1a/3b82f6?text=Full+Stack',
    description:
      'Comprehensive certification in full stack web development covering frontend, backend, and database technologies.',
  },
  {
    title: 'UI/UX Design Fundamentals',
    image: 'https://placehold.co/400x300/1a1a1a/f59e0b?text=UI/UX',
    description:
      'Certificate in user interface and user experience design principles, prototyping, and design systems.',
  },
  {
    title: 'TypeScript Mastery',
    image: 'https://placehold.co/400x300/1a1a1a/ec4899?text=TypeScript',
    description:
      'Advanced TypeScript certification covering type systems, generics, and best practices for type-safe applications.',
  },
  {
    title: 'Cloud Architecture with AWS',
    image: 'https://placehold.co/400x300/1a1a1a/06b6d4?text=AWS+Cloud',
    description:
      'Certificate in designing and deploying scalable cloud infrastructure using Amazon Web Services.',
  },
  {
    title: 'DevOps & CI/CD Pipeline',
    image: 'https://placehold.co/400x300/1a1a1a/8b5cf6?text=DevOps',
    description:
      'Certification in continuous integration, continuous deployment, and DevOps best practices.',
  },
];

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, certificates.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="section-label mb-4 block">Certificates</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f0f0f0] mb-4">
            Certifications
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            A collection of certifications earned through continuous learning and
            professional development in web technologies.
          </p>
        </div>

        {/* Certificates Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/3 -translate-x-4 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'opacity-100 hover:bg-[#8b5cf6]/20 cursor-pointer'
            }`}
          >
            <ChevronLeft size={20} className="text-[#f0f0f0]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/3 translate-x-4 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex
                ? 'opacity-30 cursor-not-allowed'
                : 'opacity-100 hover:bg-[#8b5cf6]/20 cursor-pointer'
            }`}
          >
            <ChevronRight size={20} className="text-[#f0f0f0]" />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}px)` }}
                >
                  <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#8b5cf6]/30 transition-all duration-500 group">
                    {/* Certificate image */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-[#f0f0f0] line-clamp-2 flex-1 group-hover:text-[#8b5cf6] transition-colors">
                          {cert.title}
                        </h3>
                        <span className="text-xs text-[#a1a1aa] ml-2 flex-shrink-0">
                          {index + 1}/{certificates.length}
                        </span>
                      </div>
                      <p className="text-xs text-[#a1a1aa]/80 leading-relaxed line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 bg-[#8b5cf6]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
