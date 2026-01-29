# Nirmal Magar - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional information.

## 🌟 Features

- **Modern Design**: Dark theme with vibrant purple/pink gradients and glassmorphism effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Eye-catching animations and micro-interactions throughout
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility
- **Component-Based**: Built with reusable React components for maintainability
- **Fast Performance**: Powered by Vite for lightning-fast development and optimized builds

## 🛠️ Technologies Used

- **React** - UI library for building component-based interfaces
- **Vite** - Next-generation frontend build tool
- **CSS3** - Custom styling with animations and modern effects
- **JavaScript (ES6+)** - Modern JavaScript features

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated typing effect
2. **About** - Professional summary and background
3. **Skills** - Technical skills organized by category with progress indicators
4. **Projects** - Featured projects from GitHub with filtering options
5. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
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

## 🚀 Deploy to Netlify

This project is configured for easy deployment on Netlify.

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Netlify Configuration

The project includes pre-configured Netlify settings:
- **`netlify.toml`** - Build commands and settings
- **`public/_redirects`** - SPA routing support
- **Node 18** - Specified Node.js version
- **Security headers** - X-Frame-Options, XSS protection

## 📁 Project Structure

```
folio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/           # Data files
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # App-level styles
│   ├── index.css       # Global styles and variables
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.js` to update project information
2. **Skills**: Edit `src/data/skills.js` to update your skills and proficiency levels
3. **About Content**: Edit `src/components/About.jsx` to update bio and highlights
4. **Contact Info**: Edit `src/components/Contact.jsx` for contact details and social links
5. **Hero Section**: Edit `src/components/Hero.jsx` to update name and tagline

### Customize Colors

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💡 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from inline SVGs
- Fonts from Google Fonts (Inter & Poppins)

---

**Built with ❤️ by Nirmal Magar**
