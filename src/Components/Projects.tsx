
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
                    I have projects which span diverse programming
                    languages from Python , JavaScript and React 
                    The python projects include a TODO list with Tkinter , an automated email 
                    system and DATA analysis with Numpy, matplotlib and Jupyter.
                    This Portfolio website is a project under React
                    
                </p>

                <ProjCards>

                </ProjCards>
                

           </div>
            


           
            
        </>

  );
  

}

export default Projects