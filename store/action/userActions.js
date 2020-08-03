import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR
} from '../types/userTypes'
import Swal from 'sweetalert2';

//Agregar usuario
export function setUserAction( user ) {
  return (dispatch) => {
    dispatch( setUser() )
    try {
      if(user){
        dispatch( setUserSuccess(user) );
        Swal.fire({
          title: 'Correcto',
          text: 'Su información de contacto se ha guardado',
          icon: 'success',
        })
      }
      
    } catch (error) {
      const errorMsj = 'Error al guardar sus datos';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text : errorMsj
      });
      dispatch( setUserError(errorMsj) );
    }
  }
}

const setUser = payload => ({
    type: AGREGAR_USUARIO
})

const setUserSuccess = payload => ({
  type: AGREGAR_USUARIO_EXITO,
  payload: payload
})
  

const setUserError = payload => ({
  type: AGREGAR_USUARIO_ERROR,
  payload: payload
})
  