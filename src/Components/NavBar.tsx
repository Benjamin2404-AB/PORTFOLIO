import { useState } from 'react';
import {Outlet, Link } from 'react-router-dom';
import '../Styles/NavBar.css'
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";


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
                                <Link to="/"><ul>Home</ul></Link>
                                <Link  to="#"><ul>About</ul></Link>
                                <Link to="/projects"><ul>Projects</ul></Link>
                                <Link to="#"><ul>Contact</ul></Link>
                            </li>
                            
                        
                        
                        </div>


                        <button onClick={handleToggledNavbar}
                
                        >
                            {toggled ?  <CloseIcon/>: <ReorderIcon/>  }
                        </button>

                </nav>
                
                <Outlet/>

            </div>
            
        
        
        </>
    );

}

export default Navbar