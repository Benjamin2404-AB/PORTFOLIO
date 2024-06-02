import {useRef} from 'react';
import gsap from  'gsap';
import '../Styles/Projects.css'
//import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
function Projects() {
    //const python = document.querySelector(".python");
   
    const head_ref = useRef(null);
    const python = head_ref.current;
    useEffect(()=>{
       
            gsap.registerPlugin(ScrollTrigger);
            let ctx = gsap.context(() => {

                gsap.to(python,{
                    scrollTrigger:{
                        trigger: python,
                        start:"20px 80%",
                        
                        markers:true,
                        toggleActions: "restart none reverse none",
                    },
                    x:200,
                    rotation:160,
                    duration:10,
    
                
                
                });

            });

            return () => ctx.revert();
},[]);


  return(
        <>
           
            <div className="C">
                <h1>hello</h1>
                <p>Lorem Ipsum</p>
            </div>
           
            <div className="JS">
                <h1>hel</h1>
                <p>Lorem Ipsum</p>
            </div>
            <div className="2JS">
                <h1>hello</h1>
                <p>Lorem Ipsum</p>
            </div>
            <div ref={head_ref} className="python">
                <h1>hello hjk</h1>
                <p>Lorem Ipsum</p>
            </div>
        </>

  );
  

}

export default Projects