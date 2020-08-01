import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR 
  } from '../types/index'
  import axiosClient from '../../config/axios'; 
  import Swal from 'sweetalert2';

//Agregar un producto al carrito
export function addProductToCart( product ) {
  return async (dispatch, getState) => {
    dispatch( addProduct() );
    const cart = {
      token:700,
      item: product
    }
    try {
      //API Call
      await axiosClient.post('/cart',cart)
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Tu producto se encuentra en el carrito',
        html:
          'Tu producto se encuentra en el carrito, <br>' +
          '<a class="text-blue-500 underline" href="//sweetalert2.github.io">Ir al carrito</a> '
      });
      dispatch( addProductSuccess(product) )
    } catch (error) {
      dispatch( addProductError(error.response.data) )
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text : error.response.data
      });
    }
  }
}

const addProduct = () => ({
  type: AGREGAR_PRODUCTO
});

//Si el producto se guarda en la BD 
const addProductSuccess = payload => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: payload
});

//Si existe un error
const addProductError = payload => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: payload
});