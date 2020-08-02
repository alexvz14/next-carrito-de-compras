import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    SET_CART_TOKEN
  } from '../types/cartTypes';
  
  //Cada reducer tiene su propio state
  const initialState = {
    token: null,
    items: [],
    total_mxn: 0,
    total_usd: 0,
    error: null,
    loading: false
  }
  
  export default function (state = initialState, action) {
    switch(action.type) {
      case AGREGAR_PRODUCTO:
        return {
          ...state,
          loading: true,
          error: null
        }
      case AGREGAR_PRODUCTO_EXITO:
        return {
          ...state,
          loading: false,
          items: [...state.items, action.payload] 
        }
      case AGREGAR_PRODUCTO_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      case SET_CART_TOKEN:
          return {
            ...state,
            token: action.payload
          }
      default:
        return state;
    }
  }