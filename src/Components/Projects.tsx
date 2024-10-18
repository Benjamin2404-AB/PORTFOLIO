import Bottom from './Footers';
import '../Styles/Projects.css'

import gsap from  'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
//import { useGSAP } from '@gsap/react';
import { Languages } from './langCollection';
import ProjCards from './ProjCards';
import { Key, useLayoutEffect, useRef } from 'react';
//import Bottom from './Footers';
function Projects() {
    //const python = document.querySelector(".python");


 const head_ref2 = useRef(null);

  
  useLayoutEffect(()=>{
    if (window.innerWidth >= 1024) {
      
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
    
        
        gsap.from('.pics', {
          xPercent: 0,           
          ease: "none",     
          duration: 5,             
          repeat: -1,               
          
          opacity: 1 ,
          modifiers: {
            // Modifier function to reset the position once the element moves off-screen
            x: gsap.utils.wrap((-50+window.innerWidth), 0)
          }              
        });
        gsap.to('.pics',{
            ease: "none",     
            duration: 5,             
            repeat: -1,               
            
            opacity: 0.5, 
        })
        gsap.to('.pics', {
          xPercent:200,           
          ease: "none",     
          duration: 5,             
          repeat: -1,               
          
          opacity: 1 ,
          modifiers: {
            // Modifier function to reset the position once the element moves off-screen
            x: gsap.utils.wrap((-50+window.innerWidth), 0)
          }              
        });
        
    
        // ScrollTrigger only handles scroll-based effects, not the continuous animation
        ScrollTrigger.create({
          trigger: '.skilPics',
          start: "-180px 20%",
          end: "20px 100%",
          markers: false,
          onEnter: () => gsap.to('.pics', { opacity: 1 }), 
          onLeave: () => gsap.to('.pics', { opacity: 0.5 }) 
        });
        
      });
    
      return () => ctx.revert();
    }
          
},[]);
    


  return(
        <>
           <div>
                <div className="tet">

                    <h1 className='lhead'>
                        Welcome to my <span>projects</span> . 
                    </h1>
                    <p className='ltext'>



                    I have worked on a variety of projects spanning multiple programming languages, including Python, JavaScript,React and C++.
                     My Python projects encompass a TODO list application using Tkinter, an automated email system, and data analysis utilizing Numpy, Matplotlib, and Jupyter Notebook. Additionally, I have developed a portfolio website using React and applied my knowledge of C++'s 
                    Object-Oriented Programming (OOP) paradigm to design a hospital OPD Management System. 
                    I've also honed my UI/UX skills by creating several designs using Figma

                    </p>

                </div>
                
                
           

                
                
                

           </div>
           <div className="od"><ProjCards/></div>
            <div className='skilPics'>

            {Languages.map((l: { img: string | undefined; },index: Key | null | undefined)=>(

                <div key = {index}   >
                        <img className='pics' src={l.img} ref={head_ref2}/>

                </div>

            ))}
             
            </div>
         

            <Bottom id="foot3"/>
            


           
            
        </>

  );
  

}

export default Projects

/*    

-- ALternative description to Welcome to my projects---

I have projects which span diverse programming
languages from Python , JavaScript and React 
The python projects include a TODO list with Tkinter , an automated email 
system and DATA analysis with Numpy, matplotlib and Jupyter.
This Portfolio website is a project under React



*/