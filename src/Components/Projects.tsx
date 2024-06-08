
import '../Styles/Projects.css'
//import { useGSAP } from '@gsap/react';

import ProjCards from './ProjCards';
//import Bottom from './Footers';
function Projects() {
    //const python = document.querySelector(".python");
 



  return(
        <>
           <div>
                <h1 className='lhead'>
                    Welcome to my <span>projects</span> . 
                </h1>
                <p className='ltext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam reiciendis debitis saepe 
                    maxime beatae a ut quae aperiam labore velit dolores ipsa 
                    optio natus dignissimos, rem harum consequatur in quia!
                    
                </p>

                <ProjCards>

                </ProjCards>
                

           </div>
            


           
            
        </>

  );
  

}

export default Projects