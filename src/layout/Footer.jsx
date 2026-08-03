import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Footer = () => {
 const {
  register,
  handleSubmit,
  formState: {errors},
  reset
 } = useForm();
 const onSubmit = (data) => {
    console.log("Gönderilen Email:", data.email);
    toast.success('Başarıyla abone oldunuz!', {
     position: "bottom-right",
     autoClose:3000,
     theme:"colored"
    });
  reset();
 };
 
 return (
 <footer className="w-full bg-white flex flex-col">
    <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-10 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <h2 className="text-2xl font-bold text-primary-text">Bandage</h2>
          <div className="flex gap-5 text-third-color">
            <a href="#" className="hover:text-blue-700 transition-colors"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaTwitter size={24} /></a>
          </div>
        </div>
    </section>
 <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-10 py-16 flex flex-col lg:flex-row flex-wrap justify-between gap-8">
          
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-text font-bold text-base tracking-wide">Company Info</h5>
            <div className="flex flex-col gap-3 text-sm text-secondary-text font-semibold">
              <a href="#" className="hover:text-primary-text">About Us</a>
              <a href="#" className="hover:text-primary-text">Carrier</a>
              <a href="#" className="hover:text-primary-text">We are hiring</a>
              <a href="#" className="hover:text-primary-text">Blog</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-text font-bold text-base tracking-wide">Legal</h5>
            <div className="flex flex-col gap-3 text-sm text-secondary-text font-semibold">
              <a href="#" className="hover:text-primary-text">About Us</a>
              <a href="#" className="hover:text-primary-text">Carrier</a>
              <a href="#" className="hover:text-primary-text">We are hiring</a>
              <a href="#" className="hover:text-primary-text">Blog</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-primary-text font-bold text-base tracking-wide">Features</h5>
            <div className="flex flex-col gap-3 text-sm text-secondary-text font-semibold">
              <a href="#" className="hover:text-primary-text">Business Marketing</a>
              <a href="#" className="hover:text-primary-text">User Analytic</a>
              <a href="#" className="hover:text-primary-text">Live Chat</a>
              <a href="#" className="hover:text-primary-text">Unlimited Support</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-primary-text font-bold text-base tracking-wide">Resources</h5>
            <div className="flex flex-col gap-3 text-sm text-secondary-text font-semibold">
              <a href="#" className="hover:text-primary-text">IOS & Android</a>
              <a href="#" className="hover:text-primary-text">Watch a Demo</a>
              <a href="#" className="hover:text-primary-text">Customers</a>
              <a href="#" className="hover:text-primary-text">API</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <h5 className="text-primary-text font-bold text-base tracking-wide">Get In Touch</h5>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="flex items-stretch w-full">
                <input 
                  type="text" 
                  placeholder="Your Email" 
                  className="w-full lg:w-50 bg-gray-50 border border-gray-300 text-sm text-secondary-text px-4 py-3 outline-none rounded-l transition-colors focus:border-third-color"
                  {...register("email", { 
                    required: "E-mail alanı boş bırakılamaz",
                    pattern: {
                      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                      message: "e-mailinizi info@example.com formatında yazın lütfen"
                    }
                  })}
                />
                <button 
                  type="submit" 
                  className="bg-third-color text-white hover:bg-blue-600 text-sm px-6 py-3 rounded-r transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              
              {errors.email ? (
                <p className="text-red-500 text-xs font-semibold">{errors.email.message}</p>
              ) : (
                <p className="text-secondary-text text-xs">Lore imp sum dolor Amit</p>
              )}
            </form>
            
          </div>

        </div>
      </section>

      <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-10 py-6 flex justify-center lg:justify-start">
          <p className="text-secondary-text font-bold text-sm text-center lg:text-left">
            Made With Love By <br className="block md:hidden" /> Finland All Right Reserved
          </p>
        </div>
      </section>
 </footer>
 );
};

export default Footer;