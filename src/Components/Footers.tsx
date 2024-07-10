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
                <div className="contact-form">
                
                    <div className="na">

                        <h6>Your Name</h6>
                        <input type='text' placeholder='Name' />

                    </div>
                   
                    
                    <div className="ma">
                        <h6>Your Email Address</h6>
                        <input type='email' placeholder='Email Address'/>
                    </div>
                  
                    
                    <div className="ta">
                        <h6>Message</h6>
                        <input type='text' placeholder='Send us a mail'/>
                    </div>
                    
                    

                </div>
               

            </div>
         
    
    
        </>



    );
   
           
  

        
}

export default Bottom