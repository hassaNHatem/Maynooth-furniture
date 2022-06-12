import mainlogo from '../icons/mainlogo';
import '../mainstyles.css'
const Nav = () => {
 return(
   <div className='nav'>
     <div className="nav-container">
       <div className='main-logo'>  {mainlogo}</div>
       <div className='links'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#products'>Products</a></li>
          <li><a href='#contact'>Contact Us</a></li>
        </ul>
      </div>
      </div>
     </div>
 )
};



export default Nav;