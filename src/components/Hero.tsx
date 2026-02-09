'use client';

export default function Hero() {

  const names = "Richard Schmidt".split("");
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className=" text-white min-h-screen flex flex-col items-center justify-center gap-9 z-1">
      <div>
        <h1 className="flex flex-wrap items-center justify-center gap-0.5 w-full max-w-5xl">
        {names.map((name, index) => (
          <span key={index} className="text-xl drop-shadow-lg glow leading-none">
            {name === " " ? "\u00A0" : name}
          </span>
          ))}
        </h1>
        <p className="text-gray-400 text-center mt-2">Full-Stack Software Engineer based in Slovakia</p>
      </div>
      <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="border border-white/15 drop-shadow-lg px-5 py-3 rounded-2xl hover:border-white/30 hover:text-white/90 transition-all" title="Scroll to About section">View more</a>
    </section>
  );
}
