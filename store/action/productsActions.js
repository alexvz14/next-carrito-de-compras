import {
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR
  } from '../types/productsTypes'
  import axiosClient from '../../config/axios'; 
  import Swal from 'sweetalert2';

//Obtener el listado de producto
export function getProductsAction( ) {
  return async (dispatch, ) => {
    dispatch( getProducts() );
    try {
      //API Call
      const response = await axiosClient.get('/products')
      dispatch( getProductsSuccess(response.data) )
    } catch (error) {
      dispatch( getProductsError(error.response.data) )
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text : error.response.data
      });
    }
  }
}

const getProducts = () => ({
  type: COMENZAR_DESCARGA_PRODUCTO
});

//Si el producto se guarda en la BD 
const getProductsSuccess = payload => ({
  type: DESCARGA_PRODUCTO_EXITO,
  payload: payload
});

//Si existe un error
const getProductsError = payload => ({
  type: DESCARGA_PRODUCTO_ERROR,
  payload: payload
});