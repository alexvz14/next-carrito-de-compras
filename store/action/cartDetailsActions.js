import {
    OBTENER_DETALLES_CARRITO,
    OBTENER_DETALLES_CARRITO_EXITO,
    OBTENER_DETALLES_CARRITO_ERROR,
    DELETE_ITEMCARRITO,
    DELETE_ITEMCARRITO_EXITO,
    DELETE_ITEMCARRITO_ERROR,
    UPDATE_ITEMCARRITO,
    UPDATE_ITEMCARRITO_EXITO,
    UPDATE_ITEMCARRITO_ERROR
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

//Eliminar un producto del carrito
export function deleteItemCartAction(item) {

  return async (dispatch, getState) => {
    dispatch( deleteItem() );
    const token = getState().cart.token;
    const itemToDelete = {
      token: token,
      item: item
    }
    try {
      //Eliminar carrito
      await axiosClient.post('/cart/item', itemToDelete)

      dispatch(deleteItemSuccess());

      Swal.fire({
        title: 'Correcto',
        text: 'Tu producto se ha eliminado del carrito',
        icon: 'success',
      })

      //Dispath Acción detalle del carrito
      dispatch(getCartDetailsAction());

    } catch (error) {
      dispatch( deleteItemError(error.response.data) )
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

//Actualizar un producto del carrito
export function updateItemCartAction(item) {
  return async (dispatch, getState) => {
    dispatch( updateItem() );
    const token = getState().cart.token;
    const itemToUpdate = {
      token: token,
      item: item.item,
      model: item.model
    }
    try {
      //Eliminar carrito
      await axiosClient.post('/cart/update', itemToUpdate)

      dispatch(updateItemSuccess());

      Swal.fire({
        title: 'Correcto',
        text: 'Tu producto se ha actualizado del carrito',
        icon: 'success',
      })

      //Dispath Acción detalle del carrito
      dispatch(getCartDetailsAction());

    } catch (error) {
      dispatch( updateItemError(error.response.data) )
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

const deleteItem = () => ({
  type: DELETE_ITEMCARRITO
});

//Si obtenemos los detalles del carrito
const deleteItemSuccess = payload => ({
  type: DELETE_ITEMCARRITO_EXITO,
});

//Si existe un error
const deleteItemError = payload => ({
  type: DELETE_ITEMCARRITO_ERROR,
  payload: payload
});

//Update item
const updateItem = () => ({
  type: UPDATE_ITEMCARRITO
});

//Si obtenemos los detalles del carrito
const updateItemSuccess = payload => ({
  type: UPDATE_ITEMCARRITO_EXITO,
});

//Si existe un error
const updateItemError = payload => ({
  type: UPDATE_ITEMCARRITO_ERROR,
  payload: payload
});