import { neuralPromoData } from "../data/neutralPromoData"; 
import { Link } from 'react-router-dom';

const PromoSection = () => {
  const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};
  return (
    <section className="w-full py-0 px-4 md:px-10 lg:px-20 bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        

        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={neuralPromoData.image} 
            alt={neuralPromoData.title} 
            className="w-full max-w-175 h-90 lg:h-170 object-cover object-top translate-y-[-12%] translate-x-[-6%]"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:pl-10">
          
          <h5 className="text-gray-400 font-bold text-sm lg:text-base tracking-wide uppercase">
            {neuralPromoData.subtitle}
          </h5>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-text leading-tight max-w-md">
            {neuralPromoData.title}
          </h2>
          
          <p className="text-secondary-text text-lg lg:text-xl max-w-sm">
            {neuralPromoData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <Link 
            onClick={handleScrollToTop}
            to="/shop">
            <button className="w-full sm:w-auto bg-success-color hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-colors cursor-pointer">
              {neuralPromoData.buyButtonText}
            </button>
            </Link>
            <button className="w-full sm:w-auto border-2 border-success-color text-success-color hover:bg-success-color hover:text-white font-bold py-3 px-8 rounded transition-colors cursor-pointer">
              {neuralPromoData.readButtonText}
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;