import { api } from "../../api/axiosInstance";

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