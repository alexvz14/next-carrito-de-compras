import { combineReducers } from 'redux';
import productosReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productos: productosReducer,
  cart: cartReducer,
});