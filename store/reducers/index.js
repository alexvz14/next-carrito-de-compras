import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import configReducer from "./configReducer";
import userReducer from './userReducer'

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  config: configReducer,
  user: userReducer
});