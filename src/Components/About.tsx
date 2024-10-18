import { Key, ReactNode } from 'react';
import '../Styles/About.css'
import { workExp } from './workEXP'
function About() {
  return (
    <>
        <div className="frame">
            <h1>Get CV</h1>
        </div>

        <div className="exp">
            <h1>Job Experience</h1>

            {workExp.map((w: {
                idnt: string | undefined;
            
                
                roleDes: ReactNode;
                title: ReactNode;companyName: ReactNode; img: string | undefined; 
                },index: Key | null | undefined)=>(

            <div key = {index} className='exp1'  >
                <h2 className='compName2'>{w.companyName}</h2>
                <h4 className="compName">{w.title}</h4>
                <h6 className="compName" id='rd' >  {w.roleDes}</h6>

                <img  src={w.img} id={w.idnt}  className='compPic' />
                

            </div>

            ))}

        </div>



    </>
  )
}

export default About
