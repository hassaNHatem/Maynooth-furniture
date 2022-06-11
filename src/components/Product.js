import '../mainstyles.css'
import img from '../assits/pics/nathan-fertig-FBXuXp57eM0-unsplash.jpg'
import heart from '../icons/heart';
import add from '../icons/add';
const Product = ({product}) => {
 return(
   <div className='Product'>
    <div className='img-section'>
        <img src={product.img} width={360} height={270}></img>
    </div>
    <div className='title-section'>
      <h3>{product.name}</h3>
      <h3>price:{product.price}</h3>
      </div>
      <p className='discreption'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lorem molestie, pretium risus hendrerit, tempus ligula. Nunc posuere quam in faucibus dictum. Suspendisse faucibus tortor sit amet ornare euismod. Suspendisse tincidunt, magna in aliquam ultrices.
      </p>
    </div>
 )
};



export default Product;