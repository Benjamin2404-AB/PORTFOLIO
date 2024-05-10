import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){
    const [toggled,setToggled] = useState(false);

    const handleToggledNavbar = () => {
        setToggled(!toggled)
    }
    return(
        <>
            <div className='navBar' >

                <nav id = {toggled ? "navopen" : ""   }>
                        <div className="tabs" id={toggled ? "open" : "closed" }>
                            
                            <li>
                                <Link to="#"><ul>Home</ul></Link>
                                <Link  to="#secondpart"><ul>About</ul></Link>
                                <Link to="#"><ul>Projects</ul></Link>
                                <Link to="#"><ul>Contact</ul></Link>
                            </li>
                            
                        
                        
                        </div>


                        <button onClick={handleToggledNavbar}
                
                        >
                            {toggled ?  <CloseIcon/>: <ReorderIcon/>  }
                        </button>

                </nav>
                
                

            </div>
            
        
        
        </>
    );

}

export default Navbar