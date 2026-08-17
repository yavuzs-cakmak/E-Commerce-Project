import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { loginUserAction } from '../store/actions/clientActions';

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = (formData) => {
        const credentials = {
            email: formData.email,
            password: formData.password
        };
        
        dispatch(loginUserAction(credentials, history, formData.rememberMe));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 font-montserrat">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-8">
                <h2 className="text-center text-3xl font-bold text-primary-text">Login</h2>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="text-sm font-bold text-secondary-text">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email zorunludur',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Geçersiz email adresi'
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
                            {...register('password', { required: 'Şifre zorunludur' })}
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-third-color focus:border-third-color"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            {...register('rememberMe')}
                            className="h-4 w-4 text-third-color border-gray-300 rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-secondary-text">
                            Remember Me
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-third-color hover:bg-blue-600 text-white font-bold py-3 px-4 rounded flex justify-center items-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? <Loader className="animate-spin h-5 w-5 text-white" /> : 'Log in'}
                    </button>
                    
                    <div className="mt-4 text-center text-sm text-secondary-text">
                        Don't you have an account?{' '}
                        <Link to="/signup" replace className="text-third-color hover:underline font-bold">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;