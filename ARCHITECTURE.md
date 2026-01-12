# Architektúra Projektu

## Technologický Stack

```
Frontend:
├── Next.js 16 (App Router)
├── React 19
├── TypeScript 5
├── Tailwind CSS 4
├── Framer Motion
└── React Icons

Build Tools:
├── Turbopack
├── PostCSS
└── ESLint

Deployment:
├── Vercel
├── GitHub Pages
└── Docker ready
```

## Zložková Štruktúra

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout s metadátami (SEO)
│   │   ├── page.tsx            # Hlavná stránka s komponentmi
│   │   ├── globals.css         # Globálne štýly, glassmorphism
│   │   ├── sitemap.ts          # Dynamický sitemap pre SEO
│   │   └── robots.ts           # Robots.txt pre crawlery
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Navigácia s scroll efektami
│   │   ├── Hero.tsx            # Hero sekcia s animáciami
│   │   ├── About.tsx           # O mne sekcia s štatistikami
│   │   ├── Skills.tsx          # Zručnosti a technológie
│   │   ├── Projects.tsx        # Projekty (Gothaj, Uni 7)
│   │   ├── Contact.tsx         # Kontaktný formulár
│   │   └── Footer.tsx          # Footer s linkmi
│   │
│   ├── lib/
│   │   ├── constants.ts        # Dáta projektov a zručností (DATA LAYER)
│   │   └── animations.ts       # Framer Motion presets (SHARED UTILS)
│   │
│   └── types/
│       └── index.ts            # TypeScript interfaces
│
├── public/                      # Statické súbory
├── .env.example                 # Template pre environment vars
├── .env.production              # Production environment
├── next.config.ts              # Next.js konfigurácia (SEO, security)
├── tailwind.config.ts          # Tailwind konfigurácia
├── tsconfig.json               # TypeScript konfigurácia
├── package.json                # Závislosti a scripoty
└── README.md                   # Dokumentácia
```

## Design Patterns

### 1. Component Structure
```
Component.tsx
├── "use client" directive (pre client-side komponenty)
├── Imports (React, Framer Motion, Utils)
├── Component definition
├── Types/Interfaces
└── Export default
```

### 2. Animations Pattern
```tsx
// Z lib/animations.ts
import { fadeInUp, staggerContainer } from "@/lib/animations";

// V komponente
<motion.div {...fadeInUp}>
  Content
</motion.div>
```

### 3. Data Management
```tsx
// Constants sú v lib/constants.ts
export const PROJECTS: Project[] = [...]
export const SKILLS: Skill[] = [...]

// Komponenty ich importujú a mapujú
import { PROJECTS } from "@/lib/constants";
```

## Styling Architecture

### Tailwind + Glassmorphism

```css
/* Definované v globals.css */
.glassmorphism {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(139, 92, 246, 0.1);
}

/* Použitie v JSX */
<div className="glassmorphism p-8 rounded-2xl border border-purple-500/20">
```

### Color System

```
Primary: Purple
- Light: #a855f7
- Dark: #8b5cf6

Secondary: Blue
- Light: #3b82f6
- Cyan: #0ea5e9

Accent: Pink (#ec4899)

Background: Slate
- 950: #0f172a (deepest)
- 900: #0f172a
```

## Animation Strategy

### Scroll Animations
- Framer Motion `whileInView` pre triggrovanie pri scroll
- `viewport={{ once: true }}` pre jednorázové animácie
- `margin: "0px 0px -100px 0px"` pre raneshy trigger

### Hover Effects
```tsx
<motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Stagger Animations
```tsx
<motion.div variants={staggerContainer}>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
```

## Performance Optimizations

1. **Code Splitting** - Automaticky Next.js
2. **Image Optimization** - Tailwindowe farby, ne skutočne obrázky
3. **CSS-in-JS Minimization** - Tailwind pre utility classes
4. **Lazy Loading** - Komponenty sa loadujú on-scroll
5. **Font Optimization** - Geist font z Next.js
6. **Tree Shaking** - Unused code sa odstraňuje pri build

## SEO Implementation

1. **Metadata** - layout.tsx
2. **Sitemap** - sitemap.ts
3. **Robots.txt** - robots.ts
4. **Open Graph** - Pre sociálne siete
5. **Structured Data** - Ready na JSON-LD

## TypeScript Best Practices

```tsx
// Types sú centralizované v types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  // ...
}

// Komponenty ich importujú
import { Project } from "@/types";
```

## Accessibility (a11y)

- Semantic HTML (`<section>`, `<nav>`, etc.)
- ARIA labels kde je potrebné
- Color contrast ratios
- Keyboard navigation
- Focus management

## Development Workflow

```bash
# 1. Clone projekt
git clone ...

# 2. Inštalácia
npm install

# 3. Development s hot reload
npm run dev

# 4. Build pre production
npm run build

# 5. Testovanie production build
npm start

# 6. Deployment na Vercel
vercel
```

## Environment Variables

```env
# .env.example
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.local (local development)
NEXT_PUBLIC_API_URL=http://localhost:3000

# .env.production (production)
# Ostatné vars pre production
```

## Customization Guide

### 1. Zmeň údaje
```tsx
// src/lib/constants.ts
export const PROJECTS = [
  {
    id: "my-project",
    title: "My Project",
    // ...
  }
]
```

### 2. Zmeň farby
```tsx
// Tailwind classes
from-cyan-400 to-pink-500  // Zmena od purple-blue na cyan-pink
```

### 3. Zmeň obsah
```tsx
// src/components/Hero.tsx
h1 = "Your Name"  // Zmená nadpis
p = "Your Tagline"  // Zmena tagline
```

### 4. Zmeň email
```tsx
// Všetky komponenty
href="mailto:your.email@example.com"
```

## Building & Deployment

### Local Build
```bash
npm run build  # Vytvorí .next folder
```

### Vercel Deployment
```bash
vercel  # Automatický deployment
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Monitoring & Analytics (Optional)

```tsx
// Gadd Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Future Enhancements

- [ ] Blog sekcia s MDX
- [ ] Dark/Light mode toggle
- [ ] Testimonials sekcia
- [ ] Email integracia (SendGrid/Resend)
- [ ] CMS integracia (Sanity/Contentful)
- [ ] Analytics tracking
- [ ] Multilingual support
- [ ] Social media feed integration

---

**Architektura je modular, scalable a production-ready.**
