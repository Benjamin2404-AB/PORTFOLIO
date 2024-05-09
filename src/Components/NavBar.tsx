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
            <div>

                <nav>
                        <div className="tabs" id={toggled ? "closed" : "open"}>
                            
                            <li>
                                <Link to="#"><ul>Home</ul></Link>
                                <Link  to="#secondpart"><ul>About</ul></Link>
                                <Link to="#"><ul>Projects</ul></Link>
                                <Link to="#"><ul>Contact</ul></Link>
                            </li>
                            
                        
                        
                        </div>


                        <button onClick={handleToggledNavbar}
                
                        >
                            {toggled ?  <ReorderIcon/> :  <CloseIcon/>}
                        </button>

                </nav>
                
                

            </div>
            
        
        
        </>
    );

}

export default Navbar