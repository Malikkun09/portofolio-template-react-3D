# Portfolio Website Template

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Three.js. This is a placeholder/template version with Lorem Ipsum content that you can customize.

## Features

- Modern dark theme with glassmorphism effects
- 3D elements using Three.js
- Responsive design for all devices
- Smooth animations and transitions
- Sections: Hero, About, Skills, Projects, Experience, Certificates, Contact, Footer

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Portofoliomine2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/       # Reusable components (Navigation, Scene3D, UI)
├── sections/        # Page sections (Hero, About, Skills, Projects, etc.)
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── App.tsx         # Main application component
```

## Customization

To customize this template with your own data, edit the following files:

- `src/sections/Hero.tsx` - Update name, title, and description
- `src/sections/About.tsx` - Update bio and profile image
- `src/sections/Skills.tsx` - Update skills list
- `src/sections/Projects.tsx` - Update projects
- `src/sections/Experience.tsx` - Update work experience
- `src/sections/Certificates.tsx` - Update certifications
- `src/sections/Contact.tsx` - Update contact form
- `src/sections/Footer.tsx` - Update social links

To change the profile image, replace:
- `public/images/profile.jpg` with your photo (recommended: 400x400px)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** TailwindCSS 3
- **3D:** Three.js + React Three Fiber
- **Animations:** GSAP + Framer Motion
- **Build Tool:** Vite

## License

MIT License - Feel free to use this template for your own portfolio!