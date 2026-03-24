# Nirmal Magar - Portfolio

A modern, highly interactive, and responsive developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, and professional experience with a premium, cinematic feel.

## 🌟 Key Features

- **Modern Glassmorphism UI**: Dark theme featuring dynamic purple/pink gradients, blurred glass paneling, and depth-based shadows.
- **Interactive Storytelling Timeline**: A custom-built, alternating vertical thread timeline that expands into detailed professional case studies out of minimal nodes.
- **Dynamic Radar Skills Chart**: A visually engaging spider/radar chart built with Recharts, mapping out core technical proficiencies alongside animated data rings.
- **Certificate Gallery**: An elegant gallery showcasing professional certifications with interactive pop-up modal viewers.
- **GitHub Projects Integration**: Live project showcases structured perfectly for recruiters and peers.
- **Smooth Animations**: High-performance Framer Motion physics-based spring animations for page-load scrolling, modals, and hover states.
- **Fully Responsive**: Meticulously optimized across mobile, tablet, and desktop viewports without losing structural integrity.
- **SEO Optimized**: Built for high search engine visibility and accessibility.

## 🛠️ Technologies Used

- **React 18** - UI library for building component-based interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first styling framework
- **Framer Motion** - Production-ready animation physics
- **Recharts** - Composable charting library
- **JavaScript (ES6+)** - Modern JavaScript infrastructure

## 📋 Portfolio Sections

1. **Hero** - Cinematic introduction with animated cursors and floating depth effects.
2. **About** - Professional background summary and highlights.
3. **Skills & Expertise** - An advanced radar chart visualizing core competencies, plus animated circular progress rings for secondary technical capabilities.
4. **Career Journey (Experience)** - A top-down alternating vertical timeline where minimalistic roles expand into detailed Challenge/Action/Impact storyboards.
5. **Projects** - Featured projects pulled from GitHub showcasing technical applications.
6. **Certifications** - A responsive grid gallery of earned technical certificates with interactive full-screen modals.
7. **Contact** - Direct contact form and active social media networking links.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iam-neo/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

This project is configured for easy deployment on platforms like Vercel or Netlify.

### Option: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Build & Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📁 Project Architecture

```
folio/
├── public/              # Static assets and images
│   └── certificates/    # Certificate images
├── src/
│   ├── components/      # React components (Experience, Skills, Certifications, etc.)
│   ├── data/            # Data models (experience.js, skills.js, certifications.js)
│   ├── hooks/           # Custom React hooks (useScrollAnimation)
│   ├── App.jsx          # Main application router/component
│   ├── App.css          # App-level styling
│   ├── index.css        # Global styles, Tailwind directives, and CSS variables
│   └── main.jsx         # Vite entry point
├── index.html           # HTML template
├── package.json         # Project manifests and dependencies
├── tailwind.config.js   # Tailwind style configurations
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Updating Content

Updating the portfolio is driven strictly through the isolated payload files in `src/data/`:
1. **Experience**: Edit `src/data/experience.js` to add roles, timelines, and case study impacts.
2. **Projects**: Edit `src/data/projects.js` to outline new project repositories.
3. **Skills**: Edit `src/data/skills.js` to modify the Radar graph axes and core competencies.
4. **Certifications**: Add images to `public/certificates/` and reference them in `src/data/certifications.js`.

### Customize Themes

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #11111b;
  --primary-color: #8b5cf6;
  --secondary-color: #ec4899;
  --accent-color: #06b6d4;
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
}
```

## 📱 Social Links

- **GitHub**: [@iam-neo](https://github.com/iam-neo)
- **LinkedIn**: [nirmal-mgr](https://www.linkedin.com/in/nirmal-mgr/)
- **Instagram**: [@ni.nirmal](https://www.instagram.com/ni.nirmal/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Nirmal Magar**
