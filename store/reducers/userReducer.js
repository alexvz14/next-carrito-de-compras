import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types/userTypes';
  
//Cada reducer tiene su propio state
const initialState = {
  name: '',
  lastname: '',
  error: null,
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case AGREGAR_USUARIO:
      return {
        ...state,
        error: null,
        loading: true
      }
    case AGREGAR_USUARIO_EXITO:
      return {
        ...state,
        name: action.payload.name,
        lastname: action.payload.lastname
      }
    case AGREGAR_USUARIO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: true
      }
    default:
      return state;
  }
}