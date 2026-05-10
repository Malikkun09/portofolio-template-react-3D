import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', message: '' });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="section-label mb-4 block">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f0f0f0] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#a1a1aa]">
            Have a project in mind? I&apos;d love to hear about it. Drop me a
            message and let&apos;s create something amazing.
          </p>
        </div>

        {/* Form */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#f0f0f0] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-[#f0f0f0] placeholder:text-[#a1a1aa]/50 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all duration-300"
              />
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#f0f0f0] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-[#f0f0f0] placeholder:text-[#a1a1aa]/50 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                submitted
                  ? 'bg-green-500 text-white'
                  : 'bg-[#8b5cf6] hover:bg-[#7c3aed] text-white hover:shadow-glow'
              } disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                'Message Sent!'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
