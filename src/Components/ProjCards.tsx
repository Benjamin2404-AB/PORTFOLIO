//{skill,text,className,id,image}:{skill:string ,text:string, className: string, id : string,}
import { Projs } from "./ImageCollection";
import { Link } from "react-router-dom";
import '../Styles/ProjCards.css'
import {useRef} from 'react';
import gsap from  'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';

function ProjCards() {



  const head_ref = useRef(null);
  //const python = head_ref.current;
  //let sections = document.querySelectorAll(".projdon");
  useLayoutEffect(()=>{
      if(window.innerWidth >= 1024){
        gsap.registerPlugin(ScrollTrigger);
          let ctx = gsap.context(() => {
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger:'.projdon',
              start:"100px 10%",
              end: "1000px 100%",
              markers:false,
              scrub:6,
              toggleActions: " play none none none",
            }
            });
            tl.from('.projdon',{
              xPercent:-10,
              y:-400,
              ease:"power2",
              duration:45,
              opacity:0,

          });
          tl.to('.projdon',{
            //ease:"power3.inOut",
            xPercent: 5,
            y:0,
            ease:"power3",
            duration:30,
            opacity:1,
           

        });


          });

          return () => ctx.revert();



      }
      
      if (window.innerWidth <= 450) {
        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {
            
            let tl = gsap.timeline({
                repeat: -1, 
                paused: false 
            });
    
            tl.fromTo('.projdon', 
                {
                    xPercent: 0, 
                }, 
                {
                    xPercent: -370,  
                    duration: 20, 
                    ease: "none", 
                    repeat: -1,   
                    repeatDelay: 0 
                }
            );
        });
    
        return () => ctx.revert();
    }
    
        
   
        

    
},[]);
  
  


  return (
    <>
    
      {Projs.map((p,index)=>(
      
        <div key={index} className="hj" >
          <section >
            <div className="projdon" style={{backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.99),rgba(0,0,0,0.6)),url(${p.imgPath})`}}
              ref={head_ref}>
                 <div className="inner">
                      <h3 className="ProjectHeading" >
                          {p.label}
                      </h3>
                      <p className="textCards">
                          {p.text}
                      </p>
                        
                      <Link to= {p.link}>
                          <button className="vp">
                              View Project 
                          </button>
                      </Link>
                 </div>
                 
            </div>

          </section>


        </div>
        
        


        ))}
    
    </>
  );
}

export default ProjCards