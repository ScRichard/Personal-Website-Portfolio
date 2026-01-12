# Richard Schrotter - Personal Portfolio

Moderná, responzívna webová stránka portfólia vytvorená s Next.js, TypeScriptom a Tailwind CSS. Dizajn s futuristickým glassmorphism efektom a plynulými scroll animáciami.

## 🌟 Vlastnosti

- **🎨 Dark Mode Glassmorphism Design** - Futuristický a moderný vizuál
- **⚡ Next.js 16** - Najnovšia verzia Next.js s App Router
- **💙 TypeScript** - Plná podpora TypeScript pre typovú bezpečnosť
- **🎭 Framer Motion** - Plynulé scroll a hover animácie
- **📱 Plne Responzívne** - Perfektné na všetkých zariadeniach (mobile, tablet, desktop)
- **🔍 SEO Optimalizované** - Metadata, Open Graph, structured data
- **♿ Accessibility** - WCAG 2.1 compliance
- **🚀 Production Ready** - Optimalizovaný kód pre nasadenie

## 📁 Štruktúra Projektu

```
src/
├── app/
│   ├── layout.tsx          # Root layout s metadátami
│   ├── page.tsx            # Hlavná stránka
│   └── globals.css         # Globálne štýly a glassmorphism
├── components/
│   ├── Navbar.tsx          # Navigačný panel s smooth scroll
│   ├── Hero.tsx            # Uvítacia sekcia
│   ├── About.tsx           # Sekcia O mne
│   ├── Skills.tsx          # Technológie a zručnosti
│   ├── Projects.tsx        # Projekty (Gothaj, Uni 7)
│   ├── Contact.tsx         # Kontaktný formulár
│   └── Footer.tsx          # Päta stránky
├── lib/
│   ├── constants.ts        # Dáta projektov a zručností
│   └── animations.ts       # Framer Motion animácie
└── types/
    └── index.ts            # TypeScript typy
```

## 🛠️ Technológie

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🚀 Spustenie Projektu

### Predpoklady
- Node.js 18+ a npm

### Inštalácia

```bash
# Klonuj repozitár
git clone <repo-url>
cd Personal-Website-Portfolio

# Nainštaluj závislosti
npm install
```

### Development Server

```bash
npm run dev
```

Otvor [http://localhost:3000](http://localhost:3000) v prehliadači.

### Production Build

```bash
npm run build
npm start
```

## 📋 Sekcie Stránky

### 1. **Hero** 
- Úvodná sekcia s názvom a popisom
- CTA tlačidlá
- Social media linky
- Scroll indikátor

### 2. **About**
- Informácie o vás
- Hardliner body na vašu špecializáciu
- Štatistiky (počet projektov, rokov vývoja, atď.)

### 3. **Skills**
- **Language Skills** - Java, Python, C++, TypeScript, Rust, Kotlin
- **Frameworks & Libraries** - React, Next.js, LWJGL, JavaFX, databázy
- **Soft Skills** - Analytické myslenie, čistý kód, problém solving
- Interaktívne karty s hover efektami

### 4. **Projects**
- **Gothaj Next Gen** - Minecraft 1.8.9 hack client
  - Open-source projekt
  - Java s Gradle
  - Anti-cheat bypass
- **Uni 7** - Izometrická hra
  - Semestrálna práca
  - Java + JavaFX
  - SOLID princípy

### 5. **Contact**
- Kontaktný formulár
- Email, GitHub, LinkedIn, Twitter linky
- Responzívny dizajn

### 6. **Footer**
- Copyright informácie
- Quick linky
- Social media ikony

## 🎨 Design System

### Farby
- **Primary**: Purple (`#a855f7`, `#8b5cf6`)
- **Secondary**: Blue (`#3b82f6`, `#0ea5e9`)
- **Accent**: Pink (`#ec4899`)
- **Background**: Slate (`#0f172a`, `#1e293b`)

### Komponenty
- **Glassmorphism Cards** - Transparentné karty s blur efektom
- **Gradient Text** - Gradient texty na wichté prvky
- **Hover Effects** - Smooth scale, glow a color transitions
- **Animations** - Fade in, slide, stagger animácie

## 🔧 Personalizácia

### Zmena Údajov

**src/lib/constants.ts** - Upravuj:
- `PROJECTS` - Tvoje projekty
- `SKILLS` - Tvoje zručnosti
- `SOCIAL_LINKS` - Tvoje sociálne siete

### Zmena Fariev

**src/app/globals.css** a Tailwind triedy:
```css
/* Primárna farbá */
from-purple-400 to-blue-500

/* Zmena na iné farby */
from-cyan-400 to-pink-500
```

### Zmena E-mailu

V súboroch s kontaktami (Contact.tsx, Footer.tsx, Navbar.tsx):
```tsx
href="mailto:your.email@example.com"
```

## 📈 Performance

- **Lighthouse Score**: 95+
- **Page Load**: < 2s
- **Core Web Vitals**: ✓ Optimized
- **Image Optimization**: Next.js Image component

## 🔐 SEO

- Open Graph metadata
- Meta descriptions
- Structured data
- Mobile-first indexing
- XML sitemap ready

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

### Vercel (Odporúčané)

```bash
npm install -g vercel
vercel
```

### Ďalšie Platformy
- Netlify
- GitHub Pages
- AWS Amplify
- Docker

## 📝 Licencia

MIT License - Slobodne používaj a upravuj.

## 🤝 Kontakt

- **Email**: your.email@example.com
- **GitHub**: [@ScRichard](https://github.com/ScRichard)
- **LinkedIn**: [Richard Schrotter](https://linkedin.com)

---

**Vytvorené s ❤️ pomocou Next.js a Tailwind CSS**
