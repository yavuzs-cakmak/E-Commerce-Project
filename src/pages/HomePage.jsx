import HeroSlider from "../components/HeroSlider";
import EditorsPick from '../components/EditorsPick';
import BestsellerProducts from "../components/BestsellerProducts";
import Slider from "../components/Slider";
import PromoSection from "../components/PromoSection";
import FeaturedPosts from "../components/FeaturedPosts";
const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center bg-blue-50">
        
        <HeroSlider />
      </section>
      <section className="flex flex-col items-center justify-center p-6 lg:p-20 bg-gray-50">
        <EditorsPick />
         <BestsellerProducts />
         </section>
         <section className="w-full">
         <Slider />
         </section>
         <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-30 lg:py-0 bg-gray-50">
         <PromoSection />
         <FeaturedPosts />
          </section>
    </div>
  );
};

export default HomePage;