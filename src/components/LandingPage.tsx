import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TechCard from './TechCard';
import { projects } from '../projects';
import ProjectCard from './ProjectCard';
import ExpCard from './ExpCard';
import FooterContent from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);


  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Landing intro animations
      if (container.current) {
        const img = container.current.querySelector<HTMLImageElement>('img');
        const h1 = container.current.querySelector<HTMLHeadingElement>('h1');
        const p = container.current.querySelector<HTMLParagraphElement>('p');
        const links = container.current.querySelector<HTMLDivElement>('.links');

        const tl = gsap.timeline({
          defaults: { duration: 1, ease: 'power3.out' },
          scrollTrigger: {
            trigger: container.current,
            start: 'top center',
            toggleActions: 'play none none none',
          },
        });

        if (img) tl.from(img, { opacity: 0, y: 40 });
        if (h1) tl.from(h1, { opacity: 0, y: 30 }, '-=0.8');
        if (p) tl.from(p, { opacity: 0, y: 20 }, '-=0.8');
        if (links) tl.from(links, { opacity: 0, y: 10 }, '-=0.8');
      }
    });
    gsap.from(aboutRef.current, {
  opacity: 0,
  y: 20,
  duration: 1,
  scrollTrigger: {
    trigger: aboutRef.current,
    start: "top 75%",
    markers: true,
    toggleActions: "play none play none",
  },
});
    gsap.to(aboutRef.current, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: aboutRef.current,
    start: "top 75%",
    markers: true,
    toggleActions: "play none play none",
  },
});

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <main>
      {/* Landing Section */}
      <section
        ref={container}
        className="relative overflow-hidden bg-[#0e0e0e] flex flex-col justify-center items-center min-h-screen px-6"
      >
        <div className="relative z-10 flex flex-col md:flex-row  items-center justify-between max-w-7xl w-full gap-12 pt-32 pb-20 px-8">

          <div className="w-full md:w-6/12 flex flex-col gap-6">
            <p className="text-white font-tomorrow text-[12px] md:font-tomorrow md:text-[16px] mx-auto text-gray-700   font-normal tracking-tight"> 
                   <span className="font-bold text-[14px] md:text-[18px] text-gray-500 hover:text-white transition-colors">Full Stack Developer   •   Graphic Designer   •   Finance Enthusiast </span> <br/>
  I create digital experiences that combine technology, design, and creativity.
From building full-stack applications to designing intuitive interfaces and 
compelling visual graphics, I enjoy turning ideas into impactful digital products.
            </p>
            
            <div className="flex gap-6 mt-10">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/bappiahboadu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
                <svg className=" w-6 h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* X (formerly Twitter) */}
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 " fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Be" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 " fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <img
            src="/src/assets/benportrait.png"
            alt="Benjamin Appiah-Boadu"
            className="w-64 h-64 md:w-80 md:h-80  rounded-full border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-500"
          />

        </div>

       
       

     
      </section>

      {/* About Me Section */}
      <section
        ref={aboutRef}
        className="relative font-tomorrow w-full bg-[#0b1017] flex flex-col items-center justify-center min-h-[80vh] py-18 px-8 border-t border-gray-900"
        id="about"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="flex flex-col items-start !border-b !border-gray-800 pb-6 w-full">
            <h2 className="text-[40px] md:text-[120px] font-bold text-white tracking-tight">
             About <span className="text-gray-500">Me</span>
           </h2>
          </div>

          <div className="flex flex-row  gap-20 items-center">
            <div className="w-full flex flex-col md:flex-row gap-6 text-gray-400 text-[12px] md:text-xl leading-relaxed">
              <div className="w-full md:w-1/2 flex flex-col gap-6 text-gray-400 text-[12px] md:text-xl leading-relaxed">
              <p>
                My journey into tech hasn't been strictly linear.
                 I began studying Geography at PRESEC Science, but today I'm a <span className="text-white font-medium">
                Computer Engineering</span> student at KNUST. 
                I thrive where logic meets creativity, engineering robust full-stack applications while crafting clean, 
                intuitive user interfaces. <br/><br/>
                I formally served as Deputy PRO for ACES KNUST, which gave me the incredible opportunity to connect with diverse groups and organize events.
                Interning at <span className="text-white font-medium">MTN</span> and <span className="text-white font-medium">PwC</span> sharpened my ability to problem-solve and adapt 
                under pressure in professional spaces.
                <br/><br/>
                 I'm always looking to expand my stack, refine my design intuition, and deepen my financial knowledge.
                 Off the keyboard, you'll find me following football (massive Manchester United fan), working on creative projects, staying active, and exploring new spaces.
              </p>
              
              </div>



            {/* Right: 4-Picture Collage */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <img src="/src/assets/image1.jpg" alt="Experience 1" className="w-full h-48 md:h-64 object-cover rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition-transform duration-300 mix-blend-color-burn" />
                <img src="/src/assets/slide3.png" alt="Experience 2" className="w-full h-32 md:h-48 object-cover rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <img src="/src/assets/slide4.png" alt="Experience 3" className="w-full h-32 md:h-48 object-cover rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                <img src="/src/assets/image5.png" alt="Experience 4" className="w-full h-48 md:h-64 object-cover rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition-transform duration-300" />
              </div>
            </div>
            
            </div>
            
            {/* Left: Text Description */}
          
            

          </div>

        </div>
        </section>
      {/* Tech Stack Section */}
  <section
  className="relative font-tomorrow w-full bg-[#0e0e0e] flex flex-col items-center justify-center !py-18 px-8 border-t border-gray-900"
  id="tech"
>
  <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
    <div className="flex flex-col items-start !border-b !border-gray-800 pb-6 w-full">
      <h2 className="text-[40px] md:text-[64px] font-bold text-white tracking-tight">
        Tech <span className="text-gray-500">Stack</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full overflow-x-hidden min-w-max pb-4">

      {/* Languages */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-gray-300 border-b border-gray-800 pb-2">
          Languages
        </h3>
        <div className="flex flex-col gap-4">
          <TechCard
            name="Python"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            }
          />
          <TechCard
            name="TypeScript"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M2 2h20v20H2V2zm14 12h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/>
              </svg>
            }
          />
          <TechCard
            name="C++"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            }
          />
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-gray-300 border-b border-gray-800 pb-2">
          Frameworks
        </h3>
        <div className="flex flex-col gap-4">
          <TechCard
            name="React"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 2c2 0 3.73 1 5 2.65m-10 0C8.27 3 10 2 12 2zm0 20c-2 0-3.73-1-5-2.65m10 0C15.73 21 14 22 12 22zm10-10c0 2-1 3.73-2.65 5m0-10C21 8.27 22 10 22 12zm-20 0c0-2 1-3.73 2.65-5m0 10C3 15.73 2 14 2 12z"/>
              </svg>
            }
          />
          <TechCard
            name="Django"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 20v-8l-10-5v8l10 5zm0 0l10-5v-8l-10 5v8z"/>
              </svg>
            }
          />
          <TechCard
            name="Qt Creator"
            svg={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="10"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="white">Qt</text>
              </svg>
            }
          />
        </div>
      </div>

      {/* Tools & Software */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-gray-300 border-b border-gray-800 pb-2">
          Tools
        </h3>
        <div className="flex flex-col gap-4">
          <TechCard name="Photoshop" svg={<div className="font-bold text-lg font-mono tracking-tighter">Ps</div>} />
          <TechCard name="Premiere Pro" svg={<div className="font-bold text-lg font-mono tracking-tighter">Pr</div>} />
          <TechCard name="Illustrator" svg={<div className="font-bold text-lg font-mono tracking-tighter">Ai</div>} />
          <TechCard
            name="Microsoft Word"
            svg={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M3 2h18v20H3V2zm2 2v16h14V4H5z"/></svg>}
          />
          <TechCard
            name="Microsoft Excel"
            svg={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M3 2h18v20H3V2zm2 2v16h14V4H5z"/></svg>}
          />
          <TechCard
            name="MS Access"
            svg={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>}
          />
        </div>
      </div>
    </div>
  </div>
</section>
<section 
  className="relative font-tomorrow w-full bg-[#0b1017] flex flex-col items-center justify-center py-14 sm:py-16 md:py-18 px-4 sm:px-6 md:px-8 border-t border-gray-900" 
  id="projects"
>
  <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16">
    
    <div className="flex flex-col items-start border-b border-gray-800 pb-4 sm:pb-6 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold text-white tracking-tight">
        Project <span className="text-gray-500">Works</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={{
            id: project.id,
            title: project.title,
            description: project.description,
            technologies: project.technologies,
            category: project.category,
            github: project.github,
            demo: project.demo,
            image: project.image
          }}
        />
      ))}
    </div>

  </div>
</section>


<section  
  className="relative font-tomorrow w-full bg-[#0e0e0e] flex flex-col items-center justify-center py-14 sm:py-16 md:py-18 px-4 sm:px-6 md:px-8 border-t border-gray-900" 
  id="workExp"
>
  <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16">
    
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-gray-800 pb-4 sm:pb-6 w-full">
      
      <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold text-white tracking-tight">
        Work <span className="text-gray-500">Experience</span>
      </h2>

      <a
        href="https://tinyurl.com/bappiahcv26"
        className="flex items-center justify-center  gap-2 px-4 py-2 sm:px-5 sm:py-3 border border-purple-600 bg-[#0b1017] text-sm font-semibold text-white hover:shadow-[0_0_16px_rgba(147,51,234,0.45)] transition-all duration-200 w-6/12 md:w-auto sm:w-auto"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
        </svg>
        Get full CV
      </a>

    </div>

    <ExpCard />

  </div>
</section>
      <FooterContent/>
    </main>
  );
}
