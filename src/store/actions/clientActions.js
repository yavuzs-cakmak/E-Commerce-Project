import { api } from "../../api/axiosInstance";
import { toast } from 'react-toastify';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({type: SET_USER, payload: user});
export const setRoles = (roles) => ({type: SET_ROLES, payload: roles});
export const setTheme = (theme) => ({type: SET_THEME, payload: theme});
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language});

export const fetchRolesAction = () => async (dispatchEvent, getState) =>{
 const currentRoles = getState().client.roles;
 if(currentRoles.length > 0){
    return;
 }

 try{
    const response = await api.get('/roles');
    dispatchEvent(setRoles(response.data));
 } catch(error){
    console.error('Roles fetch error in thunk:', error);
 }

};

export const loginUserAction = (credentials, history, rememberMe) => async (dispatch) => {
   try {
      const response = await api.post('/login', credentials);
      const userData = response.data;
      dispatch(setUser(userData));
      if(rememberMe && userData.token){
         localStorage.setItem('token', userData.token);
      }
      toast.success('Giriş başarılı! Yönlendiriliyorsunuz...', { autoClose: 2500 });

      if (history.length > 2) {
            history.goBack();
        } else {
            history.push('/');
        }

   } catch (error){
      const errorMsg = error.response?.data?.message || 'Giriş başarısız oldu!';
      toast.error(`Hata: ${errorMsg}`, { autoClose: 3000 });
   }
};

export const verifyUserAction = () => async (dispatch) => {
    const token = localStorage.getItem('token');

    if (!token) return;

    try {
        const response = await api.get('/verify', {
            headers: {
                Authorization: token
            }
        });

        dispatch(setUser(response.data));

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }

    } catch (error) {
        console.warn('Oturum süresi doldu veya geçersiz token.');
        console.error('Oturum süresi doldu veya geçersiz token.',error);
        localStorage.removeItem('token');
        dispatch(setUser({})); 
    }
};



