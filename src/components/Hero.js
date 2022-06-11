import '../mainstyles.css'



const Hero = (props) => {
 return(
   <div className={`Hero ${props.className}`}>
       <div className='hero-content'>
       <h2>{props.header}</h2>
        <p>{props.content}</p>
        </div>
    </div>
 )
};



export default Hero;