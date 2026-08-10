import {Link} from 'react-router-dom';

const ProductCard = ({ id, images, title, department, oldPrice, newPrice, colors, viewMode = 'grid' }) => {
  const coverPhoto = images && images.length > 0 ? images[0] : "";
  
  if (viewMode === 'list') {
    return (
      <Link 
      to={`/product/${id}`}
      className="flex flex-col lg:flex-row w-full bg-white group cursor-pointer border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="w-full lg:w-64 aspect-4/5 lg:aspect-3/4 bg-gray-50 shrink-0">
          <img src={coverPhoto} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex flex-col justify-center text-left p-6 gap-3 w-full">
          <h5 className="text-primary-text font-bold text-xl tracking-wide">{title}</h5>
          <p className="text-secondary-text font-bold text-sm">{department}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-muted-color font-bold text-lg line-through">{oldPrice}</span>
            <span className="text-money-color font-bold text-2xl">{newPrice}</span>
          </div>
          {colors && (
            <div className="flex flex-row gap-1.5 mt-3">
              {colors.map((color, index) => (
                <div key={index} className="w-5 h-5 rounded-full cursor-pointer border border-gray-200" style={{ backgroundColor: color }} />
              ))}
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link 
    to={`/product/${id}`}
    className="w-full max-w-65 mx-auto flex flex-col items-center group cursor-pointer">
      
      <div className="w-full aspect-4/5 overflow-hidden mb-6 bg-gray-50">
        <img 
          src={coverPhoto} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex flex-col items-center text-center gap-2.5">
        <h5 className="text-primary-text font-bold text-base tracking-wide">{title}</h5>
        <p className="text-secondary-text font-bold text-sm">{department}</p>
        
        <div className="flex flex-row items-center gap-2 mt-1">
          <span className="text-muted-color font-bold text-base line-through">{oldPrice}</span>
          <span className="text-money-color font-bold text-base">{newPrice}</span>
        </div>
        
        {colors && (
          <div className="flex flex-row gap-1.5 mt-2">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className="w-4 h-4 rounded-full cursor-pointer border border-gray-200" 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
      
    </Link>
  );
};

export default ProductCard;