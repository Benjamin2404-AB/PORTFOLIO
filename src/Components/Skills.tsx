import '../Styles/Skill.css'
import Attributes from './Attributes';
function Skill(){

    return(
        <>
            <section className="second" id="secondpart">
                <div className="secondparttext">

                    
                    <h1 className="name ">What <span>Skills </span>do  I possess?  </h1>
                    <p id="skil">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Qui aliquam reiciendis velit doloribus magni recusandae 
                        id earum maiores? Aut impedit debitis dolores excepturi 
                        eum voluptas iusto eos perferendis molestiae.
                        Assumenda fugiat modi natus optio laudantium 

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