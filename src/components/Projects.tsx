export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product catalog, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics and engagement across platforms.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-white/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/50 transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white text-black text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-white hover:text-gray-300 font-semibold">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
