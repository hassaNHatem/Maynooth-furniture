import mainlogo from '../icons/mainlogo';
import '../mainstyles.css'
const Nav = () => {
 return(
   <div className='nav'>
     <div className="nav-container">
       <div className='main-logo'>  {mainlogo}</div>
       <div className='links'>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
      </div>
      </div>
     </div>
 )
};



export default Nav;