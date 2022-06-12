
import '../mainstyles.css'
const Contact = () => {
 return(
   <section className='contact' id='contact'>
     <h2>Contact Us</h2>
     <div className='Contact-Wrapper'>
         <div className='left-side'>
                <input type={'text'} placeholder={'Name (required)'} />
                <input type={'text'} placeholder={'Your email (required)'}/>
                <input type={'text'} placeholder={'Subject'}/>
         </div>
         <div className='right-side'>
                <textarea placeholder='Message(required)'></textarea>
         </div>
     </div>
     </section>
 )
};



export default Contact;