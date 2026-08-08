import { useState } from 'react';
import { ChevronRight, ChevronLeft, Star, Heart, ShoppingCart, Eye, X } from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); 
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  const currentIndex = product.images.indexOf(activeImage);

  const handlePrev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? product.images.length - 1 : currentIndex - 1;
    setActiveImage(product.images[newIndex]);
  };

  const handleNext = () => {
    const isLast = currentIndex === product.images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setActiveImage(product.images[newIndex]);
  };

  const handleImageClickOrMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomOrigin({ x: xPercent, y: yPercent });
  };

  const handleImageClick = (e) => {
    handleImageClickOrMove(e);
    setIsZoomed(!isZoomed); 
  };

  return (
    <section className="w-full bg-gray-50 pb-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-4/5 lg:aspect-4/3 overflow-hidden rounded">
            <img src={activeImage} alt={product.title} className="w-full h-full object-contain" />
            <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform cursor-pointer drop-shadow-sm">
              <ChevronLeft size={40} />
            </button>
            <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform cursor-pointer drop-shadow-sm">
              <ChevronRight size={40} />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`w-24 aspect-4/5 cursor-pointer rounded overflow-hidden border-2 transition-all shrink-0 ${activeImage === img ? 'border-third-color opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-start pt-4 lg:pt-8 gap-4 lg:gap-6 text-left">
          <h2 className="text-xl lg:text-2xl font-normal text-primary-text">{product.title}</h2>
          
          <div className="flex items-center gap-2.5">
            <div className="flex text-yellow-400">
              {[...Array(product.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              {[...Array(5 - product.rating)].map((_, i) => <Star key={i + product.rating} size={18} className="text-yellow-400" />)}
            </div>
            <span className="text-secondary-text font-bold text-sm">{product.reviewCount} Reviews</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-primary-text font-bold text-2xl">{product.newPrice}</span>
            <div className="flex items-center gap-2">
              <span className="text-secondary-text font-bold text-sm">Availability  :</span>
              <span className="text-third-color font-bold text-sm">{product.availability}</span>
            </div>
          </div>

          <p className="text-secondary-text font-normal text-sm leading-6 border-b border-gray-200 pb-6">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-2.5 pt-2">
            {product.colors.map((color, idx) => (
              <div key={idx} className={`w-7 h-7 rounded-full cursor-pointer`} style={{ backgroundColor: color }}></div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 pt-8">
            <button className="bg-third-color hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors cursor-pointer">
              Select Options
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary-text hover:bg-gray-50 transition-colors cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary-text hover:bg-gray-50 transition-colors cursor-pointer">
              <ShoppingCart size={20} />
            </button>
            <button 
            onClick={() => setIsLightboxOpen(true)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary-text hover:bg-gray-50 transition-colors cursor-pointer">
              <Eye size={20} />
            </button>
          </div>
        </div>

      </div>
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          
          <button 
            onClick={() => {
              setIsLightboxOpen(false);
              setIsZoomed(false);
              setZoomOrigin({ x: 50, y: 50 }); 
            }}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
          >
            <X size={36} />
          </button>

          <button 
            onClick={handlePrev}
            className="absolute left-6 text-white hover:scale-125 transition-transform cursor-pointer z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-lg flex justify-center items-center">
            <img 
              src={activeImage} 
              alt={product.title}
              onClick={handleImageClick}
              onMouseMove={isZoomed ? handleImageClickOrMove : undefined} 
              style={{
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` 
              }}
              className={`max-h-[85vh] object-contain transition-transform duration-200 ${
                isZoomed 
                  ? 'scale-250 cursor-zoom-out'
                  : 'scale-100 cursor-zoom-in'
              }`}
            />
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-6 text-white hover:scale-125 transition-transform cursor-pointer z-10"
          >
            <ChevronRight size={48} />
          </button>

        </div>
      )}
    </section>
  );
};

export default ProductInfo;