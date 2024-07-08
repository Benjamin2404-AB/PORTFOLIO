import '../Styles/Footer.css'
import { Link } from 'react-router-dom';
function Bottom ({id}:{id:string}) {
  
    return(
        <>
            <div className="foot1" id={id}>
                <li>
                     <Link to="#"><ul>Home</ul></Link>
                     <Link  to="#secondpart"><ul>About</ul></Link>
                     <Link to="#"><ul>Projects</ul></Link>
                     <Link to="#"><ul>Contact</ul></Link>
                </li>
                <h6 className='Reach'>Reach out to us </h6>
                <input type='text' placeholder='Send us a mail'>

                
                </input>

            </div>
         
    
    
        </>



    );
   
           
  

        
}

export default Bottom