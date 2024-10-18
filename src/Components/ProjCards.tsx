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
              start:"top 10%",
              end: "1000px 100%",
              markers:true,
              scrub:1,
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
      
      if(window.innerWidth <= 450){
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:'.projdon',
            start:"top top",
            end: "bottom+=500px",
            markers:false,
            scrub:5,
            toggleActions: "play pause resume none",
          }
          });
          tl.from('.projdon',{
            ease:"power3.inOut",
            duration:1.5,
            opacity:0,
            
            x:0,
            y:10,
            
        });
        tl.to('.projdon',{
          //ease:"power3.inOut",
          ease:"expo.inOut",
          duration:1.5,
          opacity:1,
          x:-200,
          y:0,
          
      });
            
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