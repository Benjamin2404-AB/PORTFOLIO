import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth horizontal scroll for About Me
    if (aboutRef.current) {
      const sections = aboutRef.current.querySelectorAll<HTMLElement>('.slide-section');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: aboutRef.current,
          pin: true,
          scrub: 0.5,
          snap: .3 / (sections.length - 1),
          start: 'top top',
          end: () => `+=${aboutRef.current!.scrollWidth - window.innerWidth}`,
        },
      });
    }

    // Intro animation — play once when the landing section enters view
    if (container.current) {
      const img = container.current.querySelector<HTMLImageElement>('img');
      const h1 = container.current.querySelector<HTMLHeadingElement>('h1');
      const p = container.current.querySelector<HTMLParagraphElement>('p');
      const links = container.current.querySelector<HTMLDivElement>('.links');

      const tl = gsap.timeline({
        defaults: { duration: 1.1, ease: 'power3.out' },
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',          // when the top of landing section hits center of viewport
          toggleActions: 'play none none none',
          markers:true // play only once
        },
      });

      // add safe checks so TypeScript and runtime are happy
      if (img) tl.fromTo(img, { opacity: 0, y: 40 }, { opacity: 1, y: 40 });
      if (h1) tl.fromTo(h1, { opacity: 0, y: 30 },{ opacity: 1, y: 30 }, '-=0.8');
      if (p) tl.fromTo(p, { opacity: 0, y: 20 }, { opacity: 1, y: 20 }, '-=0.8');
      if (links) tl.fromTo(links, { opacity: 0, y: 10 }, { opacity: 1, y: 10 }, '-=0.8');
    }

    // cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf('*');
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="w-full fixed top-10 left-0 z-50">
        <div className="max-w-7xl mx-auto md:w-5/12 px-6">
          <ul className="flex justify-center items-center gap-x-12 text-sm text-white
                   bg-white/10 backdrop-blur-md rounded-xl shadow-lg
                   min-h-[60px] font-tomorrow">
            <a href="#"><li className="cursor-pointer hover:text-purple-400 transition-colors">Home</li></a>
            <a href="#about"><li className="cursor-pointer hover:text-purple-400 transition-colors">About</li></a>
            <Link to="#"><li className="cursor-pointer hover:text-purple-400 transition-colors">Projects</li></Link>
            <Link to="#"><li className="cursor-pointer hover:text-purple-400 transition-colors">CV</li></Link>
            <Link to="#"><li className="cursor-pointer hover:text-purple-400 transition-colors">Hobbies</li></Link>
          </ul>
        </div>
      </nav>

      {/* Landing Section */}
      <section
        ref={container}
        className="relative overflow-hidden bg-[#0e0e0e] flex flex-col justify-center items-center min-h-screen px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-blue-500/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float-slower"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl w-full gap-y-6 pt-20 pb-10">
          <img
            src="/src/assets/bab.png"
            alt="Benjamin Appiah-Boadu"
            className="w-36 h-36 rounded-full border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <h1 className="font-tomorrow text-white text-[32px] md:text-[64px] font-semibold tracking-tight">
            Hey there, I’m <span className="text-purple-400">Benjamin</span> 👋
          </h1>
          <p className="font-tomorrow text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl">
            A <span className="text-blue-400">Full Stack Developer</span>,
            <span className="text-purple-400"> UI/UX Designer</span>, and
            <span className="text-amber-300"> Finance Enthusiast</span> — crafting digital experiences
            where <em>technology meets creativity</em>.
          </p>
          <div className="links flex gap-6 font-tomorrow mt-6">
            <a href="https://www.linkedin.com/in/bappiahboadu/" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Be" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            <a href="mailto:benab2404@gmail.com" className="text-gray-300 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        ref={aboutRef}
        className="horizontal-section bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#121212] font-tomorrow w-full h-screen flex overflow-hidden"
        id="about"
      >
        {/* Slide 0: Title */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-col justify-center items-center p-12 gap-6">
          <h1 className="text-[100px] md:!text-[220px] text-white text-left">About <br />Me</h1>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-blue-500/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float-slower"></div>
        {/* Slide 1 */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-row justify-between items-center p-12 gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg md:!text-[100px] text-purple-400">Who is Benjamin?</h3>
            <p className="text-gray-300 max-w-xl">
              Benjamin Appiah-Boadu is a curious and driven Computer Engineering student with a passion for technology, design, and finance. He enjoys blending creativity and logic to build solutions that make an impact.
            </p>
          </div>
          <div className="flex-1 w-50%">
            <img src="/src/assets/image1.jpg" alt="Benjamin" className="rounded-lg shadow-lg w-[60%] max-w-[600px]  object-cover mix-blend-color-burn" />
          </div>
          <Arrow/>
        </div>

        {/* Slide 2 */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-row justify-between items-center p-12 gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg md:!text-[100px] text-purple-400">The Journey</h3>
            <p className="text-gray-300 max-w-xl">
              Benjamin started his academic journey at PRESEC Science, studying Geography, and graduated WASSCE with 6As and 2Bs. Today, he is in his 3rd year at KNUST pursuing a degree in Computer Engineering.
            </p>
          </div>
          <div className="flex-1">
            <img src="/src/assets/slide2.png" alt="Journey" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <Arrow/>

        </div>

        {/* Slide 3 */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-row justify-between items-center p-12 gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg md:!text-[100px] text-purple-400">Leadership & University Life</h3>
            <p className="text-gray-300 max-w-xl">
              At university, Benjamin serves as Deputy PRO, enjoying the opportunities to connect with people and organize events. He thrives in collaborative environments and loves bringing ideas to life.
            </p>
          </div>
          <div className="flex-1">
            <img src="/src/assets/slide3.png" alt="Leadership" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <Arrow/>

        </div>

        {/* Slide 4 */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-row justify-between items-center p-12 gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg md:!text-[100px] text-purple-400">Experiences & Internships</h3>
            <p className="text-gray-300 max-w-xl">
              Benjamin has gained hands-on experience through internships at MTN and PwC, sharpening his problem-solving, teamwork, and technical skills. He’s always exploring new technologies and improving his coding, design, and financial knowledge.
            </p>
          </div>
          <div className="flex-1">
            <img src="/src/assets/slide4.png" alt="Experience" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <Arrow/>

        </div>

        {/* Slide 5 */}
        <div className="slide-section min-w-screen flex-shrink-0 flex flex-row justify-between items-center p-12 gap-12">
          <div className="flex-1 flex flex-col gap-4 !ml-10 //bg-[#fff]">
            <h3 className=" text-lg md:!text-[100px] text-purple-400">Life Beyond Tech</h3>
            <p className="text-gray-300 max-w-xl">
              Outside of academics and tech, Benjamin is a big Manchester United fan and loves following football. He also enjoys creative design projects, staying fit, and exploring new ways to merge technology and aesthetics.
            </p>
          </div>
          <div className="flex-1">
            <img src="/src/assets/image5.png" alt="Hobbies" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
