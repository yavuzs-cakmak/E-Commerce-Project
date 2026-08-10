import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard'; 
import { allProductsData } from '../data/allProductsData'; 
import { categoriesData, brandsData } from '../data/shopData';

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('grid');
    const [selectedSort, setSelectedSort] = useState('popularity');
    const [appliedSort, setAppliedSort] = useState('popularity');

    const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };
   
   const parsePrice = (priceStr) => {
    if(!priceStr) return 0;
    return parseFloat(priceStr.replace('$',''));
   }; 

const getSortedProducts = () => {
  const productsCopy = [...allProductsData];

  if (appliedSort === 'lowToHigh') {
    return productsCopy.sort((a, b) => parsePrice(a.newPrice) - parsePrice(b.newPrice));
  } else if (appliedSort === 'highToLow') {
    return productsCopy.sort((a, b) => parsePrice(b.newPrice) - parsePrice(a.newPrice));
  }

  return productsCopy;
};

const displayedProducts = getSortedProducts();

const handleFilter = () => {
  setAppliedSort(selectedSort);
};

return (
<div className="w-full flex flex-col font-montserrat">
  <section className="w-full bg-gray-50 py-6">
   <div className="max-w-6xl mx-auto px-10 flex flex-col lg:flex-row justify-between items-center gap-6">
    <h3 className="text-2xl/8 font-bold text-primary-text tracking-[0.1px]">Shop </h3>
    <div className="flex items-center gap-3.5 text-sm/6 font-bold">
        <Link to="/" className="text-primary-text">Home</Link>
        <ChevronRight size={16} className=" text-muted-color"/>
        <span className="text-muted-color">Shop</span>
    </div>
   </div>
  </section>
  <section className="w-full bg-gray-50 pb-12">
    <div className="max-w-6xl mx-auto px-4 md:px-10">
     <div className="flex flex-col lg:flex-row gap-4">
       {categoriesData.map((cat)=>(
        <div key={cat.id} className="relative w-full aspect-4/5 overflow-hidden group cursor-pointer"> 
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors z-10"/>
        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white gap-2.5">
            <h5 className="font-bold text-base/6 tracking-[0.1px]">{cat.title}</h5>
            <p className="font-normal text-sm/5 tracking-[0.1px]">{cat.items}</p>
        </div>
        </div>
       ))}
     </div>
    </div>
  </section>
  <section className="w-full bg-white py-6">
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-secondary-text text-sm font-bold text-center md:text-left">
            Showing all {displayedProducts.length} results
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-secondary-text text-sm font-bold">Views:</span>
            <button 
            onClick={() => setViewMode('grid')}
            className={`p-3 border rounded transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'border-third-color text-third-color bg-blue-50'
                  : 'border-muted-color text-primary-text hover:bg-gray-100'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button 
            onClick={() => setViewMode('list')}
              className={`p-3 border rounded transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'border-third-color text-third-color bg-blue-50'
                  : 'border-muted-color text-muted-color hover:bg-gray-100'
              }`}
            >
              <List size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <select 
            value={selectedSort}
            onChange={(e => setSelectedSort(e.target.value))}
            className="bg-gray-50 border border-muted-color text-secondary-text text-sm rounded px-4 py-3 outline-none cursor-pointer">
              <option value="popularity">Popularity</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
            <button 
            onClick={handleFilter}
            className="bg-third-color hover:bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded transition-colors">
              Filter
            </button>
          </div>

        </div>
      </section>
      <section className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div 
          className={
             viewMode === 'grid'
            ? 'flex flex-wrap -mx-4 gap-y-16'
            : 'flex flex-col gap-8 items-center'
            } 
          >
            {displayedProducts.map((product) => (
              <div 
              key={product.id} 
            className={
            viewMode === 'grid' 
              ? 'w-full lg:w-1/4 px-4 flex justify-center'
              : 'w-full flex justify-center'
          }
              >
                <ProductCard
                  id={product.id}
                  key={product.id} 
                  viewMode={viewMode}
                  images={product.images}
                  title={product.title}
                  department={product.department}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  colors={product.colors}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white pb-20 flex justify-center">
        <div className="flex items-center border-[1.5px] border-muted-color rounded-md font-bold text-sm shadow-sm">
          <button
          onClick={handleFirst} 
          className="px-6 py-6 bg-gray-100 text-muted-color hover:bg-gray-200 transition-colors rounded-l cursor-pointer">
            First
            </button>
          <button 
          
          className={`px-5 py-6 border-l border-muted-color transition-colors cursor-pointer ${
              currentPage === 1 
                ? 'bg-third-color text-white' 
                : 'bg-white text-third-color hover:bg-gray-50'
            }`}>
            1
            </button>
          <button 
          onClick={() => setCurrentPage(2)}
            className={`px-5 py-6 border-l border-muted-color transition-colors cursor-pointer ${
              currentPage === 2 
                ? 'bg-third-color text-white' 
                : 'bg-white text-third-color hover:bg-gray-50'
            }`}>
            2
            </button>
          <button 
          onClick={() => setCurrentPage(3)}
            className={`px-5 py-6 border-l border-muted-color transition-colors cursor-pointer ${
              currentPage === 3 
                ? 'bg-third-color text-white' 
                : 'bg-white text-third-color hover:bg-gray-50'
            }`}>
            3
            </button>
          <button
          onClick={handleNext}
          className="px-6 py-6 bg-white text-third-color border-l border-muted-color hover:bg-gray-50 rounded-r cursor-pointer">
            Next
            </button>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl  mx-auto px-10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-16 md:gap-4">
          {brandsData.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Brand ${index + 1}`} 
              className="w-24 text-secondary-text lg::w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0" 
            />
          ))}
        </div>
      </section>
</div>
);
};

export default ShopPage;