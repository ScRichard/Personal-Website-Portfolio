import { Project, Skill } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "gothaj",
    title: "Gothaj Next Gen",
    description: "Open-source Minecraft 1.8.9 hack client",
    details: [
      "Zameraný na bypass anticheat systémov",
      "Exploiting herných mechaník a rozširovanie schopností hráča",
      "Vlastný EventBus systém pre správu udalostí",
      "Shader handling pomocou LWJGL",
      "C++ komponenty pre Anti-Leak ochranu",
      "Gothaj IRC - vlastná privátna Java knižnica",
      "Vlastný Cape systém - synchronizácia kozmetických prvkov",
    ],
    technologies: [
      "Java",
      "Gradle",
      "LWJGL",
      "C++",
      "EventBus",
      "IRC Protocol",
    ],
    github: "https://github.com/ScRichard/Gothaj-Next-Gen",
  },
  {
    id: "uni7",
    title: "Uni 7",
    description: "Hra vo vývoji vytvorená ako semestrálna práca",
    details: [
      "Izometrický pohľad s 3D rotáciou",
      "SOLID princípy v Java kóde",
      "Testovanie pomocou JUnit",
      "Renderovací systém založený na x, y, z súradniciach",
      "Implementácia kolízií a hernej logiky",
      "Vlastný render pipeline pre izometrickú scénu",
    ],
    technologies: ["Java", "JavaFX", "JUnit", "SOLID", "Graphics"],
  },
];

export const SKILLS: Skill[] = [
  {
    category: "Language Skills",
    items: [
      "Java (Spring Boot, Lombok, JUnit, SOLID princípy)",
      "Python (NumPy, Pandas, PyTest, Django, FastAPI)",
      "C / C++ (OpenGL, Fragment Shaders, Anti-Leak systémy)",
      "TypeScript, HTML, CSS",
      "Rust (aktívny vývoj)",
      "Kotlin (základy)",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Frontend: React, Next.js, Tailwind CSS",
      "Graphics/Game Dev: LWJGL, JavaFX, Shader handling",
      "Databázy: PostgreSQL, MSSQL, MongoDB",
      "Cloud & Build Tools: Google Cloud Services, Gradle",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Analytické myslenie",
      "Samostatnosť a zodpovednosť",
      "Schopnosť riešiť komplexné problémy",
      "Chuť učiť sa nové technológie",
      "Dôraz na čistý, udržiavateľný kód",
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/ScRichard",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "FaLinkedin",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "FaEnvelope",
  },
];

export const SCROLL_OFFSET = 100;
