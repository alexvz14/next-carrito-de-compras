import {
  COMENZAR_DESCARGA_PRODUCTO,
  DESCARGA_PRODUCTO_EXITO,
  DESCARGA_PRODUCTO_ERROR
} from '../types/productsTypes';

//Cada reducer tiene su propio state
const initialState = {
  items: [],
  error: null,
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case COMENZAR_DESCARGA_PRODUCTO:
      return {
        ...state,
        loading: true,
        error: null
      }
    case DESCARGA_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        items: action.payload 
      }
    case DESCARGA_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}