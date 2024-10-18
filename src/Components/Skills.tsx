import '../Styles/Skill.css'
import Attributes from './Attributes';
function Skill(){

    return(
        <>
            <section className="second" id="secondpart">
                <div className="secondparttext">

                    
                    <h1 className="name ">What <span>Skills </span>do  I possess?  </h1>
                    <p id="skil">
                    I possess a diverse skill set gained from working on various projects across
                    multiple programming languages, including Python, JavaScript, React, and C++.
                    I am also proficient in the use of Microsoft Office Suite(Word,Excel,PowerPoint and Access), Adobe Photoshop,Illustrator
                    Canva and Figma creating seamless designs of flyers, video promos and user interface
                


                    </p>
                    <div className="ava">
                        <img src="avatar.jpg"/>

                    </div>

                </div>
                
                <div className="attributes">
                    
                    
                    <Attributes 
                            text="SKILLS"  className="skill"
        
                            id="skills"

                    />
                    <li>
                    <Attributes 
                        text="Python3"  
                        className="python"
                        id="python3"

                    />
                    </li>
                    <li>
                    <Attributes 
                        text="JavaScript"  
                        className="Javascrip"
                        id="JS"
                    
                    />

                    </li>
                    <li>
                    <Attributes 
                        text="React JS"  
                        className="React"
                        id="ReactJS"
                    
                    />

                    </li>

                    <li>
                    <Attributes 
                        text="MySQL"  
                        className="MSQL"
                        id="MySQL"

                    />
                    </li>
                    <li>
                    <Attributes 
                        text="HTML5"  
                        className="HTML"
                        id="Html"
                    
                    />

                    </li>
                    
                    <li>
                    <Attributes 
                        text="CSS3"  
                        className="CSo"
                        id="CSS"
                    
                    />

                    </li>

                    <li>
                    <Attributes 
                        text="Photoshop"  
                        className="PSD"
                        id="psd"

                    />
                    </li>
                    <li>
                    <Attributes 
                        text="Illustrator"  
                        className="illus"
                        id="ill"
                    
                    />

                    </li>
                    
                    <li>
                    <Attributes 
                        text="Premiere Pro"  
                        className="PP"
                        id="PPR"
                    
                    />

                    </li>



                </div>
                

            </section>
        
        
        
        
        
        
        
        </>




    );


}

export default Skill