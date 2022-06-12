import '../mainstyles.css'
import { Carousel } from "react-responsive-carousel";
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from './Hero';


const Banner = () => {
    const hero1Content = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
 return(
   <section id='home' className='Banner'>
       <div className='carosuel'>
     <Carousel showThumbs={false} infiniteLoop={true} showArrows={false} autoPlay={true} interval={3000} >
         <Hero header={'SIT WITH LUXURY'} className={'Hero1'} content={hero1Content}></Hero>
         <Hero header={'THE QUALITY YOU DESERVE'} className={'Hero2'} content={hero1Content}></Hero>
         <Hero header={'AFFORDABLE PRICES'} className={'Hero3'} content={hero1Content}></Hero>
      </Carousel>
      </div>
    </section>
 )
};



export default Banner;