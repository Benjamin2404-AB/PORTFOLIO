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

  useLayoutEffect(()=>{
      
          gsap.registerPlugin(ScrollTrigger);
          let ctx = gsap.context(() => {
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger:'.projdon',
              start:"90px 90%",
              end: "800px 80%",
              markers:false,
              scrub:3,
              toggleActions: " none play none play",
            }
            });
            tl.from('.projdon',{
              ease:"power3.inOut",
              duration:10,
              opacity:0,
              
              x:10,
              y:60,
              
          });
          tl.to('.projdon',{
            //ease:"power3.inOut",
            ease:"expo.out",
            duration:5,
            opacity:1,
            x:10,
            y:0,
            
        });
              

          });

          return () => ctx.revert();
},[]);




  return (
    <>
    
      {Projs.map((p,index)=>(

        <div key={index} className="hj" >
          <section >
            <div className="projdon" style={{backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.99),rgba(0,0,0,0.6)),url(${p.imgPath})`}}
              ref={head_ref}>
                 
                 <h3 >
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

          </section>


        </div>
        


        ))}
    
    </>
  );
}

export default ProjCards