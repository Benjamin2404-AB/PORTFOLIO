import { useNavigate } from 'react-router-dom';
import '../Styles/Attributes.css'
function Attributes({text,className,id}:{text:string, className:string,id:string}){
    
    
const navigate = useNavigate(); // Initialize useNavigate

const handleButtonClick = () => {
  setTimeout(() => {
      navigate('/projects'); // Navigate to the /projects route after 3 seconds
  }, 3000); // Delay of 3000 milliseconds (3 seconds)
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