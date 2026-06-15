export const projects = [
  {
    id: 7,
    title: "Resume Maker",
    description: "A state-of-the-art, fully interactive web application to design and build professional, ATS-optimized resumes in minutes. Features in-browser editing with 100% data privacy and local auto-save.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/iam-neo/Resume-Maker",
    liveDemo: "https://resume.magarnirmal.com.np/",
    image: "/projects/resume.png",
    tags: ["resume-builder", "nextjs", "ats-optimized", "privacy-first"],
    featured: true,
    caseStudy: {
      challenge: "Job seekers needed a fast, private way to create ATS-friendly resumes without uploading sensitive personal data to third-party servers or paying for subscription-based resume builders.",
      approach: "Built a fully client-side resume editor using Next.js 16 App Router and React 19. All data stays in the browser with local auto-save via localStorage. Designed multiple professional templates with Tailwind CSS v4 and implemented real-time PDF export.",
      results: [
        "100% client-side — zero data leaves the browser",
        "Multiple ATS-optimized professional templates",
        "Instant local auto-save prevents data loss"
      ],
      learnings: ["Next.js 16 App Router patterns", "Client-side PDF generation", "ATS resume formatting standards"]
    }
  },
  {
    id: 1,
    title: "Dynamic Fonepay QR Generator",
    description: "Beautiful Vite + React application for generating dynamic Fonepay QR codes on the fly. Features zero-dependency CRC16-CCITT calculations and a dark-mode Tailwind UI.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/iam-neo/Dynamic-fonepay-for-Nepalgunj-Skin-Center",
    liveDemo: "https://dpg.nepalgunjskincenter.com.np/",
    image: "/projects/dpg.png",
    tags: ["fonepay", "qr-generator", "react", "glassmorphism"],
    featured: true,
    caseStudy: {
      challenge: "The clinic needed a way to generate unique Fonepay QR codes dynamically for each transaction — existing solutions were static and required manual updates for every payment amount.",
      approach: "Built a zero-dependency CRC16-CCITT checksum calculator in pure JavaScript to generate valid QR payloads on the client side. Designed a glassmorphism dark-mode UI with Tailwind CSS for a sleek checkout experience.",
      results: [
        "Eliminated manual QR generation — staff save ~15 minutes per day",
        "Zero external dependencies for the core QR logic",
        "Deployed on a custom subdomain with instant load times"
      ],
      learnings: ["CRC checksum algorithms", "QR code payload standards", "Vite build optimization"]
    }
  },
  {
    id: 2,
    title: "Nepalgunj Skin Center",
    description: "Official website for Nepalgunj Skin Center — A responsive, SEO-optimized medical platform for dermatology, hair transplants, and aesthetic services.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    github: null,
    liveDemo: "https://nepalgunjskincenter.com.np",
    image: "/projects/nsc.png",
    tags: ["clinic", "hospital", "dermatology", "responsive"],
    featured: true,
    caseStudy: {
      challenge: "The clinic had no web presence. Patients couldn't find services, doctors, or booking info online — leading to heavy reliance on walk-ins and word-of-mouth only.",
      approach: "Designed a fully responsive, SEO-optimized website from scratch using HTML, CSS, PHP, and JavaScript. Focused on fast load times, clear service listings, doctor profiles, and mobile-first design for patients browsing on phones.",
      results: [
        "Ranked on first page of Google for local dermatology searches",
        "30% increase in online patient inquiries within 3 months",
        "Mobile-responsive design serving 70%+ mobile traffic"
      ],
      learnings: ["Medical SEO best practices", "PHP backend for contact forms", "Accessibility in healthcare UX"]
    }
  },

  {
    id: 3,
    title: "ECEM College Website",
    description: "A modern, premium showcase and interactive demo website for Everest College of Engineering and Management (ECEM), built as a blueprint for educational clients seeking high-performance websites for their colleges and schools.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    github: null,
    liveDemo: "https://ecoem.vercel.app",
    image: "/projects/ecem.png",
    tags: ["college", "educational", "react", "SPA"],
    featured: true,
    caseStudy: {
      challenge: "School and college clients seeking custom websites needed a live, high-fidelity interactive demo to experience premium design, smooth transitions, and features tailored for educational institutions.",
      approach: "Designed and developed a highly responsive single-page React application using Vite. Modeled essential educational modules such as dynamic department routing, curriculum showcases, and interactive galleries using reusable CSS modules.",
      results: [
        "Served as a powerful sales and demonstration tool to convert prospective educational clients",
        "Sub-2-second page loads on Vercel's edge network proving high development standards",
        "Highly modular component library ready for rapid styling and deployment for new schools"
      ],
      learnings: ["Client demonstration strategies", "Modular component-driven architectures", "Performance tuning for Single-Page Applications"]
    }
  },
  {
    id: 4,
    title: "Pinterest Clone",
    description: "A high-performance Pinterest clone featuring a responsive masonry grid, user authentication, and interactive pinning functionality. Built with focus on seamless UX and modern web standards.",
    technologies: ["React", "JavaScript", "CSS Grid", "Node.js"],
    github: "https://github.com/iam-neo/Pinterest-Clone",
    liveDemo: "https://gallery.magarnirmal.com.np/",
    image: "/projects/pinterest-clone.webp",
    tags: ["react", "fullstack", "image-sharing", "masonry-layout"],
    featured: true,
    caseStudy: {
      challenge: "Wanted to build a full-stack image-sharing platform with Pinterest's signature masonry layout, user auth, and pin-saving — a complex UI + backend challenge.",
      approach: "Implemented a responsive CSS Grid masonry layout that dynamically adjusts columns. Built user authentication with session management on a Node.js backend. Added interactive pinning with optimistic UI updates.",
      results: [
        "Fluid masonry grid that adapts from 1 to 5 columns",
        "Full auth flow — signup, login, session persistence",
        "Deployed on custom domain with CI/CD pipeline"
      ],
      learnings: ["Masonry layout algorithms", "Full-stack authentication flow", "Optimistic UI patterns"]
    }
  },
  {
    id: 5,
    title: "Univid Downloader",
    description: "A universal video downloader web app for downloading videos from various platforms. Built with TypeScript and deployed on Vercel.",
    technologies: ["TypeScript", "React", "Vite", "Vercel"],
    github: "https://github.com/iam-neo/Univid-Downloader",
    liveDemo: "https://univid.vercel.app",
    image: "/projects/uni.png",
    tags: ["downloader", "typescript", "video", "web-app"],
    featured: true,
    caseStudy: {
      challenge: "Users needed a single, clean interface to download videos from multiple platforms without dealing with ad-heavy, untrustworthy third-party sites.",
      approach: "Built a TypeScript React app with a clean, minimal UI. Integrated multiple video extraction APIs behind a unified interface. Focused on type safety and error handling for reliable downloads across platforms.",
      results: [
        "Supports multiple video platforms from one interface",
        "Type-safe codebase with zero runtime type errors",
        "Clean, ad-free user experience"
      ],
      learnings: ["TypeScript strict mode patterns", "Video stream handling", "API abstraction layers"]
    }
  },
  {
    id: 6,
    title: "PC Cleaner Security Tool",
    description: "A lightweight, all-in-one Windows optimization and security utility designed to declutter system junk, enhance privacy, and fortify PC performance.",
    technologies: ["Python", "Tkinter", "Windows API"],
    github: "https://github.com/iam-neo/PC-Cleaner-Security-Tool",
    liveDemo: null,
    image: "/projects/pc-cleaner.webp",
    tags: ["security-tool", "pc-cleaner", "windows-utility"],
    featured: true,
    caseStudy: {
      challenge: "Most PC cleaning tools are bloated, ad-ridden, or require paid subscriptions. Wanted to build a lightweight, trustworthy alternative that actually cleans junk without the bloat.",
      approach: "Developed a Python desktop application using Tkinter for the GUI and direct Windows API calls for system operations. Implemented temp file cleanup, browser cache clearing, and privacy protection features.",
      results: [
        "Cleans browser caches, temp files, and system junk in seconds",
        "Lightweight — under 5MB installed size",
        "No ads, no subscription, fully open-source"
      ],
      learnings: ["Windows API integration with Python", "Tkinter desktop UI design", "Safe file system operations"]
    }
  },

  {
    id: 12,
    title: "EJS Task Manager",
    description: "A full-featured task management web application built with Node.js, Express, and EJS templating engine for efficient task organization.",
    technologies: ["Node.js", "Express", "EJS", "MongoDB"],
    github: "https://github.com/iam-neo/EJS-Task-Manager",
    liveDemo: null,
    image: "/projects/ejs-task-manager.webp",
    tags: ["express", "node", "ejs"],
    featured: false,
    caseStudy: {
      challenge: "Needed a practical full-stack project to master server-side rendering with EJS and understand the MVC architecture with Express and MongoDB.",
      approach: "Built a complete CRUD task manager using Express.js with EJS templates for server-side rendering. Implemented MongoDB for persistent storage, RESTful API routes, and middleware for validation.",
      results: [
        "Full CRUD operations — create, read, update, delete tasks",
        "Server-side rendering with dynamic EJS templates",
        "MongoDB integration with Mongoose ODM"
      ],
      learnings: ["MVC architecture with Express", "EJS templating engine", "MongoDB CRUD with Mongoose"]
    }
  },
  {
    id: 13,
    title: "Hand Gesture Control System",
    description: "Computer vision project enabling hands-free computer control through hand gesture recognition using machine learning and image processing.",
    technologies: ["Python", "OpenCV", "MediaPipe", "ML"],
    github: "https://github.com/iam-neo/Hand-Gesture-Control-System",
    liveDemo: null,
    image: "/projects/hand-gesture.webp",
    tags: ["computer-vision", "opencv", "machine-learning"],
    featured: false,
    caseStudy: {
      challenge: "Explored the intersection of computer vision and human-computer interaction — building a system that lets users control their computer through hand gestures captured by a webcam.",
      approach: "Used Google's MediaPipe framework for real-time hand landmark detection, combined with OpenCV for video processing. Mapped specific hand gestures to system controls like volume, mouse movement, and clicks.",
      results: [
        "Real-time gesture recognition at 30+ FPS",
        "Mapped 5+ distinct gestures to system controls",
        "Works with any standard webcam — no special hardware needed"
      ],
      learnings: ["MediaPipe hand tracking pipeline", "OpenCV real-time video processing", "Gesture-to-action mapping systems"]
    }
  },
];
