export default function About() {
  const about = "Passionate software engineer specializing in full-stack development. With a strong foundation in Java and Node.js. I have experienced building software solutions that solve real-world problems."

  return (
    <section id="about" className="bg-black text-white flex flex-col md:w-1/2 mx-auto px-4 py-4 ň">
      <div className="text-xl mb-3 underline underline-offset-4">
        About Me
      </div>
      <span className="text-gray-300">{about}</span>
    </section>
  );
}
