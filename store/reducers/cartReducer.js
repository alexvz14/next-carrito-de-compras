import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR 
  } from '../types/index'
  
  //Cada reducer tiene su propio state
  const initialState = {
    token: '700',
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
      default:
        return state;
    }
  }