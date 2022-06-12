import '../mainstyles.css'
import Product from './Product';
import products from '../products-data';

const Products = () => {
 return(
   <section id='products' className='Products'>
     <h2>Our Products</h2>
     <div className='prodcuts-wrapper'>
     {products.map((product , index)=>{
        return <Product product={product} key={index}></Product>
     })}
    
     </div>
    </section>
 )
};



export default Products;