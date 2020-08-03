import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    SET_CART_TOKEN,
    OBTENER_DETALLES_CARRITO,
    OBTENER_DETALLES_CARRITO_EXITO,
    OBTENER_DETALLES_CARRITO_ERROR,
    CHEKOUT,
    CHEKOUT_EXITO,
    CHEKOUT_ERROR,
    CHEKOUT_CONFIRMACION,
    CHEKOUT_CONFIRMACION_EXITO,
    DELETE_ITEMCARRITO,
    DELETE_ITEMCARRITO_EXITO,
    DELETE_ITEMCARRITO_ERROR
  } from '../types/cartTypes';
  
  //Cada reducer tiene su propio state
  const initialState = {
    token: null,
    items: [],
    total_mxn: 0,
    total_usd: 0,
    confirmation: null,
    error: null,
    loading: false
  }
  
  export default function (state = initialState, action) {
    switch(action.type) {
      case AGREGAR_PRODUCTO,
      OBTENER_DETALLES_CARRITO,
      CHEKOUT,
      CHEKOUT_CONFIRMACION,
      DELETE_ITEMCARRITO:
        return {
          ...state,
          loading: true,
          error: null
        }
      case AGREGAR_PRODUCTO_EXITO:
        return {
          ...state,
          loading: false,
        }
      case AGREGAR_PRODUCTO_ERROR,
      OBTENER_DETALLES_CARRITO_ERROR,
      DELETE_ITEMCARRITO_ERROR:
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
      case OBTENER_DETALLES_CARRITO_EXITO:
        return {
          ...state,
          loading: false,
          items: action.payload.items,
          total_mxn: action.payload.total_mxn,
          total_usd: action.payload.total_usd,
        }
      case CHEKOUT_EXITO: 
        return {
          ...state,
          loading: false,
          items: [],
          total_mxn: 0,
          total_usd: 0,
          token: action.payload.token
        }
      case CHEKOUT_CONFIRMACION_EXITO:
        return {
          ...state,
          loading: false,
          confirmation: action.payload
        }
      case DELETE_ITEMCARRITO_EXITO: 
        return {
          ...state,
          loading: false
        }
      default:
        return state;
    }
  }