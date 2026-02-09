export default function Education() {

  return (
    <section id='education' className='bg-black text-white flex flex-col md:w-3xl mx-auto px-4 py-4 z-1'>
      <h2 className='text-xl mb-3 underline underline-offset-4'>
        Education
      </h2>
      <article className='border-l border-gray-700 pl-4 py-2 mb-2'>
        <h3 className='text-white font-semibold'>General studies</h3>
        <p className='text-gray-300'>Grammar School, Bytča</p>
        <time className='text-sm text-gray-400'>Sep 2020 - Aug 2025</time>
      </article>
      <article className='border-l border-gray-700 pl-4 py-2'>
        <h3 className='text-white font-semibold'>Bcs. Computer Science</h3>
        <p className='text-gray-300'>Faculty of Management Science and Informatics, University of Žilina</p>
        <time className='text-sm text-gray-400'>Sep 2025 - present</time>
      </article>
    </section>
  );
}
