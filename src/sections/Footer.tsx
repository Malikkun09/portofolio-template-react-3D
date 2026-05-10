import { Code2, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-[#a1a1aa] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-[#a1a1aa] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 transition-all duration-300"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a
              href="mailto:lorem@example.com"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-[#a1a1aa] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#a1a1aa]/60 text-center">
            &copy; {currentYear} Lorem Ipsum. Built with React &amp; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
