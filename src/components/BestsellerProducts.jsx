
import ProductCard from './ProductCard';
import { bestsellerData } from '../data/bestsellerData'; 

const BestsellerProducts = () => {


  return (
    <section className="w-full flex flex-col items-center py-20 px-8 lg:px-4">
      
      <div className="flex flex-col items-center text-center mb-16 gap-2 max-w-100">
        <h4 className="text-secondary-text font-normal text-xl/7.5 tracking-[0.2px]">Featured Products</h4>
        <h3 className="text-primary-text font-bold text-2xl/8 lg:text-2xl uppercase tracking-[0.1px]">Bestseller Products</h3>
        <p className="text-secondary-text font-normal text-sm/5 mt-2 tracking-[0.2px]">Problems trying to resolve the conflict between</p>
      </div>

      <div className="w-full max-w-6xl flex flex-row flex-wrap justify-center lg:justify-between gap-y-16 lg:gap-y-20">
       
        {bestsellerData.map((product) => (
          <ProductCard
            id={product.id} 
            key={product.id}
            images={product.images}
            title={product.title}
            department={product.department}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            colors={product.colors}
          />
        ))}
        
      </div>
    </section>
  );
};

export default BestsellerProducts;