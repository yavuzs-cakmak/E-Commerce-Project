

const ProductCard = ({ image, title, department, oldPrice, newPrice, colors }) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[23%] flex flex-col items-center">
      
      <div className="w-full mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover object-center"
        />
      </div>
      
      <div className="flex flex-col items-center text-center gap-2.5">
        <h5 className="text-primary-text font-bold text-base tracking-wide">{title}</h5>
        <p className="text-secondary-text font-bold text-sm">{department}</p>
        <div className="flex flex-row items-center gap-2 mt-1">
          <span className="text-muted-color font-bold text-base">{oldPrice}</span>
          <span className="text-money-color font-bold text-base">{newPrice}</span>
        </div>
        
        <div className="flex flex-row gap-1.5 mt-2">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className="w-4 h-4 rounded-full cursor-pointer" 
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;