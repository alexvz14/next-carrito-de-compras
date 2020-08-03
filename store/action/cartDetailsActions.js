import {
    OBTENER_DETALLES_CARRITO,
    OBTENER_DETALLES_CARRITO_EXITO,
    OBTENER_DETALLES_CARRITO_ERROR
  } from '../types/cartTypes'
import axiosClient from '../../config/axios'; 
import Swal from 'sweetalert2';

//Agregar un producto al carrito
export function getCartDetailsAction() {

  return async (dispatch, getState) => {
    dispatch( getDetails() );
    const token = getState().cart.token;
    try {
      //API Call
      const cart = await axiosClient.get('/cart/'+token+'/')
      dispatch( getDetailsSuccess(cart.data) )
    } catch (error) {
      dispatch( getDetailsError(error.response.data) )
      if(error.response.status !== 404){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text : error.response.data
        });
      }
    }
  }
}

const getDetails = () => ({
  type: OBTENER_DETALLES_CARRITO
});

//Si obtenemos los detalles del carrito
const getDetailsSuccess = payload => ({
  type: OBTENER_DETALLES_CARRITO_EXITO,
  payload: payload
});

//Si existe un error
const getDetailsError = payload => ({
  type: OBTENER_DETALLES_CARRITO_ERROR,
  payload: payload
});