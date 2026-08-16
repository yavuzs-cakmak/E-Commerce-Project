import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../api/axiosInstance';
import { Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRolesAction } from '../store/actions/clientActions';

const SignUpPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const roles = useSelector((state)=> state.client.roles);
    const storeRoleId = roles.find((r) => r.code === 'store' || r.name === 'Mağaza')?.id;

    const{
        register,
        handleSubmit,
        setValue,
        control,
        formState:{errors, isSubmitting}
    } = useForm();

    const currentPassword = useWatch({ control, name: 'password' });
    const selectedRoleId = useWatch({ control, name: 'role_id' });

    useEffect(() => {
        dispatch(fetchRolesAction());
    }, [dispatch]);

    useEffect (()=>{
       if (roles && roles.length > 0 && !selectedRoleId) {
            const customerRole = roles.find(r => r.code === 'customer' || r.name === 'Müşteri');
            if (customerRole && !selectedRoleId) {
                setValue('role_id', customerRole.id);
            }
        }
    },[roles, setValue, selectedRoleId]);

    const onSubmit = async (formData) => {
        try{
            const payload ={
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role_id: Number(formData.role_id),
            };
            if(Number(formData.role_id) === storeRoleId){
                payload.store = {
                  name: formData.storeName,
                  phone: formData.storePhone,
                  tax_no: formData.storeTax,
                  bank_account: formData.storeBank,
                };
            }
            await api.post('/signup', payload);
            toast.success('You need to click link in email to activate your account!');
            
            history.push('/'); 

        } catch(error){
            const errorMsg = error.response?.data?.message || 'Kayıt işlemi başarısız oldu!';
            toast.error(`Hata: ${errorMsg}`);
        }
    };

  const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-primary-text">Sign Up</h2>
        </div>
    
     <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}> 
        <div>
            <label className="text-sm font-bold text-secondary-text">Name</label>
            <input 
            type="text"
            {...register('name',{
                required:"Name is required",
                minLength:{value:3, message:"Name must be at least 3 characters"}
            })}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
            <label className="text-sm font-bold text-secondary-text">Email</label>
            <input 
              type="email"
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="text-sm font-bold text-secondary-text">Password</label>
            <input 
              type="password"
              {...register('password', { 
                required: "Password is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                  message: "Password must be 8+ chars, with upper, lower, number, and special char"
                }
              })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-sm font-bold text-secondary-text">Confirm Password</label>
            <input 
              type="password"
              {...register('confirmPassword', { 
                required: "Please confirm your password",
                validate: (val) => val === currentPassword || "Passwords do not match!"
              })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div>
            <label className="text-sm font-bold text-secondary-text">Role</label>
            <select
            {...register('role_id', { required: "Role is required" })}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
            >
                {roles.map((role) =>(
                    <option key={role.id} value={role.id}>{role.name}</option>
                ))}
            </select>
          </div>
          {Number(selectedRoleId) === storeRoleId && (
            <div className="space-y-4 p-4 border border-third-color rounded-md bg-blue-50">
              <h3 className="font-bold text-third-color">Store Information</h3>
                <div>
                <input 
                  type="text" placeholder="Store Name"
                  {...register('storeName', { 
                    required: "Store Name is required", 
                    minLength: { value: 3, message: "Min 3 characters" } 
                  })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                {errors.storeName && <p className="text-red-500 text-xs mt-1">{errors.storeName.message}</p>}
              </div>

              <div>
                <input 
                  type="text" placeholder="Store Phone (e.g. +905554443322)"
                  {...register('storePhone', { 
                    required: "Phone is required",
                    pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Valid Türkiye phone number required" }
                  })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                {errors.storePhone && <p className="text-red-500 text-xs mt-1">{errors.storePhone.message}</p>}
              </div>
              <div>
                <input 
                  type="text" placeholder="Tax ID (TXXXXVXXXXXX)"
                  {...register('storeTax', { 
                    required: "Tax ID is required",
                    pattern: { value: /^T\d{4}V\d{6}$/, message: "Must match TXXXXVXXXXXX" }
                  })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                {errors.storeTax && <p className="text-red-500 text-xs mt-1">{errors.storeTax.message}</p>}
              </div>

              <div>
                <input 
                  type="text" placeholder="Bank Account (IBAN)"
                  {...register('storeBank', { 
                    required: "IBAN is required",
                    pattern: { value: /^TR\d{24}$/, message: "Valid Turkish IBAN required (TR + 24 digits)" }
                  })}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                {errors.storeBank && <p className="text-red-500 text-xs mt-1">{errors.storeBank.message}</p>}
              </div>
              </div>
          )}
          <button
          onClick={handleScrollToTop}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-third-color hover:bg-blue-600 text-white font-bold py-3 px-4 rounded flex justify-center items-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
           <Loader  className="animate-spin h-5 w-5 text-white"/> )
           : (
            "Sign Up"
           )}
          </button>
          
          <div className="mt-4 text-center text-sm text-secondary-text">
            Already have an account?{' '}
            <Link to="/login" replace className="text-third-color hover:underline font-bold">
              Log In
            </Link>
          </div>
     </form>
     </div>
    </div>
    );
};
export default SignUpPage;