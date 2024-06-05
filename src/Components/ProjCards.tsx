//{skill,text,className,id,image}:{skill:string ,text:string, className: string, id : string,}
import { Projs } from "./ImageCollection";
import { Link } from "react-router-dom";
import '../Styles/ProjCards.css'


function ProjCards() {
  return (
    <>
    
      {Projs.map((p)=>(

     

        <div className="projdon" style={{backgroundImage: `linear-gradient(to top ,rgba(0,0,0,0.98),rgba(0,0,0,0.5)),url(${p.imgPath})`}}>
            
            <h3>
                {p.label}
            </h3>
            <p>
                {p.text}
            </p>

            <Link to= {p.link}>
                <button className="vp">
                    View Project 
                </button>
            </Link>
        </div>
       


        ))}
    
    </>
  );
}

export default ProjCards