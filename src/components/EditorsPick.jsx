
const EditorsPick = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center py-20 px-8 lg:px-4">
      <div className="flex flex-col items-center text-center mb-12 gap-2 max-w-100">
        <h3 className="text-primary-text font-bold text-xl/8 lg:text-2xl/8 uppercase tracking-[0.1px]">Editor's Pick</h3>
        <p className="text-secondary-text font-normal text-sm/5 mt-2 tracking-[0.2px]">Problems trying to resolve the conflict between</p>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-7">
        
        <div className="w-full lg:w-1/2 relative flex h-125 overflow-hidden">
          <img src="/CeketErkekhd.png" alt="Men" className="w-full h-full object-cover scale-100 object-[25%_40%]" />
          <button className="absolute bottom-6 left-6 bg-white px-16 py-3 text-primary-text font-bold text-sm tracking-wider hover:bg-gray-100 transition-colors cursor-pointer">
            MEN
          </button>
        </div>

        <div className="w-full lg:w-1/4 relative flex h-125">
          <img src="/kazakGiyenKadinhd.png" alt="Women" className="w-full h-full object-cover object-center" />
          <button className="absolute bottom-6 left-6 bg-white px-12 py-3 text-primary-text font-bold text-sm tracking-wider hover:bg-gray-100 transition-colors cursor-pointer">
            WOMEN
          </button>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-4 lg:gap-7">
          <div className="w-full relative flex h-60.5">
            <img src="/miniKadinhd.png" alt="Accessories" className="w-full h-full object-cover object-[25%_32%]" />
            <button className="absolute bottom-6 left-6 bg-white px-8 py-3 text-primary-text font-bold text-sm tracking-wider hover:bg-gray-100 transition-colors cursor-pointer">
              ACCESSORIES
            </button>
          </div>
          <div className="w-full relative flex h-60.5">
            <img src="/miniErkekhd.png" alt="Kids" className="w-full h-full object-cover object-[25%_39%]" />
            <button className="absolute bottom-6 left-6 bg-white px-10 py-3 text-primary-text font-bold text-sm tracking-wider hover:bg-gray-100 transition-colors cursor-pointer">
              KIDS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorsPick;