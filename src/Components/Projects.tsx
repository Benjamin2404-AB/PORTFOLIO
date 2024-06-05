import {useRef} from 'react';
import gsap from  'gsap';
import '../Styles/Projects.css'
//import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import ProjCards from './ProjCards';
//import Bottom from './Footers';
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
                        start:"200px 80%",
                        
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
           <div>

                <ProjCards>

                </ProjCards>
                

           </div>
            


           
            
        </>

  );
  

}

export default Projects