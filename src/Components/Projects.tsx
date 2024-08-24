import Bottom from './Footers';
import '../Styles/Projects.css'
//import { useGSAP } from '@gsap/react';

import ProjCards from './ProjCards';
//import Bottom from './Footers';
function Projects() {
    //const python = document.querySelector(".python");
 



  return(
        <>
           <div>
                <div className="tet">

                    <h1 className='lhead'>
                        Welcome to my <span>projects</span> . 
                    </h1>
                    <p className='ltext'>





                        I have worked on a variety of projects spanning multiple programming languages, 
                        including Python, JavaScript,React and C++.
                        My Python projects encompass a TODO list application using Tkinter,
                        an automated email system, and data analysis utilizing Numpy, Matplotlib,
                        and Jupyter Notebook. 
                        Additionally, I have developed a portfolio website using React 
                        and applied my knowledge of C++'s Object-Oriented Programming (OOP) paradigm to design a hospital OPD Management System.
                        I've also honed my UI/UX skills by creating several designs using Figma
                        
                   

                    </p>

                </div>
                
                
           

                
                
                

           </div>
           <div className="od"><ProjCards/></div>

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