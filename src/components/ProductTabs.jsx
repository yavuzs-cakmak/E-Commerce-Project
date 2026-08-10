import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-6 lg:gap-12 border-b border-gray-200 py-6">
        <button onClick={() => setActiveTab('description')} className={`text-sm font-bold cursor-pointer ${activeTab === 'description' ? 'text-primary-text' : 'text-secondary-text'} transition-colors`}>Description</button>
        <button onClick={() => setActiveTab('info')} className={`text-sm font-bold cursor-pointer ${activeTab === 'info' ? 'text-primary-text' : 'text-secondary-text'} transition-colors`}>Additional Information</button>
        <button onClick={() => setActiveTab('reviews')} className={`text-sm font-bold cursor-pointer ${activeTab === 'reviews' ? 'text-primary-text' : 'text-secondary-text'} transition-colors`}>Reviews ({product.reviewCount})</button>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-10 py-8 lg:py-12">
        {activeTab === 'description' && (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div className="w-full lg:w-1/3 aspect-4/3 rounded overflow-hidden shadow-sm">
               <img src={product.detailsImage} alt="Detail" className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-primary-text">{product.detailsTitle}</h3>
              <div className="flex flex-col gap-4 text-secondary-text text-sm leading-5">
                {product.longDescription.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                 <h3 className="text-xl font-bold text-primary-text">{product.detailsTitle}</h3>
                 <div className="flex flex-col gap-3">
                   {product.features.map((feature, i) => (
                     <div key={i} className="flex items-center gap-2 text-secondary-text text-sm">
                       <ChevronRight size={16} className="text-secondary-text" />
                       <span>{feature}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'info' && <div className="text-secondary-text">Additional info content goes here...</div>}
        {activeTab === 'reviews' && <div className="text-secondary-text">Reviews content goes here...</div>}
      </div>
    </section>
  );
};

export default ProductTabs;