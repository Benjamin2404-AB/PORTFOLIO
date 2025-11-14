import PY from '../assets/python.png'
import PS from '../assets/ps.png'
import C from '../assets/C++.png'
import PR from '../assets/pr.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef } from 'react';





function StackBar() {

    const container = useRef<HTMLDivElement | null >(null);
    gsap.registerPlugin(useGSAP); // register the plugins
    useGSAP(() => {
    if (container.current) {
      const icons = container.current.querySelectorAll("img");

      gsap.to(icons, {
        xPercent: -120, 
        duration: 6,    
        repeat: -1,
        yoyo: true,
        yoyoEase: "power1.inOut",
        ease: "linear",
        // modifiers: {
        //   xPercent: gsap.utils.wrap(-100, 0) // wrap back around
        // }
      });
    }
  }, { scope: container });



  return (
    <div ref={container}
    className="flex flex-row gap-4 !pt-[10px] items-start justify-center  overflow-hidden rounded-sm  bg-[#efefef27] shadow-[0px_7px_29px_rgba(100,100,111,0.12)]"
    
    
    >
        <div className="absolute -z-10 w-[80%] h-[120%] bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 blur-2xl rounded-full"></div>

        <img 
        src={PY} 
        alt=""  
        className='w-10 h-10 saturate-100'
        />
        <img 
        src={C} 
        alt=""  
        className='w-10 h-10 saturate-100'
        />
        <img src={PS} 
        alt="" 
         className='w-10 h-10 saturate-100'
         />
        <img 
        src={PR}
         alt=""  
         className='w-10 h-10 saturate-100'
         />

      
    </div>
  );
}

export default StackBar;

