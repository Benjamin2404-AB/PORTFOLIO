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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Qui aliquam reiciendis velit doloribus magni recusandae 
                    id earum maiores? Aut impedit debitis dolores excepturi 
                    eum voluptas iusto eos perferendis molestiae.
                    Assumenda fugiat modi natus optio laudantium 
                    sunt beatae molestiae autem ratione aperiam omnis
                    dignissimos, facere perspiciatis magni ab consequatur i
                     psa facilis voluptatem quia dolorem rerum! Nam exercitationem ipsa
                    laudantium voluptas.
                </p>
                <div className="card">HELLO THERE</div>

                <Skill/>
            </section>
            
            
        
        
        </>


    );
}

export default Home