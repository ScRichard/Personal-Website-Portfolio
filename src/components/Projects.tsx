export default function Projects() {
  const projects = [
    {
      title: 'Gothaj Next Gen',
      description: 'Open-source Minecraft 1.8.9 Client - A sophisticated Minecraft client focused on enhancing player capabilities.',
      features: [
        'Custom EventBus system for extensibility',
        'Shader handling via LWJGL',
        'Integrated IRC chat system',
        'Custom Cape synchronization system',
        'SOLID principles implementation'
      ],
      tech: ['Java', 'LWJGL', 'Gradle', 'EventBus', "Documentation"],
      link: 'https://github.com/ScRichard/Gothaj-Next-Gen'
    },
    {
      title: 'Uni 7',
      description: 'Isometric Game Development Project - A semester project game built with Java and JavaFX, featuring isometric view with robust collision systems and game logic implementation.',
      features: [
        'Isometric rendering system',
        'Collision and physics systems',
        'Game logic architecture',
        'SOLID design principles',
        'Comprehensive JUnit testing',
        'Custom coordinate-based rendering (x, y, z)'
      ],
      tech: ['Java', 'JavaFX', 'JUnit', 'Physics'],
      link: 'https://github.com/ScRichard/Uni7'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website showcasing projects and skills with clean design and smooth animations.',
      features: [
        'Fully responsive design',
        'Dark mode theme',
        'Smooth animations',
        'Contact form integration',
        'Project showcase',
        'Modern UI/UX'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      link: 'https://github.com/ScRichard/Personal-Website-Portfolio'
    },
    {
      title: 'VoidID (Comming soon)',
      description: 'Creating and sharing your raver ID and digital identity',
      features: [
        'Simlar to link.me but for ravers',
        'Dark mode theme',
        'Slick design',
        'Database structure in PostgreSQL + Redis',
        'RestAPI built with Java and Spring Boot',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      link: 'https://github.com/ScRichard/VoidID'
    }
  ];

  return (
    <section id="projects" className=" text-white flex flex-col md:w-3xl mx-auto px-4 py-4">
        <h2 className='text-xl mb-3 underline underline-offset-4'>
            Projects
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <article key={index} className='border backdrop-blur-lg border-white/20 rounded-lg overflow-hidden p-6 flex flex-col justify-between'>
              <h3 className="text-xl mb-3">{project.title}</h3>
              <p className="text-gray-200 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-gray-300 font-semibold mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-200 text-xs flex items-start">
                      <span className='mr-2' aria-hidden='true'>→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className='bg-white text-black text-xs px-2 py-1 rounded-full' role='doc-term'>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='border border-white/15 drop-shadow-lg px-5 py-3 rounded-2xl hover:border-white/30 hover:text-white/90 transition-all' title={`View ${project.title} on GitHub`}>View Project →</a>
            </article>
          ))}
        </div>
    </section>
  );
}
