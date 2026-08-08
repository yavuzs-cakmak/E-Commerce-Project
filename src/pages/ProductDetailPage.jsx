import { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { allProductsData } from '../data/allProductsData';
import { productDetailData } from '../data/productDetailData';
import ProductInfo from '../components/ProductInfo';
import ProductTabs from '../components/ProductTabs';
import BestsellerProducts from '../components/BestsellerProducts';
import { brandsData } from '../data/shopData';

const ProductDetailPage = () => {
     const {productId} = useParams();

     useEffect(() => {
      window.scrollTo(0, 0);
    }, [productId]);

    const matchedProduct = allProductsData.find(
      (item) => String(item.id) === String(productId)
    );

    const currentProduct = matchedProduct 
      ? {
          ...productDetailData, 
          ...matchedProduct, 
        }
      : productDetailData;

    return (
  <div className="w-full flex flex-col font-montserrat">
     <section className="w-full bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4 lg:px-10 flex items-center gap-3.5 text-sm/6 font-bold tracking-[0.2px]">
        <Link to="/" className="text-primary-text">Home</Link>
        <ChevronRight size={16} className="text-muted-color"/>
        <span className="text-muted-color">Shop</span>
        </div>
     </section>
     <ProductInfo key={currentProduct.id} product={currentProduct} />

      <ProductTabs product={currentProduct} />

      <div className="bg-gray-50">
        <BestsellerProducts />
      </div>
      <section className="w-full bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 lg:px-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-16 lg:gap-4">
          {brandsData.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Brand ${index + 1}`} 
              className="w-24 opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0" 
            />
          ))}
        </div>
      </section>
  </div>
    );
};

export default ProductDetailPage;