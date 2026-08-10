import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () =>{
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Gönderilen Form Verileri:", data);
    toast.success("Mesajınız başarıyla alındı!", {
      position: "bottom-right", 
      autoClose: 3000,          
      theme: "colored"   
    });
    reset(); 
    setShowForm(false);
  };

 const locations = [
    {
      city:"Paris",
      address: '1901 Thorn ridge Cir.',
      postcode: '75000 Paris',
      phone: 'Phone ; +451 215 215',
      fax: 'Fax : +451 215 215',
    },
    {
      city: 'New York',
      address: '2715 Ash Dr. San Jose,',
      postcode: '75000 Paris',
      phone: 'Phone ; +451 215 215',
      fax: 'Fax : +451 215 215',
    },
    {
      city: 'Berlin',
      address: '4140 Parker Rd.',
      postcode: '75000 Paris',
      phone: 'Phone ; +451 215 215',
      fax: 'Fax : +451 215 215',
    },
    {
      city: 'London',
      address: '3517 W. Gray St. Utica,',
      postcode: '75000 Paris',
      phone: 'Phone ; +451 215 215',
      fax: 'Fax : +451 215 215',
    },  
 ];

 return (
 <div 
 className="w-full min-h-screen bg-cover bg-no-repeat font-montserrat text-white bg-position-[48%_35%] sm:bg-position[80%_15%] lg:bg-position-[100%_46%]" 
 style={{
    backgroundImage: `linear-gradient(to right, #002b36 0%, rgba(0, 95, 115, 0.8) 25%, transparent 90%), url('/carousel-item1hd.png')`
 }}
 > 
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-44 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
     <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider">
            CONTACT US
          </h1>
          <p className="text-sm lg:text-base font-normal max-w-sm text-gray-100 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
              className="bg-third-color hover:bg-blue-600 text-white font-bold text-sm px-8 py-4 rounded-md transition-colors shadow-lg cursor-pointer mt-2"
            >
              CONTACT US
            </button>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm flex flex-col gap-4 mt-2 animate-fade-in">
              
              <input 
                {...register("fullName", { required: true })}
                type="text" 
                placeholder="Adınız ve Soyadınız" 
                className="w-full px-4 py-3 rounded-md text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-[#23a6f0] border border-white"
              />

              <input 
                {...register("email", { required: true })}
                type="email" 
                placeholder="example@gmail.com" 
                className="w-full px-4 py-3 rounded-md text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-[#23a6f0] border border-white"
              />

              <input 
                {...register("phone")}
                type="tel" 
                placeholder="Telefon Numaranız" 
                className="w-full px-4 py-3 rounded-md text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-[#23a6f0] border border-white"
              />

              <textarea 
                {...register("note", { required: true })}
                placeholder="İletmek istediğiniz notunuz..." 
                rows="4"
                className="w-full px-4 py-3 rounded-md text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-[#23a6f0] resize-none border border-white"
              ></textarea>

              <div className="flex gap-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-third-color hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors shadow-md border"
                >
                  GÖNDER
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors shadow-md"
                >
                  İPTAL
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="w-full lg:w-6/12 flex flex-wrap gap-y-10 -mx-4 text-center lg:text-left">
  
  {locations.map((loc, index) => (
    <div key={index} 
     className={`w-full sm:w-1/2 px-4 flex flex-col gap-5 items-center lg:items-start ${
                index % 2 !== 0 ? 'lg:pl-4' : 'lg:pr-2'
              }`}
            >
      <h3 className="text-2xl font-bold text-white">{loc.city}</h3>
      <p className="text-xl font-bold text-white mt-1">{loc.address}</p>
      
      <div className="w-12 h-0.5 bg-third-color my-1" />
      
      <p className="text-base font-bold text-gray-200">{loc.postcode}</p>
      <p className="text-base font-bold text-gray-200">{loc.phone}</p>
      <p className="text-base font-bold text-gray-200">{loc.fax}</p>
    </div>
  ))}

</div>
    </div>
    <ToastContainer />
  </div>
 );
};

export default ContactPage;