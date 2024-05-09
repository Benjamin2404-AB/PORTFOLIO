import '../Styles/Attributes.css'
function Attributes({text,className,id}:{text:string, className:string,id:string}){
    return(
        <>
            <button className={className} id={id} style={{backgroundColor:"fff"}} >
                {text}
            </button>        
        </>
    );


}
export default Attributes