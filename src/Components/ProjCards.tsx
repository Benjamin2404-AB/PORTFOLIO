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
              start:"300px 90%",
              end: "800px 80%",
              markers:true,
              scrub:3,
              toggleActions: " none pause none play",
            }
            });
            tl.from('.projdon',{
              ease:"power3.inOut",
              duration:7,
              
              x:50,
              y:30,
              skewY:13,
          });
          tl.to('.projdon',{
            ease:"power3.inOut",
            duration:7,
            
            x:0,
            y:0,
            skewY:0,
        });
              

          });

          return () => ctx.revert();
},[]);




  return (
    <>
    
      {Projs.map((p,index)=>(

        <>
          <section key={index}>
            <div className="projdon" style={{backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.98),rgba(0,0,0,0.5)),url(${p.imgPath})`}}
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


        </>
        


        ))}
    
    </>
  );
}

export default ProjCards