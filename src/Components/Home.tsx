import '../Styles/Home.css'
import Skill from './Skills';
function Home(){

    return(

        <>
            <section className="intro">
                <h1>
                    Hi! I am a <span>Developer.</span>
                </h1>
                <p className='textpara'>
                    I am Benjamin Appiah-Boadu, A second year Computer Engineering student at 
                    Kwame Nkrumah University of Science and Technology. 
                    I am passionate about a lot of disciplines . I am into graphic designing ,
                    video editing, UI and UX  designs as well as programming. 
                    In terms of programming I am currently striving to improve skills in 
                    Python , JavaScript , React and C++ 
                    
                </p>
                <div className="card">HELLO THERE</div>

                <Skill/>
            </section>
            
            
        
        
        </>


    );
}

export default Home