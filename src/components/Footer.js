
import '../mainstyles.css'
const Footer = () => {
 return(
   <div className='Footer'>
     
     <div className='Footer-Wrapper'>
         <div className='contact-us'>
                <h4>Contact Us</h4>
                <div className='list'>
                    <p>+44 345 678 903</p>
                    <p>MaynoothFurniture@gmail.com</p>
                    <p>Find a Store</p>
                </div>
         </div>
         <div className='customer'>
             <h4>customer service</h4>
             <div className='list'>
                <p>Contact us</p>
                <p>ordering & playment</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>FAQ</p>
                </div>
         </div>
         <div className='Information'>
             <h4>Information</h4>
             <div className='list'>
                <p>About MaynoothFurniture</p>
                <p>Work with us </p>
                <p>Privacy Police</p>
                <p>Terms & Conditions</p>
            </div>
         </div>
         
     </div>
     </div>
 )
};



export default Footer;