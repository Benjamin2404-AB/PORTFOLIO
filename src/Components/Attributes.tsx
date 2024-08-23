import { useNavigate } from 'react-router-dom';
import '../Styles/Attributes.css'
function Attributes({text,className,id}:{text:string, className:string,id:string}){
    
    
const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/projects'); // Navigate to the /about route
  };
    return(
        <>
            <button className={className} id={id} onClick={handleButtonClick} style={{backgroundColor:"fff"}} >
                {text}
            </button>        
        </>
    );


}
export default Attributes