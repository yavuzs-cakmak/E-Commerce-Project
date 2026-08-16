import {Link} from 'react-router-dom';
import TeamPage from './TeamPage'; 
import { FaPlay,} from 'react-icons/fa';
import { brandsData } from '../data/shopData';

const AboutUs = () => {

   const handleScrollToTop = () => {
    window.scrollTo(0, 0);
};

  return (
    <div className="w-full font-montserrat text-primary-text overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-0 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h4 className="text-base/6 font-bold text-primary-text uppercase tracking-[0.1px]">About Company</h4>
          <h1 className="text-4xl lg:text-6xl/20 font-bold">ABOUT US</h1>
          <p className="text-secondary-text text-sm md:text-base max-w-sm">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <Link 
          to="/contact"
          className="bg-third-color hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition-colors cursor-pointer">
            Get Quote Now
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center items-center min-h-125 lg:min-h-150">
  
  <img 
    src="/BuyukPembeEllipse.png" 
    alt="Main Pink Ellipse" 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-112.5 h-auto pointer-events-none z-0"
  />

  <img 
    src="/OrtaPembeEllipse.png" 
    alt="Top Left Pink Circle" 
    className="absolute top-[14%] left-[0%] w-12 lg:w-19 h-auto pointer-events-none z-0"
  />

  <img 
    src="/KucukMorEllipse.png" 
    alt="Bottom Left Purple Dot" 
    className="absolute bottom-[14%] left-[3%] w-2.5 lg:w-3.5 h-auto pointer-events-none z-0"
  />

  <img 
    src="/KucukMorEllipse.png" 
    alt="Top Right Purple Dot" 
    className="absolute top-[32%] right-[0%] w-2.5 lg:w-3.5 h-auto pointer-events-none z-0"
  />

  <img 
    src="/KucukPembeEllipse.png" 
    alt="Bottom Right Pink Dot" 
    className="absolute bottom-[44%] right-[0%] w-4.5 lg:w-7.5 h-auto pointer-events-none z-0"
  />

  <img 
    src="/KrediKartliKadin.png" 
    alt="Shopping Woman" 
    className="relative z-10 w-[110%] lg:w-[165%] max-w-none h-auto object-contain pointer-events-none transform translate-x-4 lg:translate-x-8 translate-y-4 lg:translate-y-10"
  />

</div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <p className="text-danger-color text-sm/5 font-semibold">Problems trying</p>
          <h2 className="text-2xl/8 font-bold max-w-sm text-primary-text">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex items-center mt-10">
          <p className="text-secondary-text text-sm text-center md:text-left">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">15K</h1>
          <p className="text-gray-500 font-semibold">Happy Customers</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">150K</h1>
          <p className="text-gray-500 font-semibold">Monthly Visitors</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">15</h1>
          <p className="text-gray-500 font-semibold">Countries Worldwide</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">100+</h1>
          <p className="text-gray-500 font-semibold">Top Partners</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div 
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-cover bg-center flex justify-center items-center shadow-lg"
          style={{ backgroundImage: `url('/manzara.jpg')` }}
        >
          <button className="w-20 h-20 bg-third-color rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform shadow-xl">
            <FaPlay size={24} className="ml-2" />
          </button>
        </div>
      </section>
      <TeamPage />

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Big Companies Are Here</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {brandsData.map((brand, index) => (
              <div key={index} className="flex justify-center items-center w-24 md:w-auto">
                <img 
                  src={brand} 
                  alt={`Sponsor Brand ${index + 1}`} 
                  className="w-full h-auto max-w-25 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 bg-[#2A7CC7] text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-16 lg:p-32 gap-6">
          <h4 className="font-bold tracking-[0.1px] text-base/6">WORK WITH US</h4>
          <h2 className="text-4xl/12 lg:text-5xl/12 font-bold tracking-[0.2px]">Now Let's grow Yours</h2>
          <p className="text-sm/5 max-w-base font-normal text-white tracking-[0.2px]">
            The gradual accumulation of information about atomic and <br/>small-scale behavior during the first quarter of the 20th
          </p>
          <Link 
          onClick={handleScrollToTop}
          to="/contact"
          className="border border-white hover:bg-white hover:text-[#2A7CC7] transition-colors font-bold py-3 px-8 rounded mt-4 cursor-pointer">
            Work With Us
          </Link>
        </div>
        <div className="w-full md:w-1/3 min-h-100 md:min-h-full">
          <img 
            src="/pembeBeyazKadinYakinCekim.jpg" 
            alt="Grow with us" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    </div>
  );
};

export default AboutUs;