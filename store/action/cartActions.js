import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    SET_CART_TOKEN
  } from '../types/cartTypes'
import axiosClient from '../../config/axios'; 
import Swal from 'sweetalert2';
import Router from 'next/router';
import guid from '../../helpers/uuid';


//Agregar un producto al carrito
export function addProductToCart( product ) {

  return async (dispatch, getState) => {
    dispatch( addProduct() );
    const cart = {
      token:getState().cart.token,
      item: product
    }
    try {
      //API Call
      await axiosClient.post('/cart',cart)
      Swal.fire({
        title: 'Correcto',
        text: 'Tu producto se encuentra en el carrito',
        icon: 'success',
      })
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

export function setCartTokenAction() {
  const token = guid();
  return (dispatch) => {
    dispatch( addToken(token) );
  }
}

const addToken = payload => ({
    type: SET_CART_TOKEN,
    payload: payload
})

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