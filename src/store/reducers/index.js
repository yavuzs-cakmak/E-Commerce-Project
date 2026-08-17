import {combineReducers} from 'redux';
import { clientReducer } from './clientReducer';
import { productReducer } from './productReducer';
import { shoppingCardReducer } from './shoppingCardReducer';

export const rootReducer = combineReducers({
 client: clientReducer,
 product: productReducer,
 shoppingCard: shoppingCardReducer
});