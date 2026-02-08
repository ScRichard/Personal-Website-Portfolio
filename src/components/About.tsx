export default function About() {
  const about = "Passionate software engineer specializing in full-stack development. With a strong foundation in Java and Node.js. I have experienced building software solutions that solve real-world problems."

  const skills = [
    { name: 'Java', explanation: 'School projects, Backend, Software' },
    { name: 'TS/JS', explanation: 'Web development, Automatizations' },
    { name: 'SpringBoot', explanation: 'Backend development in Java' },
    { name: 'React', explanation: 'Frontend development' },
    { name: 'Next.js', explanation: 'Web development' },
    { name: 'SQL', explanation: 'Database management with PostgreSQL' },
    { name: 'Lombok', explanation: 'Java library for reducing boilerplate code' },
    { name: 'Security', explanation: 'Knowledge of security best practices' },
  ];

  return (
    <section id="about" className="text-white flex flex-col md:w-3xl mx-auto px-4 py-4">
      <div className="text-xl mb-3 underline underline-offset-4">
        About Me
      </div>
      <span className="text-gray-200 mb-2">{about}</span>

      <div style={{backgroundColor: "rgb(100, 100, 100)"}} className="w-full h-[0.5px] block mb-2 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
        {skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-[1fr_3fr] gap-2 items-center">
            <div style={{backgroundColor: "rgb(200, 200, 200)"}} className="rounded-3xl glow font-medium text-sm w-fit px-2 py-0 text-black">
              {skill.name}
            </div>
            <p className="text-white text-sm ">{skill.explanation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
